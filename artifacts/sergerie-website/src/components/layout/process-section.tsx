import { FadeIn } from './fade-in';

const steps: { title: string; text: string; note?: string; items?: string[] }[] = [
  { title: 'Prise de rendez-vous', text: 'Nous prenons d’abord rendez-vous pour discuter de votre projet et recueillir les informations nécessaires à la préparation de la soumission.' },
  { title: 'Préparation de la soumission', text: 'Nous préparons votre soumission et vous l’envoyons par courriel.' },
  {
    title: 'Rencontre à nos bureaux',
    note: 'Seulement si la proposition et le prix vous conviennent, nous vous rencontrons à nos bureaux pour présenter :',
    text: '',
    items: ['Les plans', 'Les choix de couleurs', 'Les modèles et matériaux', 'Les autres éléments du projet'],
  },
  { title: 'Planification de l’installation', text: 'Nous choisissons ensemble la date d’installation et planifions la prise de mesures finales.' },
  { title: 'Prise de mesures', text: 'Nous prenons les mesures finales afin de préparer la fabrication et l’installation.' },
  { title: 'Installation', text: 'Votre projet est installé à la date convenue.' },
];

export function ProcessSection() {
  return (
    <section id="approche" className="scroll-mt-24 py-24 md:py-32 bg-[#EDEDED] text-[#171717]" data-testid="approach-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#D71920]" />
            <span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Notre approche</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-12 md:mb-16">Comment fonctionne le processus?</h2>
        </FadeIn>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {steps.map((s, idx) => (
            <li key={s.title} className="h-full" data-testid={`process-step-${idx + 1}`}>
              <FadeIn delay={idx * 70} className="h-full">
                <div className="h-full bg-white border-t-4 border-[#D71920] p-7 shadow-sm">
                  <span className="text-[#D71920] font-extrabold text-4xl leading-none tracking-tight">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="font-bold uppercase tracking-wide mt-4 mb-3">{s.title}</h3>
                  {s.note && <p className="text-[#171717]/70 leading-relaxed text-sm mb-3">{s.note}</p>}
                  {s.text && <p className="text-[#171717]/70 leading-relaxed text-sm">{s.text}</p>}
                  {s.items && (
                    <ul className="space-y-1.5 text-sm text-[#171717]/80">
                      {s.items.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#D71920] shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
