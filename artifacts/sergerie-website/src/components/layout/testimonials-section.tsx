import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Sophie Tremblay', type: 'Rénovation intérieure', quote: "Marinier Rénovations a complètement transformé notre rez-de-chaussée. Travail propre, équipe respectueuse, finition impeccable. Je les recommande sans hésitation." },
  { name: 'Patrick Lemieux', type: 'Salle de bain', quote: "Notre nouvelle salle de bain est exactement ce qu'on souhaitait. L'équipe a été à l'écoute du début à la fin et le résultat est moderne et raffiné." },
  { name: 'Nathalie Gagnon', type: 'Rénovation extérieure', quote: "Revêtement extérieur refait au complet par Marinier Rénovations. Travail soigné, échéancier respecté, prix juste. Une équipe professionnelle et fiable." },
  { name: 'Marc-André Côté', type: 'Cuisine', quote: "Notre cuisine a été refaite à neuf par l'équipe de Marinier. Du concept à l'installation, tout a été géré de façon impeccable. Le résultat dépasse nos attentes." },
  { name: 'Julie Bouchard', type: 'Finition intérieure', quote: "Excellent service, communication claire à chaque étape et un souci du détail qui se voit dans la finition. Je referai certainement affaire avec eux." },
  { name: 'François Dubé', type: 'Travaux sur mesure', quote: "Marinier Rénovations a su respecter nos demandes spécifiques et proposer des solutions intelligentes. Une équipe honnête, ponctuelle et très compétente." },
  { name: 'Caroline Poirier', type: 'Salle de bain', quote: "Salle de bain rénovée du sol au plafond. Le chantier a été propre, l'équipe courtoise et le résultat est tout simplement magnifique. Merci!" },
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
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
            <span className="text-[#2D4FA8] font-bold tracking-widest uppercase text-sm">Clients</span>
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
                    className="bg-white p-8 md:p-10 rounded-md shadow-sm border-l-4 border-[#2D4FA8] h-full flex flex-col min-h-[340px]"
                    data-testid={`testimonial-card-${idx}`}
                  >
                    <div className="text-5xl font-serif text-[#2D4FA8]/15 leading-none mb-2">"</div>
                    <p className="text-base md:text-lg italic text-[#1B1B1B]/80 mb-6 flex-1 leading-relaxed">{test.quote}</p>
                    <div className="border-t border-[#1B1B1B]/10 pt-4">
                      <h4 className="font-bold uppercase tracking-wide text-sm">{test.name}</h4>
                      <p className="text-[#2D4FA8] text-xs font-bold uppercase tracking-wider mt-1">{test.type}</p>
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
                    className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-[#2D4FA8]' : 'w-3 bg-[#1B1B1B]/20 hover:bg-[#1B1B1B]/40'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <CarouselPrevious
                  className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#2D4FA8] hover:border-[#2D4FA8] hover:text-white transition-colors"
                  data-testid="testimonial-prev"
                />
                <CarouselNext
                  className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#2D4FA8] hover:border-[#2D4FA8] hover:text-white transition-colors"
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
