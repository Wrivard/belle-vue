import { type MouseEvent } from "react";
import { ArrowRight, X } from "lucide-react";
import "./_group.css";

const mainLinks = [
  ["apropos", "À propos"],
  ["services", "Services"],
  ["realisations", "Réalisations"],
  ["pourquoi", "Le sur mesure"],
  ["approche", "Notre approche"],
] as const;

const helpfulLinks = [
  ["temoignages", "Témoignages"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
] as const;

export function Redesigned() {
  const stopNavigation = (event: MouseEvent<HTMLAnchorElement>) => event.preventDefault();

  return (
    <div className="min-h-screen bg-[#171717] font-sans text-[#E4E4E4]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1B1B1B] px-6 py-4">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between">
          <img
            src="/__mockup/images/belle-vue-logo.png"
            alt="Armoire Belle-Vue Ébénisterie inc."
            className="h-[58px] w-auto object-contain md:h-[66px]"
          />
          <button type="button" aria-label="Fermer le menu" className="rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]">
            <X size={26} />
          </button>
        </div>
      </nav>

      <div role="navigation" aria-label="Menu mobile" className="fixed inset-x-0 bottom-0 top-[90px] overflow-y-auto overscroll-contain bg-[#171717] text-[#E4E4E4] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:top-[98px]">
        <div className="mx-auto max-w-[600px] px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4B50]">Menu</p>
          <div className="divide-y divide-white/10 border-y border-white/10">
            <a href="#" onClick={stopNavigation} className="block min-h-11 py-2.5 text-lg font-semibold leading-6 text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]">Accueil</a>
            {mainLinks.map(([id, label]) => (
              <a key={id} href="#" onClick={stopNavigation} className="block min-h-11 py-2.5 text-lg font-semibold leading-6 text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]">
                {label}
              </a>
            ))}
          </div>

          <div className="mt-5">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">À consulter</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {helpfulLinks.map(([id, label]) => (
                <a key={id} href="#" onClick={stopNavigation} className="inline-flex min-h-10 items-center text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <a href="#" onClick={stopNavigation} className="mt-3 inline-block text-xs font-medium text-white/45 underline decoration-white/20 underline-offset-4 hover:text-white/80">
            Politique relative aux témoins
          </a>

          <button type="button" className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D71920] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#B51218]">
            Demander une soumission <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}