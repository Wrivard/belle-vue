import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une soumission détaillée et transparente, sans engagement.' },
  { value: 'item-2', q: 'Quels types de travaux réalisez-vous?', a: 'Nous réalisons la rénovation résidentielle et commerciale, intérieure et extérieure : rénovation complète de maison, modernisation d\'espaces, finition intérieure (gypse, planchers, bois), revêtement extérieur, menuiserie sur mesure et gestion clé en main.' },
  { value: 'item-3', q: 'Quelle région desservez-vous?', a: 'Nous sommes basés à Saguenay, QC, et nous desservons la grande région du Saguenay–Lac-Saint-Jean ainsi que les municipalités environnantes.' },
  { value: 'item-4', q: 'Prenez-vous en charge les projets de A à Z?', a: 'Absolument. Comme entrepreneur général, nous gérons la planification, la coordination des sous-traitants, l\'achat des matériaux, l\'exécution des travaux et la finition. Un seul interlocuteur, du plan à la livraison.' },
  { value: 'item-5', q: 'Travaillez-vous autant en résidentiel qu\'en commercial?', a: 'Oui. Notre force est notre polyvalence : nous intervenons en résidentiel et commercial avec la même rigueur et le même standard de qualité de finition, peu importe l\'ampleur du projet.' },
  { value: 'item-6', q: 'Quelle est votre approche en matière de qualité de finition?', a: 'La finition soignée est au cœur de notre travail. Que ce soit pour du gypse, des planchers, du bois naturel, des détails architecturaux ou du revêtement extérieur, nous mettons un point d\'honneur à livrer un résultat haut de gamme et clé en main.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#155B2E]"></div>
            <span className="text-[#155B2E] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#155B2E]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#3DA65A] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
