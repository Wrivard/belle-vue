import { MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { setMapConsent, useMapConsent } from '@/lib/map-consent';

const MAP_URL = 'https://www.google.com/maps?q=381%20rue%20Principale%2C%20Québec%2C%20G0V%201G0&output=embed';
const LINK_URL = 'https://www.google.com/maps/search/?api=1&query=381%20rue%20Principale%2C%20Québec%2C%20G0V%201G0';

export function MapSection() {
  const enabled = useMapConsent();
  return (
    <section id="carte" tabIndex={-1} className="w-full bg-[#E9E9E9] outline-none" data-testid="map-section">
      {enabled ? (
        <>
          <iframe src={MAP_URL} width="100%" height="450" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Emplacement d’Armoire Belle-Vue Ébénisterie" />
          <div className="container mx-auto px-6 max-w-[1200px] py-3 flex flex-wrap items-center justify-between gap-3 text-sm text-[#171717]/80">
            <span>Carte Google Maps activée pour cette session.</span>
            <button type="button" onClick={() => setMapConsent(false)} className="font-bold underline underline-offset-4 hover:text-[#D71920]" data-testid="button-map-disable">Désactiver la carte</button>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-6 max-w-[1200px] py-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4"><MapPin size={22} className="text-[#D71920]" /><h2 className="text-xl font-bold">Où nous trouver</h2></div>
            <p className="mb-2">381 rue Principale, Québec, G0V 1G0</p>
            <p className="text-sm text-[#171717]/75 leading-relaxed mb-6">La carte interactive est fournie par Google et est désactivée par défaut. Si vous l’affichez, votre navigateur communiquera avec Google, qui recevra notamment votre adresse IP et des informations sur votre appareil, et pourra utiliser des témoins. Ces données peuvent être traitées hors du Québec. La carte est facultative : le reste du site fonctionne sans elle. <Link href="/politique-cookies" className="underline underline-offset-4 hover:text-[#D71920]">En savoir plus</Link></p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setMapConsent(true)} className="bg-[#D71920] text-white font-bold px-5 py-3 rounded-md hover:bg-[#B5141A] transition-colors" data-testid="button-map-enable">Afficher la carte Google Maps</button>
              <a href={LINK_URL} target="_blank" rel="noopener noreferrer" className="border border-[#171717]/30 font-bold px-5 py-3 rounded-md hover:border-[#D71920] transition-colors" data-testid="link-map-external">Ouvrir dans Google Maps (nouvel onglet)</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
