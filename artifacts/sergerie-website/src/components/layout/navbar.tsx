import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { img } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-3 shadow-lg' : 'bg-white/95 backdrop-blur py-4 shadow-sm'} text-[#2A2A2A] border-b border-[#D9D9D9]`}
      >
        <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" data-testid="link-home-logo">
              <img src={img('logo-fg-saguenay.png')} alt="Construction F.G. Saguenay" className="h-[60px] w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide uppercase">
            <a href={import.meta.env.BASE_URL} className="hover:text-[#155B2E] transition-colors" data-testid="link-accueil">Accueil</a>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#155B2E] transition-colors uppercase" data-testid="link-services">Services</button>
            <button onClick={() => scrollToSection('realisations')} className="hover:text-[#155B2E] transition-colors uppercase" data-testid="link-realisations">Réalisations</button>
            <button onClick={() => scrollToSection('apropos')} className="hover:text-[#155B2E] transition-colors uppercase" data-testid="link-apropos">À propos</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#155B2E] transition-colors uppercase" data-testid="link-contact">Contact</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:581-306-4207" className="flex items-center gap-2 text-[#2A2A2A] font-bold text-sm tracking-wide" data-testid="link-phone">
              <Phone size={16} className="text-[#155B2E]" />
              (581) 306-4207
            </a>
            <Link href="/soumission" data-testid="link-soumission-nav">
              <Button className="bg-[#155B2E] hover:bg-[#1E7A3E] text-white font-bold rounded-md px-6 py-5 uppercase tracking-wide transition-transform hover:scale-105">
                Soumission gratuite
              </Button>
            </Link>
          </div>

          <button className="md:hidden text-[#2A2A2A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6 text-[#2A2A2A]" data-testid="mobile-menu">
          <Link href="/" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
          <button onClick={() => scrollToSection('services')} className="text-2xl font-bold uppercase text-left">Services</button>
          <button onClick={() => scrollToSection('realisations')} className="text-2xl font-bold uppercase text-left">Réalisations</button>
          <button onClick={() => scrollToSection('apropos')} className="text-2xl font-bold uppercase text-left">À propos</button>
          <button onClick={() => scrollToSection('contact')} className="text-2xl font-bold uppercase text-left">Contact</button>
          <Link href="/soumission">
            <Button className="bg-[#155B2E] hover:bg-[#1E7A3E] text-white font-bold rounded-md py-6 mt-4 uppercase tracking-wide text-lg w-full">
              Soumission gratuite
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
