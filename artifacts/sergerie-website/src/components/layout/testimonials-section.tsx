import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Sophie Tremblay', type: 'Rénovation intérieure', quote: "Marinier Rénovations a complètement transformé notre rez-de-chaussée. Travail propre, équipe respectueuse, finition impeccable. Je les recommande sans hésitation." },
  { name: 'Patrick Lemieux', type: 'Salle de bain', quote: "Notre nouvelle salle de bain est exactement ce qu'on souhaitait. L'équipe a été à l'écoute du début à la fin et le résultat est moderne et raffiné." },
  { name: 'Nathalie Gagnon', type: 'Rénovation extérieure', quote: "Revêtement extérieur refait au complet par Marinier Rénovations. Travail soigné, échéancier respecté, prix juste. Une équipe professionnelle et fiable." }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="testimonials-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
            <span className="text-[#2D4FA8] font-bold tracking-widest uppercase text-sm">Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">Ils nous font confiance</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-10 rounded-md relative shadow-sm border-l-4 border-[#2D4FA8]" data-testid={`testimonial-card-${idx}`}>
                <div className="text-5xl font-serif text-[#EDEDED] absolute top-6 right-8 opacity-50">"</div>
                <p className="text-lg italic text-[#1B1B1B]/80 mb-8 relative z-10">{test.quote}</p>
                <div>
                  <h4 className="font-bold uppercase tracking-wide">{test.name}</h4>
                  <p className="text-[#2D4FA8] text-sm font-bold uppercase tracking-wider">{test.type}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
