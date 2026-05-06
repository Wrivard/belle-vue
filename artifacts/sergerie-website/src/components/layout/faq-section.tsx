import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une estimation détaillée et transparente, sans engagement.' },
  { value: 'item-2', q: 'Quels types de travaux réalisez-vous?', a: 'Nous sommes spécialisés en rénovation résidentielle intérieure et extérieure : cuisines, salles de bain, finition intérieure, revêtements extérieurs, balcons et travaux sur mesure. Contactez-nous pour discuter de votre projet.' },
  { value: 'item-3', q: 'Quelle région desservez-vous?', a: "Nous sommes basés à Sainte-Julienne, QC, et nous desservons la grande région de Lanaudière, des Laurentides et de la couronne nord de Montréal." },
  { value: 'item-4', q: 'Prenez-vous en charge les projets de A à Z?', a: 'Absolument. Nous offrons un service clés en main. Nous gérons la planification, la commande des matériaux, l\'exécution des travaux et la finition, en gardant le chantier propre à chaque étape.' },
  { value: 'item-5', q: 'Quels sont vos délais pour débuter les travaux?', a: 'Les délais varient en fonction de l\'ampleur du projet. Lors de la soumission, nous établissons ensemble un échéancier réaliste que nous nous engageons à respecter, pour une exécution moderne et polie.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
            <span className="text-[#2D4FA8] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#2D4FA8]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#2D4FA8] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
