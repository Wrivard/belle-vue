import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une estimation détaillée et transparente.' },
  { value: 'item-2', q: 'Quels types de travaux réalisez-vous?', a: 'Nous sommes spécialisés en finition cuisine et salle de bain, finition intérieure (céramique, plancher, moulures), finition extérieure (revêtement et aluminium), agrandissement, balcon, cabanon et toiture.' },
  { value: 'item-3', q: 'Desservez-vous toute la région des Laurentides?', a: 'Oui, nous sommes basés à Saint-Jérôme mais nous nous déplaçons dans l\'ensemble de la région des Laurentides pour réaliser vos projets.' },
  { value: 'item-4', q: 'Prenez-vous en charge les projets de A à Z?', a: 'Absolument. Nous offrons un service clés en main. Nous gérons la planification, la commande des matériaux, l\'exécution des travaux et la finition, en gardant le chantier propre.' },
  { value: 'item-5', q: 'Quels sont vos délais pour débuter les travaux?', a: 'Les délais varient en fonction de l\'ampleur du projet et de la saison (surtout pour la toiture). Lors de la soumission, nous établissons un échéancier réaliste que nous nous engageons à respecter.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#F97316]"></div>
            <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#F97316]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#F97316] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
