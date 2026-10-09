import type { QuoteInput } from '@workspace/api-client-react';

export type QuotePhoto = NonNullable<QuoteInput['photos']>[number] & {
  originalName: string;
  bytes: number;
};

const MAX_IMAGE_BYTES = 25_000_000;
const MAX_COMPRESSED_BYTES = 700_000;
const SUPPORTED = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']);

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Cette image ne peut pas être ouverte dans votre navigateur. Essayez une photo JPG, PNG ou WebP.')); };
    image.src = url;
  });
}

function jpeg(canvas: HTMLCanvasElement, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob(
    blob => blob ? resolve(blob) : reject(new Error('Impossible de compresser cette photo. Essayez un autre fichier.')),
    'image/jpeg',
    quality,
  ));
}

function base64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.onerror = () => reject(new Error('Impossible de lire la photo compressée.'));
    reader.readAsDataURL(blob);
  });
}

export async function compressQuotePhoto(file: File, index: number): Promise<QuotePhoto> {
  if (!SUPPORTED.has(file.type.toLowerCase()) || !file.size || file.size > MAX_IMAGE_BYTES) {
    throw new Error('Choisissez une image JPG, PNG, WebP ou HEIC de 25 Mo maximum.');
  }
  const image = await loadImage(file);
  if (!image.naturalWidth || !image.naturalHeight || image.naturalWidth * image.naturalHeight > 50_000_000) {
    throw new Error('Cette photo est trop grande pour être traitée. Essayez une autre image.');
  }
  const canvas = document.createElement('canvas');
  const ratio = Math.min(1, 1800 / Math.max(image.naturalWidth, image.naturalHeight));
  canvas.width = Math.max(1, Math.round(image.naturalWidth * ratio));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * ratio));
  const context = canvas.getContext('2d');
  if (!context) throw new Error('La compression des photos n’est pas disponible dans ce navigateur.');
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  let compressed = await jpeg(canvas, 0.82);
  for (let attempt = 0; compressed.size > MAX_COMPRESSED_BYTES && attempt < 8; attempt++) {
    if (attempt < 3) compressed = await jpeg(canvas, 0.7 - attempt * 0.12);
    else {
      const reduced = document.createElement('canvas');
      reduced.width = Math.max(1, Math.round(canvas.width * 0.75));
      reduced.height = Math.max(1, Math.round(canvas.height * 0.75));
      const reducedContext = reduced.getContext('2d');
      if (!reducedContext) break;
      reducedContext.drawImage(canvas, 0, 0, reduced.width, reduced.height);
      canvas.width = reduced.width;
      canvas.height = reduced.height;
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(reduced, 0, 0);
      compressed = await jpeg(canvas, 0.55);
    }
  }
  if (compressed.size > MAX_COMPRESSED_BYTES) {
    throw new Error('Cette photo reste trop volumineuse après compression. Essayez une autre image.');
  }
  return {
    filename: `photo-${index}.jpg`,
    content: await base64(compressed),
    originalName: file.name,
    bytes: compressed.size,
  };
}
