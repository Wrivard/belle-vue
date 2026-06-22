import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-white text-[#2A2A2A] border-t border-[#D9D9D9]" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={img('logo-fg-saguenay.png')} alt="Construction F.G. Saguenay" className="h-[70px] w-auto object-contain mb-6" />
            </Link>
            <p className="text-[#2A2A2A]/70 mb-6 text-sm leading-relaxed">
              Entrepreneur général spécialisé en rénovation résidentielle et commerciale, intérieure et extérieure. Service clé en main à Saguenay.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#155B2E] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#2A2A2A]/50 font-bold">Appelez-nous</div>
                <a href="tel:581-306-4207" className="font-bold text-[#2A2A2A] hover:text-[#155B2E] transition-colors" data-testid="footer-phone">(581) 306-4207</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#2A2A2A] border-b border-[#155B2E] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#2A2A2A]/70 text-sm">
              {['Rénovation résidentielle', 'Rénovation commerciale', 'Rénovation intérieure', 'Rénovation extérieure', 'Menuiserie et finition', 'Entrepreneur général / clé en main'].map((s) => (
                <li key={s}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#2A2A2A] border-b border-[#155B2E] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#2A2A2A]/70 text-sm">
              <li><Link href="/" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href="#services" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="#realisations" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="#apropos" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="#contact" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" className="hover:text-[#155B2E] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#155B2E] rounded-full shrink-0"></span>Soumission gratuite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#2A2A2A] border-b border-[#155B2E] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#155B2E] shrink-0 mt-0.5" />
                <span className="text-[#2A2A2A]/70">4805 Sentier du Lac-du-Rat-Musqué<br/>Saguenay, QC, G7B 0M7</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#155B2E] shrink-0 mt-0.5" />
                <a href="tel:581-306-4207" className="text-[#2A2A2A]/70 hover:text-[#155B2E] transition-colors">(581) 306-4207</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#155B2E] shrink-0 mt-0.5" />
                <a href="mailto:constructionfgsaguenay@hotmail.com" className="text-[#2A2A2A]/70 hover:text-[#155B2E] transition-colors">constructionfgsaguenay@hotmail.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#D9D9D9]">
              <div className="text-xs uppercase tracking-wider text-[#2A2A2A]/50 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#2A2A2A]/70">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#D9D9D9] bg-[#F5F5F5]">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#2A2A2A]/60 font-medium">
          <p>© {new Date().getFullYear()} Construction F.G. Saguenay. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>(581) 306-4207</span>
            <span className="text-[#2A2A2A]/30">|</span>
            <span>constructionfgsaguenay@hotmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
