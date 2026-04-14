import { Link } from 'wouter';
import { Phone, MapPin, Mail } from 'lucide-react';
import { img } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-[#E4E4E4]" data-testid="footer">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img src={img('logo-sergerie.png')} alt="Les Rénovations Sergerie Inc." className="h-12 w-auto object-contain mb-6 brightness-0 invert" />
            </Link>
            <p className="text-[#E4E4E4]/60 mb-6 text-sm leading-relaxed">
              Entreprise spécialisée en toiture et rénovation résidentielle. Fiers de desservir Varennes et la Rive-Sud de Montréal avec rigueur et propreté.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6501] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/40 font-bold">Appelez-nous</div>
                <a href="tel:514-515-6795" className="font-bold text-white hover:text-[#FF6501] transition-colors" data-testid="footer-phone">514-515-6795</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#E4E4E4]/60 text-sm">
              {['Toiture', 'Cuisine', 'Salle de bain', 'Sous-sol', 'Revêtement extérieur', 'Balcon & Terrasse'].map((s) => (
                <li key={s}><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>{s}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#E4E4E4]/60 text-sm">
              <li><Link href="/" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Accueil</Link></li>
              <li><a href="#services" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="#realisations" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="#apropos" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="#contact" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Contact</a></li>
              <li><Link href="/soumission" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Soumission gratuite</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <span className="text-[#E4E4E4]/60">Varennes, Rive-Sud de Montréal, QC</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <a href="tel:514-515-6795" className="text-[#E4E4E4]/60 hover:text-[#FF6501] transition-colors">514-515-6795</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <a href="mailto:info@renovations-sergerie.ca" className="text-[#E4E4E4]/60 hover:text-[#FF6501] transition-colors">info@renovations-sergerie.ca</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#E4E4E4]/10">
              <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/40 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#E4E4E4]/60">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#E4E4E4]/10">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E4E4E4]/40 font-medium">
          <p>© {new Date().getFullYear()} Les Rénovations Sergerie Inc. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>RBQ: (À venir)</span>
            <span className="text-[#E4E4E4]/20">|</span>
            <div className="flex items-center gap-2">
              <span>Membre</span>
              <img src={img('logo-apchq.png')} alt="APCHQ" className="h-6 w-auto object-contain" data-testid="img-apchq-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
