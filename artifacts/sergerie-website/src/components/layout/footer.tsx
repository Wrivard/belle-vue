import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

const services = ['Armoires de cuisine sur mesure', 'Vanités et armoires de salle de bain', 'Rangement sur mesure', 'Projets d’ébénisterie'];

const home = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-[#E4E4E4] border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/"><img src={img('logo-armoire-belle-vue.png')} alt="Armoire Belle-Vue Ébénisterie inc." className="h-[78px] max-w-full w-auto object-contain mb-6" /></Link>
            <p className="text-[#E4E4E4]/70 mb-6 text-sm leading-relaxed">Des armoires sur mesure et des solutions d’ébénisterie pensées pour votre espace, vos besoins et votre quotidien.</p>
            <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center"><Phone size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#E4E4E4]/50 font-bold">Appelez-nous</div><a href="tel:+14186721613" className="font-bold text-[#E4E4E4] hover:text-[#FF4B50] transition-colors" data-testid="footer-phone">(418) 672-1613</a></div></div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#D71920] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#E4E4E4]/70 text-sm">{services.map((service) => <li key={service}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>{service}</span></li>)}</ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#D71920] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#E4E4E4]/70 text-sm">
              <li><Link href="/" className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href={home + '#services'} className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Services</a></li>
              <li><a href={home + '#realisations'} className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href={home + '#approche'} className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Notre approche</a></li>
              <li><a href={home + '#contact'} className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} className="hover:text-[#FF4B50] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D71920] rounded-full shrink-0"></span>Demander une soumission</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#D71920] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin size={18} className="text-[#FF4B50] shrink-0 mt-0.5" /><span className="text-[#E4E4E4]/70">381 rue Principale<br />Québec, G0V 1G0</span></li>
              <li className="flex items-start gap-3"><Phone size={18} className="text-[#FF4B50] shrink-0 mt-0.5" /><a href="tel:+14186721613" className="text-[#E4E4E4]/70 hover:text-[#FF4B50] transition-colors">(418) 672-1613</a></li>
              <li className="flex items-start gap-3"><Mail size={18} className="text-[#FF4B50] shrink-0 mt-0.5" /><a href="mailto:armoirebelle-vue@hotmail.ca" className="text-[#E4E4E4]/70 hover:text-[#FF4B50] transition-colors break-all">armoirebelle-vue@hotmail.ca</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#141414]"><div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E4E4E4]/60 font-medium"><p>© {new Date().getFullYear()} Armoire Belle-Vue Ébénisterie inc. Tous droits réservés.</p><Link href="/politique-cookies" className="underline underline-offset-4 hover:text-[#FF4B50]" data-testid="link-politique-cookies">Politique relative aux témoins</Link></div></div>
    </footer>
  );
}