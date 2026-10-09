import type { ImgHTMLAttributes } from 'react';
import { img } from '@/lib/utils';

const dimensions = [
  [1672, 941], [1448, 1086], [1086, 1448], [1672, 941],
  [1086, 1448], [1086, 1448], [1086, 1448], [1448, 1086],
  [1086, 1448], [1448, 1086], [1086, 1448], [1086, 1448],
  [1086, 1448], [1086, 1448], [1086, 1448], [1086, 1448],
  [1448, 1086], [1086, 1448], [1448, 1086], [1350, 1800],
  [1350, 1800], [1200, 1600], [739, 1600], [1800, 1350],
  [1600, 739], [739, 1600], [723, 1263], [739, 1600],
];
const descriptions: Record<number, string> = {
  1: 'Cuisine avec armoires blanches, îlot gris et comptoir clair',
  3: 'Rangement de cuisine sur mesure avec étagères et armoires',
  4: 'Cuisine ouverte avec armoires blanches et îlot gris',
  11: 'Vanité de salle de bain avec rangement intégré sur mesure',
  12: 'Vanité suspendue en bois clair et armoire de salle de bain assortie',
  20: 'Cuisine avec armoires blanches, dosseret clair et électroménagers noirs',
  24: 'Cuisine avec armoires claires et îlot à comptoir foncé',
  25: 'Cuisine ouverte avec armoires blanches et grand îlot central',
  28: 'Garde-manger sur mesure avec étagères ouvertes et rangement fermé',
};

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  image: string;
  priority?: boolean;
};

export function ProjectImage({ image, priority = false, alt, sizes = '(min-width: 768px) 600px, 100vw', ...props }: Props) {
  const number = Number(image.match(/belle-vue-(\d+)\.webp$/)?.[1]);
  const [width, height] = dimensions[number - 1] ?? [1448, 1086];
  const variants = [480, 800, 1200].filter((size) => size < width);
  const srcSet = [
    ...variants.map((size) => `${img(image.replace('.webp', `-${size}.webp`))} ${size}w`),
    `${img(image)} ${width}w`,
  ].join(', ');
  return <img
    {...props}
    src={img(image)}
    srcSet={srcSet}
    sizes={sizes}
    width={width}
    height={height}
    alt={alt ?? descriptions[number] ?? 'Cuisine avec armoires en bois clair et rangement sur mesure'}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
  />;
}
