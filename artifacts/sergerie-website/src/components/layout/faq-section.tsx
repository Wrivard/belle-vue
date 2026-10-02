import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from './fade-in';

const faqItems = [
  { value: 'item-1', q: 'Est-ce que vos armoires sont fabriquées sur mesure?', a: 'Oui. Armoire Belle-Vue Ébénisterie se spécialise dans les armoires sur mesure pour les cuisines, les salles de bain et les projets d’ébénisterie résidentiels.' },
  { value: 'item-2', q: 'Faites-vous des cuisines complètes?', a: 'Nous réalisons les armoires de cuisine et les solutions de rangement sur mesure. Communiquez avec nous pour discuter de la portée de votre projet.' },
  { value: 'item-3', q: 'Réalisez-vous des vanités de salle de bain?', a: 'Oui. Les vanités et armoires de salle de bain peuvent être pensées selon les dimensions disponibles, le rangement souhaité et la configuration du lavabo.' },
  { value: 'item-4', q: 'Peut-on remplacer seulement les armoires d’une cuisine existante?', a: 'Chaque projet est étudié selon l’espace et les besoins. Contactez-nous pour discuter de la possibilité d’adapter votre cuisine existante.' },
  { value: 'item-5', q: 'Comment adapter le rangement et l’ergonomie à ma cuisine?', a: 'La conception sur mesure permet de réfléchir à la configuration et à l’utilisation de l’espace afin de mieux répondre à vos besoins et à vos habitudes au quotidien.' },
  { value: 'item-6', q: 'Peut-on choisir les couleurs et les finis?', a: 'Les couleurs, les finis, les configurations et les détails sont discutés pendant la planification du projet.' },
  { value: 'item-7', q: 'Comment fonctionne une demande de soumission?', a: 'Présentez-nous votre projet par le formulaire, par téléphone au (418) 672-1613 ou par courriel à armoirebelle-vue@hotmail.ca. Nous prenons d’abord rendez-vous pour discuter de vos besoins, puis préparons la soumission et vous l’envoyons par courriel. Si la proposition et le prix vous conviennent, une rencontre à nos bureaux permet de vous présenter les plans, les couleurs, les modèles et les matériaux. Nous déterminons ensuite une date d’installation, prenons les mesures finales et réalisons l’installation.' },
  { value: 'item-8', q: 'Puis-je vous envoyer des photos ou des plans?', a: 'Oui. Le formulaire de soumission permet d’indiquer les détails de votre projet. Vous pouvez aussi joindre vos photos ou vos plans directement à votre courriel.' },
  { value: 'item-9', q: 'Réalisez-vous d’autres projets d’ébénisterie?', a: 'Nous étudions les projets d’ébénisterie et de rangement sur mesure. Envoyez-nous votre idée ou décrivez-nous l’espace à optimiser.' },
  { value: 'item-10', q: 'Quels secteurs desservez-vous?', a: 'Les secteurs desservis n’ont pas été précisés. Communiquez avec Armoire Belle-Vue Ébénisterie pour vérifier si votre projet peut être pris en charge.' },
  { value: 'item-11', q: 'Est-ce que les soumissions sont gratuites?', a: 'Oui, vous pouvez obtenir une soumission gratuite pour votre projet. Communiquez avec nous pour prendre rendez-vous et nous présenter vos besoins.' },
  { value: 'item-12', q: 'Quel est le délai de livraison?', a: 'Le délai varie selon votre projet et notre calendrier de production. Une date d’installation est déterminée avec vous au cours du processus; nous lui accordons une grande importance et faisons tout pour l’honorer.' },
  { value: 'item-13', q: 'À qui s’adressent vos services?', a: 'Nous travaillons principalement avec une clientèle résidentielle et des particuliers. Notre petite équipe vous accompagne tout au long de votre projet et reste disponible pour le service après-vente.' },
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
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
            {faqItems.map((item) => <AccordionItem key={item.value} value={item.value} className="border border-[#EDEDED]/20 rounded-md px-6 bg-[#161616]" data-testid={`faq-${item.value}`}><AccordionTrigger className="text-lg font-bold hover:text-[#FF4B50] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger><AccordionContent className="text-[#EDEDED]/70 text-base pb-6">{item.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}