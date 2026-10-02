import { useState, type MouseEvent } from "react";
import { ChevronDown, X } from "lucide-react";
import "./_group.css";

const services = [
  "Armoires de cuisine sur mesure",
  "Vanités et armoires de salle de bain",
  "Rangement personnalisé",
  "Ameublement sur mesure",
];

const links = [
  ["pourquoi", "Le sur mesure"],
  ["approche", "Notre approche"],
  ["temoignages", "Témoignages"],
  ["faq", "FAQ"],
  ["contact", "Contact"],
  ["politique-cookies", "Politique relative aux témoins"],
];

export function Current() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const stopNavigation = (event: MouseEvent<HTMLAnchorElement>) => event.preventDefault();

  return (
    <div className="min-h-screen bg-[#1B1B1B] font-sans text-[#E4E4E4]">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#1B1B1B]/95 px-6 py-4 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between">
          <img
            src="/__mockup/images/belle-vue-logo.png"
            alt="Armoire Belle-Vue Ébénisterie inc."
            className="h-[58px] w-auto object-contain"
          />
          <button type="button" aria-label="Fermer le menu" className="text-[#E4E4E4]">
            <X size={28} />
          </button>
        </div>
      </nav>

      <div className="fixed inset-0 z-40 flex flex-col gap-6 overflow-y-auto bg-[#1B1B1B] px-6 pt-28 text-[#E4E4E4]">
        <a href="#" onClick={stopNavigation} className="text-2xl font-bold uppercase">Accueil</a>
        <a href="#" onClick={stopNavigation} className="text-2xl font-bold uppercase">À propos</a>
        <div>
          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-2 text-left text-2xl font-bold uppercase"
            aria-expanded={servicesOpen}
          >
            Services <ChevronDown size={22} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="ml-4 mt-3 space-y-3 border-l-2 border-[#D71920] pl-4">
              {services.map((service) => (
                <a key={service} href="#" onClick={stopNavigation} className="block text-base font-semibold uppercase text-white/75">
                  {service}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="#" onClick={stopNavigation} className="text-2xl font-bold uppercase">Réalisations</a>
        {links.map(([id, label]) => (
          <a key={id} href="#" onClick={stopNavigation} className={id === "politique-cookies" ? "text-base font-bold uppercase" : "text-2xl font-bold uppercase"}>
            {label}
          </a>
        ))}
        <button type="button" className="mt-4 w-full rounded-md bg-[#D71920] py-6 text-lg font-bold uppercase tracking-wide text-white">
          Demander une soumission
        </button>
      </div>
    </div>
  );
}