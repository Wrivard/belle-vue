import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Christine Durand Duperre', type: 'Avis Google · Extrait traduit', quote: 'Nous recommandons de tout cœur Armoire Belle Vue à St-Charles-de-Bourget ! Une entreprise locale que nous sommes vraiment fiers de soutenir…' },
  { name: 'Frédéricke Savard', type: 'Avis Google · Extrait traduit', quote: 'Le meilleur duo, sans aucun doute ! Professionnels, compétents, propres et avec une incroyable attention aux détails. Leur travail est méticuleux, précis et vraiment de grande qualité du début à la fin…' },
  { name: 'Lucie Lapointe', type: 'Avis Google', quote: 'Excellent service' },
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
        <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]"></div><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Témoignages</span></div><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"><h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight max-w-3xl">Ce que nos clients disent de nous</h2></div></FadeIn>
        <FadeIn delay={150}>
          <Carousel opts={{ align: 'start', loop: true }} setApi={setApi} className="w-full" data-testid="testimonials-carousel">
            <CarouselContent className="-ml-6">
              {testimonials.map((test, idx) => <CarouselItem key={test.name} className="pl-6 md:basis-1/2 lg:basis-1/3"><figure className="bg-white p-8 rounded-md shadow-sm border-l-4 border-[#D71920] h-full flex flex-col min-h-[320px]" data-testid={`testimonial-card-${idx}`}><div className="flex gap-1 text-[#D71920] mb-6" aria-label="5 étoiles sur 5">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden="true" />)}</div><blockquote className="text-base md:text-lg text-[#1B1B1B]/80 mb-6 flex-1 leading-relaxed">« {test.quote} »</blockquote><figcaption className="border-t border-[#1B1B1B]/10 pt-4"><p className="font-bold text-sm">{test.name}</p><p className="text-[#D71920] text-xs font-semibold mt-1">{test.type}</p></figcaption></figure></CarouselItem>)}
            </CarouselContent>
            <div className="flex items-center justify-between gap-6 mt-10"><div className="flex items-center gap-2" data-testid="testimonials-dots">{Array.from({ length: count }).map((_, i) => <button key={i} onClick={() => api?.scrollTo(i)} aria-label={`Aller au témoignage ${i + 1}`} aria-current={i === current ? 'true' : undefined} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-[#D71920]' : 'w-3 bg-[#1B1B1B]/20 hover:bg-[#1B1B1B]/40'}`} />)}</div><div className="flex items-center gap-3"><CarouselPrevious aria-label="Témoignage précédent" style={{ left: 'auto', right: 'auto', top: 'auto', bottom: 'auto' }} className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#D71920] hover:border-[#D71920] hover:text-white transition-colors" data-testid="testimonial-prev" /><CarouselNext aria-label="Témoignage suivant" style={{ left: 'auto', right: 'auto', top: 'auto', bottom: 'auto' }} className="static translate-y-0 h-11 w-11 rounded-full border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#D71920] hover:border-[#D71920] hover:text-white transition-colors" data-testid="testimonial-next" /></div></div>
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}