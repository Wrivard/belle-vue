import { useState, type ReactNode } from 'react';
import { Navbar } from './navbar';
import { MapSection } from './map-section';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';

export function PageWrapper({ children, hideMobileBackToTop = false }: { children: ReactNode; hideMobileBackToTop?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-['Inter'] bg-[#F4F4F4] text-[#171717] min-h-screen selection:bg-[#D71920] selection:text-white">
      <a inert={mobileMenuOpen} href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-white px-5 py-3 font-bold text-[#171717] shadow-lg focus:translate-y-0">Aller au contenu</a>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div inert={mobileMenuOpen}>
        <main id="main-content" tabIndex={-1} className="min-w-0">
          {children}
          <MapSection />
        </main>
        <Footer />
        <div className={hideMobileBackToTop ? 'hidden md:block' : undefined}><BackToTop /></div>
      </div>
    </div>
  );
}
