import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { QuoteForm } from '@/components/quote/quote-form';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { belleVueImages } from '@/data/belle-vue-images';
import { img } from '@/lib/utils';

const advantages = [
  'Armoires de cuisine sur mesure',
  'Vanités et armoires de salle de bain',
  'Rangement personnalisé',
  'Projets d’ébénisterie sur mesure',
  'Configuration adaptée à votre espace',
  'Attention portée aux détails',
];

export default function Soumission() {
  return (
    <PageWrapper hideMobileBackToTop>
      <section className="relative min-h-[46vh] md:min-h-[50vh] flex items-center pt-20" data-testid="soumission-hero">
        <div className="absolute inset-0 z-0">
          <img src={img(belleVueImages[24])} alt="Cuisine avec armoires sur mesure" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED] py-16">
          <div className="max-w-3xl">
            <FadeIn><div className="flex items-center gap-4 mb-6"><div className="w-12 h-1 bg-[#D71920]"></div><span className="text-[#FF4B50] font-bold tracking-[0.2em] uppercase text-sm">Armoire Belle-Vue Ébénisterie</span></div></FadeIn>
            <FadeIn delay={100}><h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white uppercase tracking-tight" data-testid="text-soumission-title">Parlez-nous de <span className="text-[#FF4B50]">votre projet.</span></h1></FadeIn>
            <FadeIn delay={200}><p className="text-lg md:text-xl text-[#EDEDED]/80 max-w-2xl font-medium leading-relaxed">Vous planifiez une nouvelle cuisine, une salle de bain ou un projet d’ébénisterie sur mesure? Parlons de vos habitudes, de votre espace et de vos besoins pour imaginer des armoires ergonomiques et adaptées à votre quotidien.</p></FadeIn>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#EDEDED]" data-testid="soumission-form-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-md shadow-lg overflow-hidden">
                  <div className="px-8 md:px-12 pt-8 md:pt-10"><div className="flex items-center gap-3 mb-2"><div className="w-8 h-1 bg-[#D71920]"></div><span className="text-[#B51218] font-bold tracking-[0.2em] uppercase text-xs">Votre projet, à votre mesure</span></div><h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#1B1B1B]">Demande de soumission</h2></div>
                  <div className="p-8 md:p-12 pt-6 md:pt-6"><QuoteForm /></div>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={200}><div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-contact"><h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Contactez-nous</h3><div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><Phone size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Téléphone</div><a href="tel:+14186721613" className="font-bold text-white text-lg hover:text-[#FF4B50] transition-colors">(418) 672-1613</a></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><Mail size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Courriel</div><a href="mailto:armoirebelle-vue@hotmail.ca" className="font-bold text-white hover:text-[#FF4B50] transition-colors text-sm break-all">armoirebelle-vue@hotmail.ca</a></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><MapPin size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Adresse</div><span className="font-bold text-white text-sm">381 rue Principale<br />Québec, G0V 1G0</span></div></div>
              </div></div></FadeIn>
              <FadeIn delay={350}><div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-advantages"><h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Nos services</h3><ul className="space-y-4">{advantages.map((item) => <li key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#FF4B50] shrink-0" /><span className="text-[#EDEDED]/80 text-sm font-medium">{item}</span></li>)}</ul></div></FadeIn>
              <FadeIn delay={500}><div className="relative overflow-hidden rounded-md h-[420px]"><img src={img(belleVueImages[11])} alt="Vanité de salle de bain sur mesure" loading="lazy" className="w-full h-full object-cover object-center" /><div className="absolute inset-0 bg-[#1B1B1B]/60"></div><div className="absolute bottom-0 left-0 w-full p-8"><p className="text-white font-bold text-lg uppercase tracking-wide leading-tight">Armoires sur mesure</p><p className="text-[#FF4B50] font-bold text-lg uppercase tracking-wide leading-tight">Pensées pour votre quotidien</p></div></div></FadeIn>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <FaqSection />
    </PageWrapper>
  );
}