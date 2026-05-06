import { img } from '@/lib/utils';
import { FadeIn } from './fade-in';

const certifications = [
  { src: 'logo-apchq.png', alt: 'APCHQ — Association des professionnels de la construction et de l\'habitation du Québec' },
  { src: 'logo-rbq.png', alt: 'Régie du bâtiment du Québec' },
  { src: 'logo-acq.png', alt: 'ACQ — Association de la construction du Québec' },
  { src: 'logo-garantie.png', alt: 'Garantie Construction Résidentielle' },
];

export function CertificationsSection() {
  return (
    <section className="py-16 bg-white border-b border-black/5" data-testid="certifications-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
            <span className="text-[#2D4FA8] font-bold tracking-widest uppercase text-sm">Certifications & Affiliations</span>
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-6 w-full h-28"
                data-testid={`cert-logo-${idx}`}
              >
                <img
                  src={img(cert.src)}
                  alt={cert.alt}
                  className="max-h-16 w-auto object-contain [filter:grayscale(1)_contrast(1.3)_brightness(0.7)] hover:[filter:none] transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
