import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { FadeIn } from './fade-in';
import { img } from '@/lib/utils';

interface ContactSectionProps { showForm?: boolean; }

export function ContactSection({ showForm = true }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="contact-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]"></div><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Contact</span></div>
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8">Parlons de <br />votre projet</h2>
            <p className="text-lg text-[#1B1B1B]/70 mb-12">Vous planifiez une nouvelle cuisine, une salle de bain ou un projet d’ébénisterie sur mesure? Communiquez avec nous pour présenter votre projet et discuter de vos besoins.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-6"><div className="w-14 h-14 bg-[#1B1B1B] text-[#FF4B50] rounded-md flex items-center justify-center shrink-0"><Phone size={24} /></div><div><h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Téléphone</h4><a href="tel:+14186721613" className="text-2xl font-bold hover:text-[#D71920] transition-colors" data-testid="text-phone">(418) 672-1613</a></div></div>
              <div className="flex items-start gap-6"><div className="w-14 h-14 bg-[#1B1B1B] text-[#FF4B50] rounded-md flex items-center justify-center shrink-0"><Mail size={24} /></div><div><h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Courriel</h4><a href="mailto:armoirebelle-vue@hotmail.ca" className="text-xl font-bold hover:text-[#D71920] transition-colors" data-testid="text-email">armoirebelle-vue@hotmail.ca</a></div></div>
              <div className="flex items-start gap-6"><div className="w-14 h-14 bg-[#1B1B1B] text-[#FF4B50] rounded-md flex items-center justify-center shrink-0"><MapPin size={24} /></div><div><h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Adresse</h4><p className="text-xl font-bold" data-testid="text-location">381 rue Principale<br /><span className="text-base text-[#1B1B1B]/60">Québec, G0V 1G0</span></p></div></div>
            </div>
            {!showForm && <div className="mt-12"><Link href="/soumission"><button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-8 py-5 uppercase tracking-wide text-base transition-transform hover:scale-105">Demander une soumission</button></Link></div>}
          </FadeIn>
          {showForm ? <FadeIn delay={200}><div className="bg-white p-10 rounded-md shadow-xl border-t-4 border-[#D71920]"><h3 className="text-2xl font-bold uppercase mb-4">Parlez-nous de votre projet</h3><p className="text-[#1B1B1B]/60">Utilisez notre formulaire de soumission pour nous transmettre les détails de votre idée.</p><Link href="/soumission"><button className="mt-8 w-full bg-[#1B1B1B] hover:bg-[#D71920] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-colors">Accéder au formulaire</button></Link></div></FadeIn> : <FadeIn delay={200}><div className="relative rounded-md overflow-hidden shadow-xl h-full min-h-[500px]"><img src={img('photo-cuisine.jpg')} alt="Projet de cuisine avec armoires sur mesure" loading="lazy" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#1B1B1B]/40"></div><div className="absolute bottom-0 left-0 w-full p-8 bg-[#1B1B1B]/80"><div className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-2">Armoire Belle-Vue Ébénisterie</div><p className="text-white font-bold text-lg uppercase tracking-wide">Armoires sur mesure</p><p className="text-[#FF4B50] font-bold text-lg uppercase tracking-wide">Fonctionnalité & détails</p></div></div></FadeIn>}
        </div>
      </div>
    </section>
  );
}