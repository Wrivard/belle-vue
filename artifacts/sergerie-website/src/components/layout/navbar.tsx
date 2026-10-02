import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { img } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    ['pourquoi', 'Le sur mesure'],
    ['approche', 'Notre approche'],
    ['temoignages', 'Témoignages'],
    ['faq', 'FAQ'],
    ['contact', 'Contact'],
    ['politique-cookies', 'Politique relative aux témoins'],
  ];

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const homeSectionHref = (id: string) => `${import.meta.env.BASE_URL}#${id}`;

  return (
    <>
      <nav data-testid="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-[#1B1B1B]/95 backdrop-blur py-4 shadow-sm'} text-[#E4E4E4] border-b border-white/10`}>
        <div className="container mx-auto px-6 max-w-[1360px] flex items-center justify-between">
          <Link href="/" data-testid="link-home-logo" className="shrink-0">
            <img src={img('logo-armoire-belle-vue.png')} alt="Armoire Belle-Vue Ébénisterie inc." className="h-[58px] md:h-[66px] w-auto object-contain" />
          </Link>
          <div className="hidden xl:flex items-center gap-5 font-semibold text-[11px] tracking-wide uppercase">
            <a href={import.meta.env.BASE_URL} className="hover:text-[#FF4B50] transition-colors" data-testid="link-accueil">Accueil</a>
            <a href={homeSectionHref('apropos')} className="hover:text-[#FF4B50] transition-colors" data-testid="link-apropos">À propos</a>
            <div className="relative group" onMouseLeave={() => setServicesOpen(false)}>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 hover:text-[#FF4B50] transition-colors uppercase" aria-expanded={servicesOpen} aria-haspopup="true" data-testid="link-services">
                Services <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 ${servicesOpen ? 'block' : 'hidden group-hover:block'}`}>
                <div className="overflow-hidden rounded-md border border-white/10 bg-[#1B1B1B] p-2 shadow-2xl">
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Armoires de cuisine sur mesure</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Vanités et armoires de salle de bain</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Rangement personnalisé</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Projets d’ébénisterie</a>
                </div>
              </div>
            </div>
            <a href={homeSectionHref('realisations')} className="hover:text-[#FF4B50] transition-colors" data-testid="link-realisations">Réalisations</a>
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:+14186721613" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide" data-testid="link-phone"><Phone size={16} className="text-[#D71920]" />(418) 672-1613</a>
            <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} data-testid="link-soumission-nav"><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 py-5 uppercase tracking-wide transition-transform hover:scale-105">Demander une soumission</Button></Link>
          </div>
          <button className="xl:hidden text-[#E4E4E4]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} data-testid="button-mobile-menu">{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] pt-28 px-6 xl:hidden flex flex-col gap-6 text-[#E4E4E4] overflow-y-auto" data-testid="mobile-menu">
          <Link href="/" className="text-2xl font-bold uppercase" onClick={closeMenus}>Accueil</Link>
          <a href={homeSectionHref('apropos')} className="text-2xl font-bold uppercase" onClick={closeMenus}>À propos</a>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-2 text-2xl font-bold uppercase text-left" aria-expanded={servicesOpen}>
              Services <ChevronDown size={22} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && <div className="mt-3 ml-4 space-y-3 border-l-2 border-[#D71920] pl-4">
              {['Armoires de cuisine sur mesure', 'Vanités et armoires de salle de bain', 'Rangement personnalisé', 'Projets d’ébénisterie'].map((service) => <a key={service} href={homeSectionHref('services')} onClick={closeMenus} className="block text-base font-semibold uppercase text-white/75">{service}</a>)}
            </div>}
          </div>
          <a href={homeSectionHref('realisations')} className="text-2xl font-bold uppercase" onClick={closeMenus}>Réalisations</a>
          {menuItems.map(([id, label]) => id === 'politique-cookies' ? <Link key={id} href="/politique-cookies" onClick={closeMenus} className="text-base font-bold uppercase text-left">{label}</Link> : <a key={id} href={homeSectionHref(id)} onClick={closeMenus} className="text-2xl font-bold uppercase text-left">{label}</a>)}
          <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md py-6 mt-4 uppercase tracking-wide text-lg w-full">Demander une soumission</Button></Link>
        </div>
      )}
    </>
  );
}