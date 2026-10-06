import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Quels types de projets réalisez-vous?', a: 'Nous réalisons des armoires de cuisine, des vanités et armoires de salle de bain, du rangement et de l’ameublement sur mesure, principalement pour une clientèle résidentielle. Chaque projet est étudié selon votre espace et vos besoins; décrivez-nous votre idée pour en discuter.' },
  { value: 'item-2', q: 'Peut-on personnaliser les couleurs, les finis et le rangement?', a: 'Oui. Les couleurs, les finis, les configurations et les détails sont discutés pendant la planification. Le rangement est conçu selon votre espace, vos habitudes et vos besoins, pour une utilisation plus ergonomique au quotidien.' },
  { value: 'item-3', q: 'Comment obtenir une soumission gratuite?', a: 'Présentez-nous votre projet par le formulaire, par téléphone au (418) 672-1613 ou par courriel à armoirebelle-vue@hotmail.ca. Nous prenons rendez-vous pour discuter de vos besoins, puis préparons gratuitement votre soumission et vous l’envoyons par courriel.' },
  { value: 'item-4', q: 'Quels secteurs desservez-vous?', a: 'Nous desservons le Saguenay–Lac-Saint-Jean.' },
  { value: 'item-5', q: 'Quel est le délai de livraison et d’installation?', a: 'Le délai varie selon votre projet et notre calendrier de production. Une date d’installation est déterminée avec vous au cours du processus; nous lui accordons une grande importance et faisons tout pour l’honorer.' },
  { value: 'item-6', q: 'Puis-je vous envoyer des photos ou des plans?', a: 'Oui. Le formulaire de soumission permet d’indiquer les détails de votre projet et prépare un courriel dans votre application de messagerie. Joignez-y vous-même vos photos ou vos plans avant de l’envoyer. Vous pouvez aussi nous écrire directement par courriel.' },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]"></div><span className="text-[#FF4B50] font-bold tracking-widest uppercase text-sm">Questions</span><div className="w-8 h-1 bg-[#D71920]"></div></div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="rounded-md border border-[#EDEDED]/20 bg-[#161616] px-6"
                data-testid={`faq-${item.value}`}
              >
                <AccordionTrigger className="min-h-32 gap-4 py-5 text-left text-lg font-bold leading-7 hover:text-[#FF4B50] hover:no-underline lg:min-h-[104px]">
                  <span>{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-[#EDEDED]/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}