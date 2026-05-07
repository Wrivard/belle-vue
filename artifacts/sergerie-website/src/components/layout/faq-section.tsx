import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Êtes-vous un entrepreneur général licencié?', a: 'Oui. Réno-Action FB inc. est un entrepreneur général dûment licencié par la Régie du bâtiment du Québec — licence RBQ 5698-3927-01. Cela vous garantit le sérieux, la conformité et la protection de votre projet.' },
  { value: 'item-2', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une soumission détaillée et transparente, sans engagement.' },
  { value: 'item-3', q: 'Quels types de travaux réalisez-vous?', a: 'Nous réalisons la construction et la rénovation résidentielle, commerciale et industrielle : maisons neuves, bâtiments commerciaux, agrandissements, rénovations complètes, portes et fenêtres, finition intérieure et revêtement extérieur.' },
  { value: 'item-4', q: 'Quelle région desservez-vous?', a: "Nous sommes basés à Coaticook, QC, et nous desservons la grande région de l'Estrie ainsi que les municipalités environnantes." },
  { value: 'item-5', q: 'Prenez-vous en charge les projets de A à Z?', a: 'Absolument. Comme entrepreneur général, nous gérons la planification, la coordination des sous-traitants, l\'achat des matériaux, l\'exécution des travaux et la finition. Un seul interlocuteur, du plan à la livraison.' },
  { value: 'item-6', q: 'Travaillez-vous autant en résidentiel qu\'en commercial?', a: 'Oui. Notre force est notre polyvalence : nous intervenons en résidentiel, commercial et industriel avec la même rigueur et le même standard de qualité, peu importe l\'ampleur du projet.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#114D8B]"></div>
            <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#114D8B]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#114D8B] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
