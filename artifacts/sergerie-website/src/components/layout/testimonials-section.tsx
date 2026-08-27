import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Cuisine sur mesure', type: 'Projet personnalisé', quote: 'Une configuration pensée autour de la façon dont l’espace est utilisé au quotidien.' },
  { name: 'Salle de bain', type: 'Vanité et rangement', quote: 'Des dimensions et des rangements adaptés à la pièce et aux besoins du projet.' },
  { name: 'Rangement personnalisé', type: 'Solution sur mesure', quote: 'Une solution conçue pour intégrer naturellement le rangement à l’espace disponible.' },
  { name: 'Projet d’ébénisterie', type: 'Fabrication sur mesure', quote: 'Une idée précise devient un projet réfléchi autour des besoins et des détails souhaités.' },
];

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => { api.off('select', onSelect); };
  }, [api]);

  return (
    <section id="temoignages" className="scroll-mt-24 py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="testimonials-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]"></div><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Le sur mesure</span></div><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"><h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Des solutions pensées pour vous</h2><p className="text-[#1B1B1B]/60 text-sm font-medium">Découvrez nos domaines d’ébénisterie</p></div></FadeIn>
        <FadeIn delay={150}>
          <Carousel opts={{ align: 'start', loop: true }} setApi={setApi} className="w-full" data-testid="testimonials-carousel">
            <CarouselContent className="-ml-6">
              {testimonials.map((test, idx) => <CarouselItem key={idx} className="pl-6 md:basis-1/2 lg:basis-1/3"><div className="bg-white p-8 md:p-10 rounded-md shadow-sm border-l-4 border-[#D71920] h-full flex flex-col min-h-[280px]" data-testid={`testimonial-card-${idx}`}><div className="text-5xl font-serif text-[#D71920]/15 leading-none mb-2">"</div><p className="text-base md:text-lg italic text-[#1B1B1B]/80 mb-6 flex-1 leading-relaxed">{test.quote}</p><div className="border-t border-[#1B1B1B]/10 pt-4"><h4 className="font-bold uppercase tracking-wide text-sm">{test.name}</h4><p className="text-[#D71920] text-xs font-bold uppercase tracking-wider mt-1">{test.type}</p></div></div></CarouselItem>)}
            </CarouselContent>
            <div className="flex items-center justify-between gap-6 mt-10"><div className="flex items-center gap-2" data-testid="testimonials-dots">{Array.from({ length: count }).map((_, i) => <button key={i} onClick={() => api?.scrollTo(i)} aria-label={`Aller au projet ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-[#D71920]' : 'w-3 bg-[#1B1B1B]/20 hover:bg-[#1B1B1B]/40'}`} />)}</div><div className="flex items-center gap-3"><CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#D71920] hover:border-[#D71920] hover:text-white transition-colors" data-testid="testimonial-prev" /><CarouselNext className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#D71920] hover:border-[#D71920] hover:text-white transition-colors" data-testid="testimonial-next" /></div></div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}