import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Sophie Tremblay', type: 'Toiture résidentielle', quote: "Construction R. Lavallee Inc. a remplacé notre toiture au complet. Équipe ponctuelle, chantier propre et travail durable. Un entrepreneur fiable sur qui on peut vraiment compter." },
  { name: 'Patrick Lemieux', type: 'Rénovation de salle de bain', quote: "Notre salle de bain entièrement refaite. L'équipe a été à l'écoute du début à la fin et le résultat est superbe. Travail soigné, on est très satisfaits." },
  { name: 'Nathalie Gagnon', type: 'Revêtement extérieur', quote: "Revêtement extérieur refait au complet. Travail soigné, échéancier respecté, prix juste. Une équipe professionnelle et fiable, je recommande sans hésiter." },
  { name: 'Marc-André Côté', type: 'Rénovation générale', quote: "Construction R. Lavallee Inc. a géré notre rénovation du début à la fin. Service rapide, communication claire et travail impeccable. Très impressionné par leur sérieux." },
  { name: 'Julie Bouchard', type: 'Cuisine', quote: "Excellent service pour la rénovation de notre cuisine. Communication claire à chaque étape et un souci du détail évident. Je referai certainement affaire avec eux." },
  { name: 'François Dubé', type: 'Toiture résidentielle', quote: "Réparation de toiture exécutée rapidement et proprement. L'équipe a su régler le problème efficacement et durablement. Résultat impeccable, très professionnel." },
  { name: 'Caroline Poirier', type: 'Travaux extérieurs', quote: "Petits travaux extérieurs réalisés avec soin. Équipe courtoise, propre sur le chantier et résultat à la hauteur de nos attentes. Merci pour le beau travail!" },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="testimonials-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#FF0000]"></div>
            <span className="text-[#FF0000] font-bold tracking-widest uppercase text-sm">Clients</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Ils nous font confiance</h2>
            <p className="text-[#1B1B1B]/60 text-sm font-medium">Faites défiler pour découvrir tous les témoignages</p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <Carousel
            opts={{ align: 'start', loop: true }}
            setApi={setApi}
            className="w-full"
            data-testid="testimonials-carousel"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((test, idx) => (
                <CarouselItem key={idx} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="bg-white p-8 md:p-10 rounded-md shadow-sm border-l-4 border-[#FF0000] h-full flex flex-col min-h-[340px]"
                    data-testid={`testimonial-card-${idx}`}
                  >
                    <div className="text-5xl font-serif text-[#FF0000]/15 leading-none mb-2">"</div>
                    <p className="text-base md:text-lg italic text-[#1B1B1B]/80 mb-6 flex-1 leading-relaxed">{test.quote}</p>
                    <div className="border-t border-[#1B1B1B]/10 pt-4">
                      <h4 className="font-bold uppercase tracking-wide text-sm">{test.name}</h4>
                      <p className="text-[#FF0000] text-xs font-bold uppercase tracking-wider mt-1">{test.type}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-between gap-6 mt-10">
              <div className="flex items-center gap-2" data-testid="testimonials-dots">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Aller au témoignage ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-[#FF0000]' : 'w-3 bg-[#1B1B1B]/20 hover:bg-[#1B1B1B]/40'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <CarouselPrevious
                  className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-colors"
                  data-testid="testimonial-prev"
                />
                <CarouselNext
                  className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-colors"
                  data-testid="testimonial-next"
                />
              </div>
            </div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}
