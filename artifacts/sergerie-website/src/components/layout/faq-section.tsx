import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une soumission détaillée et transparente, sans engagement.' },
  { value: 'item-2', q: 'Quels types de travaux réalisez-vous?', a: 'Nous sommes spécialisés en toiture résidentielle (installation, remplacement, réparation et entretien) et en rénovation résidentielle : rénovation générale, salle de bain, cuisine, revêtement extérieur et travaux extérieurs.' },
  { value: 'item-3', q: 'Quelle région desservez-vous?', a: 'Nous sommes basés à Saint-Constant, QC, et nous desservons principalement la Rive-Sud de Montréal et l\'Ouest-de-l\'Île ainsi que les municipalités environnantes.' },
  { value: 'item-4', q: 'Faites-vous l\'installation et le remplacement de toitures?', a: 'Oui. La toiture est notre spécialité : installation de toiture neuve, remplacement complet, réparations et inspection. Nous travaillons proprement et avec des matériaux durables.' },
  { value: 'item-5', q: 'Réalisez-vous les petits et moyens projets?', a: 'Absolument. Nous nous concentrons sur les petits et moyens projets résidentiels, du remplacement de toiture à la rénovation d\'une salle de bain ou d\'une cuisine, avec un service fiable et rapide.' },
  { value: 'item-6', q: 'Quelle est votre approche en matière de qualité?', a: 'Un travail propre et durable est au cœur de notre service. Que ce soit pour la toiture, le revêtement extérieur ou la rénovation intérieure, nous mettons un point d\'honneur à livrer un résultat soigné et fiable.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#FF0000]"></div>
            <span className="text-[#FF0000] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#FF0000]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF4D4D] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
