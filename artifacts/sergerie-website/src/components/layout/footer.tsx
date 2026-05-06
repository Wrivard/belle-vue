import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-white text-[#3A3A3A] border-t border-[#D8D8D8]" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={img('logo-marinier-renovations.png')} alt="Marinier Rénovations" className="h-[70px] w-auto object-contain mb-6" />
            </Link>
            <p className="text-[#3A3A3A]/70 mb-6 text-sm leading-relaxed">
              Entreprise spécialisée en rénovation résidentielle intérieure et extérieure. Des services complets et professionnels pour votre maison.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#2D4FA8] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#3A3A3A]/50 font-bold">Appelez-nous</div>
                <a href="tel:514-578-5959" className="font-bold text-[#3A3A3A] hover:text-[#2D4FA8] transition-colors" data-testid="footer-phone">(514) 578-5959</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#3A3A3A] border-b border-[#2D4FA8] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#3A3A3A]/70 text-sm">
              {['Rénovation intérieure', 'Rénovation extérieure', 'Salle de bain & cuisine', 'Travaux résidentiels sur mesure'].map((s) => (
                <li key={s}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#3A3A3A] border-b border-[#2D4FA8] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#3A3A3A]/70 text-sm">
              <li><Link href="/" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href="#services" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="#realisations" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="#apropos" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="#contact" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" className="hover:text-[#2D4FA8] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4FA8] rounded-full shrink-0"></span>Soumission gratuite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-[#3A3A3A] border-b border-[#2D4FA8] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#2D4FA8] shrink-0 mt-0.5" />
                <span className="text-[#3A3A3A]/70">Sainte-Julienne, QC, Canada</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#2D4FA8] shrink-0 mt-0.5" />
                <a href="tel:514-578-5959" className="text-[#3A3A3A]/70 hover:text-[#2D4FA8] transition-colors">(514) 578-5959</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#2D4FA8] shrink-0 mt-0.5" />
                <a href="mailto:info@marinier-renovations.com" className="text-[#3A3A3A]/70 hover:text-[#2D4FA8] transition-colors">info@marinier-renovations.com</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#D8D8D8]">
              <div className="text-xs uppercase tracking-wider text-[#3A3A3A]/50 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#3A3A3A]/70">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#D8D8D8] bg-[#F5F5F5]">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#3A3A3A]/60 font-medium">
          <p>© {new Date().getFullYear()} Marinier Rénovations. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>(514) 578-5959</span>
            <span className="text-[#3A3A3A]/30">|</span>
            <span>info@marinier-renovations.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
