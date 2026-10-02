import { type ReactNode } from 'react';
import { Navbar } from './navbar';
import { MapSection } from './map-section';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';

export function PageWrapper({ children, hideMobileBackToTop = false }: { children: ReactNode; hideMobileBackToTop?: boolean }) {
  return (
    <div className="font-['Inter'] bg-[#F4F4F4] text-[#171717] min-h-screen selection:bg-[#D71920] selection:text-white">
      <Navbar />
      {children}
      <MapSection />
      <Footer />
      <div className={hideMobileBackToTop ? 'hidden md:block' : undefined}><BackToTop /></div>
    </div>
  );
}
