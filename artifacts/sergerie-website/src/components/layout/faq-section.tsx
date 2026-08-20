import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une soumission détaillée et transparente, sans engagement.' },
  { value: 'item-2', q: 'Quels types de revêtement installez-vous?', a: 'Construction KMF réalise des projets de revêtement résidentiel et commercial, de remplacement de revêtement, de construction neuve et de rénovation extérieure.' },
  { value: 'item-3', q: 'Quelle région desservez-vous?', a: 'Nous desservons notamment Montréal, Laval, Blainville, Terrebonne, Repentigny, la Rive-Nord et les secteurs environnants. Communiquez avec nous pour vérifier la disponibilité dans votre secteur.' },
  { value: 'item-4', q: 'Travaillez-vous sur des bâtiments commerciaux?', a: 'Oui. Nous proposons des solutions adaptées aux commerces, bâtiments professionnels, multilogements et projets de plus grande envergure.' },
  { value: 'item-5', q: 'Quels matériaux pouvez-vous installer?', a: 'Nous pouvons discuter de différentes options comme le revêtement métallique, le fibrociment, le vinyle, le bois, l’imitation bois, le composite et le revêtement architectural selon les besoins du projet.' },
  { value: 'item-6', q: 'Comment obtenir une soumission?', a: 'Remplissez notre formulaire ou appelez-nous directement au (514) 838-1641. Nous prendrons le temps de comprendre votre projet et de vous orienter vers la bonne solution.' },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="faq-section">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#29499A]"></div>
            <span className="text-[#29499A] font-bold tracking-widest uppercase text-sm">Questions</span>
            <div className="w-8 h-1 bg-[#29499A]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Questions fréquentes</h2>
        </FadeIn>

        <FadeIn delay={200}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}>
                <AccordionTrigger className="text-lg font-bold hover:text-[#29499A] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
