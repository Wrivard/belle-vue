import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-[#E4E4E4] border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={img('logo-construction-kmf.png')} alt="Construction KMF — Revêtement extérieur" className="h-[80px] w-auto object-contain mb-6" />
            </Link>
            <p className="text-[#E4E4E4]/70 mb-6 text-sm leading-relaxed">
              Spécialistes du revêtement extérieur pour projets résidentiels, commerciaux et de rénovation à Montréal et sur la Rive-Nord.
            </p>
            <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#29499A] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/50 font-bold">Appelez-nous</div>
                  <a href="tel:5148381641" className="font-bold text-[#E4E4E4] hover:text-[#29499A] transition-colors" data-testid="footer-phone">(514) 838-1641</a>
              </div>
            </div>
          </div>
          
          <div>
             <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#29499A] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#E4E4E4]/70 text-sm">
               {['Revêtement résidentiel', 'Revêtement commercial', 'Remplacement de revêtement', 'Construction neuve', 'Rénovation extérieure', 'Finitions extérieures'].map((s) => (
                 <li key={s}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#29499A] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#E4E4E4]/70 text-sm">
              <li><Link href="/" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href="#services" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="#realisations" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="#apropos" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="#contact" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" className="hover:text-[#29499A] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#29499A] rounded-full shrink-0"></span>Demander une soumission</Link></li>
            </ul>
          </div>

          <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#E4E4E4] border-b border-[#29499A] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#29499A] shrink-0 mt-0.5" />
                <span className="text-[#E4E4E4]/70">Montréal, Laval<br/>et la Rive-Nord</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#29499A] shrink-0 mt-0.5" />
                <a href="tel:5148381641" className="text-[#E4E4E4]/70 hover:text-[#29499A] transition-colors">(514) 838-1641</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#29499A] shrink-0 mt-0.5" />
                <a href="mailto:constructionkmf@gmail.com" className="text-[#E4E4E4]/70 hover:text-[#29499A] transition-colors break-all">constructionkmf@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/50 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#E4E4E4]/70">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 bg-[#141414]">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E4E4E4]/60 font-medium">
          <p>© {new Date().getFullYear()} Construction KMF. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>(514) 838-1641</span>
            <span className="text-[#E4E4E4]/30">|</span>
            <span>constructionkmf@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
