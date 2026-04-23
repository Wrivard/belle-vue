import { FadeIn } from './fade-in';

const testimonials = [
  { name: 'Michel Bergeron', type: 'Rénovation', quote: "Une équipe sérieuse et fiable. Ils ont rénové notre sous-sol de fond en comble, travail propre et livré dans les délais. Je recommande sans hésiter." },
  { name: 'Carole D.', type: 'Portes et fenêtres', quote: "Remplacement de toutes nos fenêtres effectué rapidement et sans tracas. Le résultat est impeccable et l'équipe a pris soin de tout nettoyer après." },
  { name: 'Jean-François Roy', type: 'Agrandissement', quote: "Construction Pro 3M a agrandi notre maison avec professionnalisme. Des gars de terrain, ponctuels et honnêtes. On voit qu'ils font ça avec passion." }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="testimonials-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#F47A1F]"></div>
            <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">Ils nous font confiance</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-white p-10 rounded-md relative shadow-sm border-l-4 border-[#F47A1F]" data-testid={`testimonial-card-${idx}`}>
                <div className="text-5xl font-serif text-[#EDEDED] absolute top-6 right-8 opacity-50">"</div>
                <p className="text-lg italic text-[#1B1B1B]/80 mb-8 relative z-10">{test.quote}</p>
                <div>
                  <h4 className="font-bold uppercase tracking-wide">{test.name}</h4>
                  <p className="text-[#F47A1F] text-sm font-bold uppercase tracking-wider">{test.type}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
