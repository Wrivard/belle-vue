import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown, Phone, Menu, X } from 'lucide-react';
import { img } from '@/lib/utils';
import { FacebookLink } from './facebook-link';

const primaryLinks = [
  ['apropos', 'À propos'],
  ['services', 'Services'],
  ['realisations', 'Réalisations'],
  ['pourquoi', 'Le sur mesure'],
  ['approche', 'Notre approche'],
] as const;

const helpfulLinks = [
  ['temoignages', 'Témoignages'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
] as const;

export function Navbar({ mobileMenuOpen, setMobileMenuOpen }: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const navigation = navigationRef.current;
    const toggle = toggleRef.current;
    const focusableElements = () => Array.from(
      navigation?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]') ?? [],
    ).filter((element) => !element.closest('[inert]') && element.getClientRects().length > 0);

    // Include the visible header and close button in the modal focus boundary.
    toggle?.focus({ preventScroll: true });
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileMenuOpen(false);
        setServicesOpen(false);
      } else if (event.key === 'Tab') {
        const elements = focusableElements();
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const containFocus = (event: FocusEvent) => {
      if (event.target instanceof Node && !navigation?.contains(event.target)) {
        toggle?.focus({ preventScroll: true });
      }
    };
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => {
      if (desktop.matches) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    closeOnDesktop();
    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', containFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', containFocus);
      if (toggle?.isConnected && toggle.getClientRects().length > 0) {
        toggle.focus({ preventScroll: true });
      }
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const homeSectionHref = (id: string) => `${import.meta.env.BASE_URL}#${id}`;

  return (
    <div
      ref={navigationRef}
      role={mobileMenuOpen ? 'dialog' : undefined}
      aria-modal={mobileMenuOpen ? true : undefined}
      aria-label={mobileMenuOpen ? 'Menu mobile' : undefined}
    >
      <nav data-testid="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled && !mobileMenuOpen ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-[#1B1B1B]/95 backdrop-blur py-4 shadow-sm'} text-[#E4E4E4] border-b border-white/10`}>
        <div className="container mx-auto px-6 max-w-[1360px] flex items-center justify-between">
          <Link href="/" data-testid="link-home-logo" className="shrink-0" onClick={closeMenus}>
            <img src={img('logo-armoire-belle-vue-ameublement.webp')} width={640} height={198} alt="Armoire Belle-Vue — Ameublement sur mesure" className="h-[58px] md:h-[66px] w-auto object-contain" />
          </Link>
          <div className="hidden xl:flex items-center gap-5 font-semibold text-[11px] tracking-wide uppercase">
            <a href={import.meta.env.BASE_URL} className="hover:text-[#FF4B50] transition-colors" data-testid="link-accueil">Accueil</a>
            <a href={homeSectionHref('apropos')} className="hover:text-[#FF4B50] transition-colors" data-testid="link-apropos">À propos</a>
            <div className="relative group" onMouseLeave={() => setServicesOpen(false)}>
              <button type="button" onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 hover:text-[#FF4B50] transition-colors uppercase" aria-expanded={servicesOpen} aria-haspopup="true" data-testid="link-services">
                Services <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 ${servicesOpen ? 'block' : 'hidden group-hover:block'}`}>
                <div className="overflow-hidden rounded-md border border-white/10 bg-[#1B1B1B] p-2 shadow-2xl">
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Armoires de cuisine sur mesure</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Vanités et armoires de salle de bain</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Rangement sur mesure</a>
                  <a href={homeSectionHref('services')} onClick={closeMenus} className="block rounded px-4 py-3 text-[11px] hover:bg-[#D71920] transition-colors">Ameublement sur mesure</a>
                </div>
              </div>
            </div>
            <a href={homeSectionHref('realisations')} className="hover:text-[#FF4B50] transition-colors" data-testid="link-realisations">Réalisations</a>
          </div>
          <div className="hidden xl:flex items-center gap-4">
            <FacebookLink iconOnly className="text-white hover:text-[#FF4B50]" iconClassName="h-11 w-11 bg-transparent text-[#E4E4E4] group-hover:bg-white/10 group-hover:text-[#FF4B50]" />
            <a href="tel:+14186721613" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide" data-testid="link-phone"><Phone size={16} className="text-[#D71920]" />(418) 672-1613</a>
            <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} data-testid="link-soumission-nav"><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 py-5 uppercase tracking-wide transition-transform hover:scale-105">Demander une soumission</Button></Link>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="xl:hidden rounded-md p-2 text-[#E4E4E4] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]"
            onClick={() => mobileMenuOpen ? closeMenus() : setMobileMenuOpen(true)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-dialog"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-dialog"
          role="navigation"
          aria-label="Menu mobile"
          className="fixed inset-x-0 bottom-0 top-[90px] z-40 overflow-y-auto overscroll-contain bg-[#171717] text-[#E4E4E4] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:top-[98px] xl:hidden"
          data-testid="mobile-menu"
        >
          <div className="mx-auto max-w-[600px] px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4B50]">Menu</p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              <Link
                href="/"
                onClick={closeMenus}
                data-testid="link-mobile-accueil"
                className="block min-h-11 py-2.5 text-lg font-semibold leading-6 text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]"
              >
                Accueil
              </Link>
              {primaryLinks.map(([id, label]) => (
                <a
                  key={id}
                  href={homeSectionHref(id)}
                  onClick={closeMenus}
                  data-testid={`link-mobile-${id}`}
                  className="block min-h-11 py-2.5 text-lg font-semibold leading-6 text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-5">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">À consulter</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {helpfulLinks.map(([id, label]) => (
                  <a
                    key={id}
                    href={homeSectionHref(id)}
                    onClick={closeMenus}
                    data-testid={`link-mobile-${id}`}
                    className="inline-flex min-h-10 items-center text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]"
                  >
                    {label}
                  </a>
                ))}
                <FacebookLink
                  iconOnly
                  onClick={closeMenus}
                  className="text-white/75 hover:text-white"
                  iconClassName="h-10 w-10 bg-transparent text-[#FF4B50] group-hover:bg-white/10"
                />
              </div>
            </div>

            <Link
              href="/politique-cookies"
              onClick={closeMenus}
              data-testid="link-mobile-politique-cookies"
              className="mt-3 inline-block text-xs font-medium text-white/45 underline decoration-white/20 underline-offset-4 hover:text-white/80"
            >
              Politique relative aux témoins
            </Link>

            <Link href="/soumission" onClick={() => { closeMenus(); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }} data-testid="link-soumission-mobile" className="mt-5 block">
              <Button className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D71920] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#B51218]">
                Demander une soumission <ArrowRight size={17} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}