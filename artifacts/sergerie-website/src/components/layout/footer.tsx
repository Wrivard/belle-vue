import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#EDEDED]" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={img('logo-construction-pro-3m.png')} alt="Construction Pro 3M" className="h-[60px] w-auto object-contain mb-6" />
            </Link>
            <p className="text-[#EDEDED]/60 mb-6 text-sm leading-relaxed">
              Entreprise spécialisée en rénovation résidentielle, portes et fenêtres, agrandissement et travaux résidentiels. Votre tranquillité d'esprit, notre savoir-faire !
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F47A1F] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold">Appelez-nous</div>
                <a href="tel:450-502-3399" className="font-bold text-white hover:text-[#F47A1F] transition-colors" data-testid="footer-phone">450-502-3399</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#F47A1F] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#EDEDED]/60 text-sm">
              {['Rénovation', 'Portes et fenêtres', 'Agrandissement', 'Travaux résidentiels'].map((s) => (
                <li key={s}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#F47A1F] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#EDEDED]/60 text-sm">
              <li><Link href="/" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href="#services" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="#realisations" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="#apropos" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="#contact" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" className="hover:text-[#F47A1F] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#F47A1F] rounded-full shrink-0"></span>Soumission gratuite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#F47A1F] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F47A1F] shrink-0 mt-0.5" />
                <span className="text-[#EDEDED]/60">850 rang des bas étangs, Québec</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#F47A1F] shrink-0 mt-0.5" />
                <a href="tel:450-502-3399" className="text-[#EDEDED]/60 hover:text-[#F47A1F] transition-colors">450-502-3399</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#F47A1F] shrink-0 mt-0.5" />
                <a href="mailto:constructionpro3m@gmail.com" className="text-[#EDEDED]/60 hover:text-[#F47A1F] transition-colors">constructionpro3m@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#EDEDED]/10">
              <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#EDEDED]/60">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#EDEDED]/10">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#EDEDED]/40 font-medium">
          <p>© {new Date().getFullYear()} Construction Pro 3M. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>450-502-3399</span>
            <span className="text-[#EDEDED]/20">|</span>
            <span>constructionpro3m@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
