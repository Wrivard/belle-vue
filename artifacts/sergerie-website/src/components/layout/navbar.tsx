import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, ChevronDown, Phone, Menu, X } from 'lucide-react';
import { img } from '@/lib/utils';

const primaryLinks = [
  ['apropos', 'À propos'],
  ['realisations', 'Réalisations'],
  ['pourquoi', 'Le sur mesure'],
  ['approche', 'Notre approche'],
] as const;

const serviceLinks = [
  'Armoires de cuisine sur mesure',
  'Vanités et armoires de salle de bain',
  'Rangement sur mesure',
  'Ameublement sur mesure',
];

const helpfulLinks = [
  ['temoignages', 'Témoignages'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  const homeSectionHref = (id: string) => `${import.meta.env.BASE_URL}#${id}`;

  return (
    <>
      <nav data-testid="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-[#1B1B1B]/95 backdrop-blur py-4 shadow-sm'} text-[#E4E4E4] border-b border-white/10`}>
        <div className="container mx-auto px-6 max-w-[1360px] flex items-center justify-between">
          <Link href="/" data-testid="link-home-logo" className="shrink-0" onClick={closeMenus}>
            <img src={img('logo-armoire-belle-vue.png')} alt="Armoire Belle-Vue Ébénisterie inc." className="h-[58px] md:h-[66px] w-auto object-contain" />
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
            <a href="tel:+14186721613" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide" data-testid="link-phone"><Phone size={16} className="text-[#D71920]" />(418) 672-1613</a>
            <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })} data-testid="link-soumission-nav"><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 py-5 uppercase tracking-wide transition-transform hover:scale-105">Demander une soumission</Button></Link>
          </div>
          <button
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
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-0 z-40 bg-[#171717] text-[#E4E4E4] xl:hidden"
          data-testid="mobile-menu"
        >
          <div className="mx-auto flex h-[100dvh] max-w-[1200px] flex-col px-6 pt-[92px]">
            <div className="mb-5 flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#FF4B50]">Armoire Belle-Vue</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">Navigation</h2>
              </div>
              <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-white/40 sm:block">Menu principal</span>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-x-12 gap-y-5 overflow-y-auto pb-5 md:grid-cols-[1fr_0.9fr]">
              <section aria-labelledby="explorer-title">
                <h3 id="explorer-title" className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Explorer</h3>
                <div className="divide-y divide-white/10">
                  <Link
                    href="/"
                    onClick={closeMenus}
                    data-testid="link-mobile-accueil"
                    className="group flex min-h-12 items-center justify-between py-2.5 text-xl font-semibold text-[#FF4B50] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50] sm:text-2xl"
                  >
                    <span>Accueil</span>
                    <ArrowUpRight size={19} className="text-[#FF4B50] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  {primaryLinks.map(([id, label]) => (
                    <a
                      key={id}
                      href={homeSectionHref(id)}
                      onClick={closeMenus}
                      data-testid={`link-mobile-${id}`}
                      className="group flex min-h-12 items-center justify-between py-2.5 text-xl font-semibold text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50] sm:text-2xl"
                    >
                      <span>{label}</span>
                      <ArrowUpRight size={19} className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF4B50]" />
                    </a>
                  ))}
                </div>
              </section>

              <div className="space-y-5">
                <section aria-labelledby="services-title">
                  <h3 id="services-title" className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Nos services</h3>
                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-list"
                    data-testid="button-mobile-services"
                    className="flex min-h-12 w-full items-center justify-between border-y border-white/15 py-3 text-left text-xl font-semibold text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]"
                  >
                    <span>Voir les services</span>
                    <ChevronDown size={21} className={`text-[#FF4B50] transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div id="mobile-services-list" className={`${servicesOpen ? 'grid' : 'hidden'} gap-x-5 gap-y-1 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:grid-cols-2`}>
                    {serviceLinks.map((service, idx) => (
                      <a
                        key={service}
                        href={homeSectionHref('services')}
                        onClick={closeMenus}
                        data-testid={`link-mobile-service-${idx}`}
                        className="flex min-h-10 items-center justify-between gap-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]"
                      >
                        <span>{service}</span>
                        <ArrowUpRight size={15} className="shrink-0 text-white/35" />
                      </a>
                    ))}
                  </div>
                </section>

                <section aria-labelledby="helpful-title">
                  <h3 id="helpful-title" className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Pour vous accompagner</h3>
                  <div className="flex flex-wrap gap-2">
                    {helpfulLinks.map(([id, label]) => (
                      <a
                        key={id}
                        href={homeSectionHref(id)}
                        onClick={closeMenus}
                        data-testid={`link-mobile-${id}`}
                        className="rounded-md border border-white/15 px-3.5 py-2 text-sm font-semibold text-white/75 transition-colors hover:border-[#D71920] hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                  <Link
                    href="/politique-cookies"
                    onClick={closeMenus}
                    data-testid="link-mobile-politique-cookies"
                    className="mt-4 inline-block text-xs font-medium text-white/45 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/80"
                  >
                    Politique relative aux témoins
                  </Link>
                </section>
              </div>
            </div>

            <div className="shrink-0 border-t border-white/15 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Un projet en tête?</p>
                  <a href="tel:+14186721613" data-testid="link-phone-mobile" className="mt-1 inline-flex min-h-8 items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white">
                    <Phone size={15} className="text-[#FF4B50]" />
                    (418) 672-1613
                  </a>
                </div>
                <Link href="/soumission" onClick={() => { closeMenus(); window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }} data-testid="link-soumission-mobile" className="w-full sm:w-auto">
                  <Button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D71920] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#B51218] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:w-auto">
                    Demander une soumission <ArrowRight size={17} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}