import { type ReactNode } from 'react';
import { Navbar } from './navbar';
import { MapSection } from './map-section';
import { Footer } from './footer';
import { BackToTop } from './back-to-top';

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="font-['Inter'] bg-[#E4E4E4] text-[#1B1B1B] min-h-screen selection:bg-[#FF6501] selection:text-white">
      <Navbar />
      {children}
      <MapSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
