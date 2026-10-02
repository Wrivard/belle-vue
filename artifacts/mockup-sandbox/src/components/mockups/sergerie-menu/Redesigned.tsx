import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Phone, X } from "lucide-react";
import "./_group.css";

const mainLinks = [
  ["apropos", "À propos"],
  ["realisations", "Réalisations"],
  ["pourquoi", "Le sur mesure"],
  ["approche", "Notre approche"],
] as const;

const services = [
  "Armoires de cuisine sur mesure",
  "Vanités et armoires de salle de bain",
  "Rangement sur mesure",
  "Ameublement sur mesure",
];

const helpfulLinks = [
  ["temoignages", "Témoignages"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
] as const;

export function Redesigned() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const stopNavigation = (event: React.MouseEvent) => event.preventDefault();

  return (
    <div className="h-[100dvh] min-h-[680px] overflow-hidden bg-[#171717] font-sans text-[#E4E4E4]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1B1B1B] px-6 py-4">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between">
          <img
            src="/__mockup/images/belle-vue-logo.png"
            alt="Armoire Belle-Vue Ébénisterie inc."
            className="h-[58px] w-auto object-contain"
          />
          <button type="button" aria-label="Fermer le menu" className="rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]">
            <X size={26} />
          </button>
        </div>
      </nav>

      <div role="dialog" aria-modal="true" aria-label="Menu de navigation" className="flex h-full flex-col pt-[92px]">
        <div className="mx-auto flex min-h-0 w-full max-w-[1200px] flex-1 flex-col px-6">
          <div className="mb-5 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#FF4B50]">Armoire Belle-Vue</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">Navigation</h1>
            </div>
            <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-white/40 sm:block">Menu principal</span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-x-12 gap-y-5 overflow-y-auto pb-5 md:grid-cols-[1fr_0.9fr]">
            <section aria-labelledby="explorer-title">
              <h2 id="explorer-title" className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                Explorer
              </h2>
              <nav aria-label="Navigation principale" className="divide-y divide-white/10">
                <a href="#" onClick={stopNavigation} className="group flex min-h-12 items-center justify-between py-2.5 text-xl font-semibold text-[#FF4B50] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50] sm:text-2xl">
                  <span>Accueil</span>
                  <ArrowUpRight size={19} className="text-[#FF4B50] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                {mainLinks.map(([id, label]) => (
                  <a
                    key={id}
                    href="#"
                    onClick={stopNavigation}
                    className="group flex min-h-12 items-center justify-between py-2.5 text-xl font-semibold text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50] sm:text-2xl"
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={19} className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF4B50]" />
                  </a>
                ))}
              </nav>
            </section>

            <div className="space-y-5">
              <section aria-labelledby="services-title">
                <h2 id="services-title" className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Nos services
                </h2>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-list"
                  className="flex min-h-12 w-full items-center justify-between border-y border-white/15 py-3 text-left text-xl font-semibold text-white transition-colors hover:text-[#FF4B50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF4B50]"
                >
                  <span>Voir les services</span>
                  <ChevronDown size={21} className={`text-[#FF4B50] transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div id="mobile-services-list" className="grid gap-x-5 gap-y-1 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:grid-cols-2">
                    {services.map((service, index) => (
                      <a
                        key={service}
                        href="#"
                        onClick={stopNavigation}
                        className="flex min-h-10 items-center justify-between gap-3 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]"
                      >
                        <span>{service}</span>
                        <ArrowUpRight size={15} className="shrink-0 text-white/35" />
                      </a>
                    ))}
                  </div>
                )}
              </section>

              <section aria-labelledby="helpful-title">
                <h2 id="helpful-title" className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Pour vous accompagner
                </h2>
                <nav aria-label="Liens utiles" className="flex flex-wrap gap-2">
                  {helpfulLinks.map(([id, label]) => (
                    <a key={id} href="#" onClick={stopNavigation} className="rounded-md border border-white/15 px-3.5 py-2 text-sm font-semibold text-white/75 transition-colors hover:border-[#D71920] hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4B50]">
                      {label}
                    </a>
                  ))}
                </nav>
                <a href="#" onClick={stopNavigation} className="mt-4 inline-block text-xs font-medium text-white/45 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white/80">
                  Politique relative aux témoins
                </a>
              </section>
            </div>
          </div>

          <div className="shrink-0 border-t border-white/15 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Un projet en tête?</p>
                <a href="tel:+14186721613" className="mt-1 inline-flex min-h-8 items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white">
                  <Phone size={15} className="text-[#FF4B50]" />
                  (418) 672-1613
                </a>
              </div>
              <button type="button" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#D71920] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#B51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171717] sm:w-auto">
                Demander une soumission <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}