import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Martin Tremblay', type: 'Toiture', quote: "Une équipe super professionnelle. Ils ont refait ma toiture en un temps record et ont laissé le terrain impeccable." },
  { name: 'Sophie L.', type: 'Rénovation Cuisine', quote: "Le souci du détail de l'équipe Sergerie est impressionnant. Ma nouvelle cuisine est exactement comme je l'avais imaginée." },
  { name: 'Pierre-Luc Côté', type: 'Sous-sol', quote: "Des gars fiables, polis et ponctuels. C'est rare de nos jours dans la construction. Je les recommande sans hésiter." }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]" data-testid="testimonials-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#FF6501]"></div>
            <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">Ils nous font confiance</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-10 rounded-md relative shadow-sm border-l-4 border-[#FF6501]" data-testid={`testimonial-card-${idx}`}>
                <div className="text-5xl font-serif text-[#E4E4E4] absolute top-6 right-8 opacity-50">"</div>
                <p className="text-lg italic text-[#1B1B1B]/80 mb-8 relative z-10">{test.quote}</p>
                <div>
                  <h4 className="font-bold uppercase tracking-wide">{test.name}</h4>
                  <p className="text-[#FF6501] text-sm font-bold uppercase tracking-wider">{test.type}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
