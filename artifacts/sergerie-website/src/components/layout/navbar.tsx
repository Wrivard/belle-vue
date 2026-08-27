import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { img } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    ['services', 'Services'],
    ['pourquoi', 'Le sur mesure'],
    ['realisations', 'Réalisations'],
    ['approche', 'Notre approche'],
    ['apropos', 'À propos'],
    ['temoignages', 'Témoignages'],
    ['faq', 'FAQ'],
    ['contact', 'Contact'],
  ];

  return (
    <>
      <nav data-testid="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-[#1B1B1B]/95 backdrop-blur py-4 shadow-sm'} text-[#E4E4E4] border-b border-white/10`}>
        <div className="container mx-auto px-6 max-w-[1360px] flex items-center justify-between">
          <Link href="/" data-testid="link-home-logo" className="shrink-0">
            <img src={img('logo-armoire-belle-vue.png')} alt="Armoire Belle-Vue Ébénisterie inc." className="h-[58px] md:h-[66px] w-auto object-contain" />
          </Link>
          <div className="hidden xl:flex items-center gap-4 font-semibold text-[11px] tracking-wide uppercase">
            <a href={import.meta.env.BASE_URL} className="hover:text-[#FF4B50] transition-colors" data-testid="link-accueil">Accueil</a>
            {menuItems.map(([id, label]) => <button key={id} onClick={() => scrollToSection(id)} className="hover:text-[#FF4B50] transition-colors uppercase" data-testid={`link-${id}`}>{label}</button>)}
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:+14186721613" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide" data-testid="link-phone"><Phone size={16} className="text-[#D71920]" />(418) 672-1613</a>
            <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} data-testid="link-soumission-nav"><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 py-5 uppercase tracking-wide transition-transform hover:scale-105">Demander une soumission</Button></Link>
          </div>
          <button className="xl:hidden text-[#E4E4E4]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} data-testid="button-mobile-menu">{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] pt-28 px-6 xl:hidden flex flex-col gap-6 text-[#E4E4E4]" data-testid="mobile-menu">
          <Link href="/" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
          {menuItems.map(([id, label]) => <button key={id} onClick={() => scrollToSection(id)} className="text-2xl font-bold uppercase text-left">{label}</button>)}
          <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md py-6 mt-4 uppercase tracking-wide text-lg w-full">Demander une soumission</Button></Link>
        </div>
      )}
    </>
  );
}