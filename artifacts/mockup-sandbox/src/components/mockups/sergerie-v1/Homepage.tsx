import React, { useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  CheckCircle2, ArrowRight, Hammer, 
  Home, Wrench, PaintBucket,
  Ruler, ChevronDown
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#E4E4E4] font-['Inter'] text-[#1B1B1B] selection:bg-[#FF6501] selection:text-white overflow-x-hidden">
      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1B1B1B] py-4 shadow-lg' : 'bg-[#1B1B1B]/95 py-6'
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-12 w-auto object-contain brightness-0 invert" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-[#E4E4E4] hover:text-[#FF6501] transition-colors text-sm font-medium tracking-wide uppercase">Accueil</a>
            <a href="#services" className="text-[#E4E4E4] hover:text-[#FF6501] transition-colors text-sm font-medium tracking-wide uppercase">Services</a>
            <a href="#realisations" className="text-[#E4E4E4] hover:text-[#FF6501] transition-colors text-sm font-medium tracking-wide uppercase">Réalisations</a>
            <a href="#a-propos" className="text-[#E4E4E4] hover:text-[#FF6501] transition-colors text-sm font-medium tracking-wide uppercase">À propos</a>
            <a href="#contact" className="text-[#E4E4E4] hover:text-[#FF6501] transition-colors text-sm font-medium tracking-wide uppercase">Contact</a>
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white px-6 py-3 rounded-md font-bold transition-all hover:-translate-y-1 inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Soumission gratuite
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#E4E4E4]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1B1B1B] border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
            <a href="#accueil" className="text-[#E4E4E4] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Accueil</a>
            <a href="#services" className="text-[#E4E4E4] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#realisations" className="text-[#E4E4E4] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Réalisations</a>
            <a href="#a-propos" className="text-[#E4E4E4] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>À propos</a>
            <a href="#contact" className="text-[#E4E4E4] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" className="bg-[#FF6501] text-white px-6 py-3 rounded-md font-bold text-center mt-4">
              Soumission gratuite
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO */}
      <section id="accueil" className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 bg-[#1B1B1B] text-[#E4E4E4]">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/hero-bg.png" alt="Construction et toiture" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-[#1B1B1B]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-4">
              Toiture & Rénovation
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold leading-[1.1] mb-6 text-white">
              Des travaux solides et professionnels
            </h1>
            <p className="text-lg md:text-xl text-[#E4E4E4]/80 mb-10 max-w-xl leading-relaxed">
              Les Rénovations Sergerie vous accompagnent dans tous vos projets avec qualité et propreté. L'expertise sur la Rive-Sud de Montréal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white px-8 py-4 rounded-md font-bold text-center transition-all hover:-translate-y-1 inline-flex justify-center items-center gap-2">
                Soumission gratuite <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#realisations" className="bg-transparent border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-md font-bold text-center transition-all hover:-translate-y-1">
                Voir nos réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <div className="bg-[#FF6501] text-white py-6 relative z-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
            <CheckCircle2 className="w-6 h-6" />
            <span>Soumission gratuite</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
            <CheckCircle2 className="w-6 h-6" />
            <span>Travail garanti</span>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
            <CheckCircle2 className="w-6 h-6" />
            <span>Propreté assurée</span>
          </div>
        </div>
      </div>

      {/* 4. SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-[#E4E4E4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6">
              Nos expertises
            </h2>
            <p className="text-lg text-[#1B1B1B]/70">
              Une gamme complète de services pour rénover, protéger et valoriser votre propriété, réalisée selon les plus hauts standards de l'industrie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <div className="bg-white p-8 rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#1B1B1B] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#FF6501] transition-colors">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Toiture</h3>
              <p className="text-[#1B1B1B]/70 leading-relaxed">
                Réfection complète, réparation et entretien. Des bardeaux de première qualité posés avec rigueur pour une protection durable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#1B1B1B] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#FF6501] transition-colors">
                <Hammer className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Rénovation</h3>
              <p className="text-[#1B1B1B]/70 leading-relaxed">
                Rénovation générale résidentielle. De la démolition aux finitions, nous gérons votre projet avec un souci du détail incomparable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#1B1B1B] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#FF6501] transition-colors">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Cuisine</h3>
              <p className="text-[#1B1B1B]/70 leading-relaxed">
                Modernisation et réaménagement de votre espace cuisine. Installation d'armoires, comptoirs, et dosserets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#1B1B1B] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#FF6501] transition-colors">
                <PaintBucket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Salle de bain</h3>
              <p className="text-[#1B1B1B]/70 leading-relaxed">
                Transformation complète de salles de bain. Douches italiennes, vanités, céramique et plomberie de finition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#1B1B1B] rounded-md flex items-center justify-center mb-6 group-hover:bg-[#FF6501] transition-colors">
                <Ruler className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Sous-sol</h3>
              <p className="text-[#1B1B1B]/70 leading-relaxed">
                Finition de sous-sol sur mesure pour maximiser votre espace habitable. Isolation, divisions et revêtements de plancher.
              </p>
            </div>

            <div className="bg-[#1B1B1B] p-8 rounded-md shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Et plus encore...</h3>
              <p className="text-white/70 mb-6">
                Revêtement extérieur, balcons, terrasses.
              </p>
              <a href="#contact" className="text-[#FF6501] font-bold inline-flex items-center gap-2 hover:underline">
                Parlez-nous de votre projet <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE/EXPERTISE */}
      <section id="a-propos" className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
                Expertise
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Une référence sur la Rive-Sud
              </h2>
              <div className="space-y-6 text-lg text-[#E4E4E4]/80">
                <p>
                  Chez Les Rénovations Sergerie Inc., nous ne faisons pas de compromis sur la qualité. Chaque clou planté et chaque mesure prise reflètent notre engagement envers l'excellence.
                </p>
                <p>
                  Basés à Varennes, nous desservons toute la Rive-Sud avec la même promesse : un travail <strong>solide, durable et propre</strong>. Nous respectons votre propriété comme si c'était la nôtre.
                </p>
                <ul className="space-y-4 mt-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6501] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Équipe de professionnels qualifiés et expérimentés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6501] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Respect strict des échéanciers et des budgets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6501] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Nettoyage impeccable après chaque journée de travail</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <a href="#contact" className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white px-8 py-4 rounded-md font-bold transition-all hover:-translate-y-1 inline-block">
                  Demander une consultation
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#FF6501] translate-x-4 translate-y-4 rounded-md"></div>
              <img src="/__mockup/images/feature-site.png" alt="Chantier de construction" className="w-full h-auto object-cover rounded-md relative z-10 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS/RÉALISATIONS */}
      <section id="realisations" className="py-24 md:py-32 bg-[#E4E4E4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
              Réalisations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6">
              Nos projets récents
            </h2>
            <p className="text-lg text-[#1B1B1B]/70">
              Découvrez la qualité de notre travail à travers quelques-uns de nos récents accomplissements sur la Rive-Sud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-md relative aspect-square bg-[#1B1B1B]">
              <img src="/__mockup/images/project-roof.png" alt="Projet Toiture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Toiture Résidentielle</h3>
                <p className="text-[#FF6501] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Varennes</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-md relative aspect-square bg-[#1B1B1B]">
              <img src="/__mockup/images/project-kitchen.png" alt="Projet Cuisine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Rénovation Cuisine</h3>
                <p className="text-[#FF6501] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Boucherville</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-md relative aspect-square bg-[#1B1B1B]">
              <img src="/__mockup/images/project-exterior.png" alt="Projet Extérieur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Revêtement Extérieur</h3>
                <p className="text-[#FF6501] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Longueuil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="py-24 md:py-32 bg-white border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
              Processus
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6">
              Une approche simple et efficace
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#1B1B1B]/10 via-[#1B1B1B]/30 to-[#1B1B1B]/10 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#1B1B1B] rounded-full flex items-center justify-center text-4xl font-bold text-[#FF6501] mb-6 shadow-xl border-8 border-white">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Soumission</h3>
              <p className="text-[#1B1B1B]/70">Évaluation sur place de vos besoins, prise de mesures et remise d'un devis détaillé et transparent, sans frais.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#1B1B1B] rounded-full flex items-center justify-center text-4xl font-bold text-[#FF6501] mb-6 shadow-xl border-8 border-white">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Planification</h3>
              <p className="text-[#1B1B1B]/70">Choix des matériaux, établissement de l'échéancier et préparation du chantier pour minimiser les dérangements.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#FF6501] rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-xl border-8 border-white">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-4">Réalisation</h3>
              <p className="text-[#1B1B1B]/70">Exécution des travaux selon les normes les plus strictes, inspection finale et nettoyage complet du site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
              Clients
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E4E4E4] text-[#1B1B1B] p-8 rounded-md">
              <div className="flex gap-1 mb-6 text-[#FF6501]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "Une équipe ponctuelle et extrêmement professionnelle. Ils ont refait notre toiture en deux jours, et le terrain était impeccable à leur départ. Je les recommande sans hésitation."
              </p>
              <div>
                <p className="font-bold text-[#1B1B1B]">Martin T.</p>
                <p className="text-sm text-[#1B1B1B]/60">Réfection de toiture, Varennes</p>
              </div>
            </div>

            <div className="bg-[#E4E4E4] text-[#1B1B1B] p-8 rounded-md">
              <div className="flex gap-1 mb-6 text-[#FF6501]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "Rénovations Sergerie a transformé notre cuisine désuète en un espace moderne et fonctionnel. La communication était excellente tout au long du projet."
              </p>
              <div>
                <p className="font-bold text-[#1B1B1B]">Sophie B.</p>
                <p className="text-sm text-[#1B1B1B]/60">Rénovation cuisine, Boucherville</p>
              </div>
            </div>

            <div className="bg-[#E4E4E4] text-[#1B1B1B] p-8 rounded-md">
              <div className="flex gap-1 mb-6 text-[#FF6501]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">
                "Nous avons fait appel à eux pour finir notre sous-sol. Le prix était juste, pas de surprises cachées, et la qualité de la finition dépasse nos attentes."
              </p>
              <div>
                <p className="font-bold text-[#1B1B1B]">Alain M.</p>
                <p className="text-sm text-[#1B1B1B]/60">Finition sous-sol, Longueuil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#FF6501] font-bold tracking-[0.2em] text-sm uppercase mb-3">
              Questions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B]">
              Questions fréquentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-[#1B1B1B]/10 py-2">
              <AccordionTrigger className="text-lg font-bold text-[#1B1B1B] hover:text-[#FF6501] hover:no-underline text-left">
                Offrez-vous des soumissions gratuites ?
              </AccordionTrigger>
              <AccordionContent className="text-[#1B1B1B]/70 text-base leading-relaxed">
                Oui, toutes nos évaluations et soumissions sont 100% gratuites et sans engagement de votre part. Nous nous déplaçons chez vous pour évaluer vos besoins.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-[#1B1B1B]/10 py-2">
              <AccordionTrigger className="text-lg font-bold text-[#1B1B1B] hover:text-[#FF6501] hover:no-underline text-left">
                Quels types de toitures réparez-vous ou installez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-[#1B1B1B]/70 text-base leading-relaxed">
                Nous sommes spécialisés principalement dans l'installation et la réparation de toitures en bardeaux d'asphalte pour le secteur résidentiel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-[#1B1B1B]/10 py-2">
              <AccordionTrigger className="text-lg font-bold text-[#1B1B1B] hover:text-[#FF6501] hover:no-underline text-left">
                Desservez-vous toute la Rive-Sud de Montréal ?
              </AccordionTrigger>
              <AccordionContent className="text-[#1B1B1B]/70 text-base leading-relaxed">
                Oui, bien que nous soyons situés à Varennes, nous couvrons la majorité de la Rive-Sud incluant Boucherville, Longueuil, Brossard, Sainte-Julie et les environs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-[#1B1B1B]/10 py-2">
              <AccordionTrigger className="text-lg font-bold text-[#1B1B1B] hover:text-[#FF6501] hover:no-underline text-left">
                Gérez-vous les projets de rénovation de A à Z ?
              </AccordionTrigger>
              <AccordionContent className="text-[#1B1B1B]/70 text-base leading-relaxed">
                Absolument. De la démolition jusqu'à la dernière touche de peinture, nous gérons toutes les étapes de votre rénovation pour vous offrir un service clé en main.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-[#1B1B1B]/10 py-2">
              <AccordionTrigger className="text-lg font-bold text-[#1B1B1B] hover:text-[#FF6501] hover:no-underline text-left">
                Quels sont vos délais habituels ?
              </AccordionTrigger>
              <AccordionContent className="text-[#1B1B1B]/70 text-base leading-relaxed">
                Les délais varient selon la saison et l'ampleur du projet. Contactez-nous pour une estimation précise. Nous respectons toujours les échéanciers convenus lors de la signature du contrat.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-24 bg-[#FF6501]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Besoin d'un expert en rénovation?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir une estimation gratuite.
          </p>
          <a href="#contact" className="bg-[#1B1B1B] hover:bg-black text-white px-10 py-5 rounded-md font-bold text-lg transition-all hover:-translate-y-1 inline-block shadow-lg">
            Demander une soumission gratuite
          </a>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-[#E4E4E4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-md shadow-sm border border-black/5 overflow-hidden flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="bg-[#1B1B1B] text-white p-12 lg:w-2/5 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-8">Contactez-nous</h3>
                <p className="text-[#E4E4E4]/80 mb-12 text-lg">
                  Prêt à démarrer votre projet ? Remplissez le formulaire ou appelez-nous directement.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6501] rounded-md flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#E4E4E4]/60 font-medium uppercase tracking-wider mb-1">Téléphone</p>
                      <a href="tel:5145156795" className="text-2xl font-bold hover:text-[#FF6501] transition-colors">
                        514-515-6795
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#E4E4E4]/60 font-medium uppercase tracking-wider mb-1">Courriel</p>
                      <a href="mailto:info@renovationsergerie.com" className="text-lg font-bold hover:text-[#FF6501] transition-colors break-all">
                        info@renovationsergerie.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#E4E4E4]/60 font-medium uppercase tracking-wider mb-1">Emplacement</p>
                      <p className="text-lg font-bold">
                        Varennes, QC<br/>
                        <span className="text-base font-normal text-[#E4E4E4]/80">Desservant la Rive-Sud</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:w-3/5">
              <h3 className="text-2xl font-bold text-[#1B1B1B] mb-8">Envoyer un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nom" className="text-sm font-bold text-[#1B1B1B]">Nom complet</label>
                    <Input id="nom" placeholder="Jean Tremblay" className="bg-[#E4E4E4]/50 border-0 focus-visible:ring-[#FF6501] h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tel" className="text-sm font-bold text-[#1B1B1B]">Téléphone</label>
                    <Input id="tel" type="tel" placeholder="(514) 555-0123" className="bg-[#E4E4E4]/50 border-0 focus-visible:ring-[#FF6501] h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-[#1B1B1B]">Courriel</label>
                  <Input id="email" type="email" placeholder="jean@exemple.com" className="bg-[#E4E4E4]/50 border-0 focus-visible:ring-[#FF6501] h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-[#1B1B1B]">Détails du projet</label>
                  <Textarea id="message" placeholder="Décrivez les travaux que vous souhaitez réaliser..." className="bg-[#E4E4E4]/50 border-0 focus-visible:ring-[#FF6501] min-h-[150px]" />
                </div>
                <Button className="w-full bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold h-14 text-lg">
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#1B1B1B] text-[#E4E4E4] pt-20 pb-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-12 w-auto object-contain brightness-0 invert mb-6" />
              <p className="text-[#E4E4E4]/70 mb-6 max-w-sm">
                Entreprise de toiture et rénovation basée à Varennes. La référence pour des travaux solides, durables et professionnels sur la Rive-Sud de Montréal.
              </p>
              <div className="text-xl font-bold text-[#FF6501]">
                514-515-6795
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-[#E4E4E4]/70">
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Réfection de toiture</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Rénovation générale</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Rénovation de cuisine</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Rénovation de salle de bain</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Finition de sous-sol</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Revêtement extérieur</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-[#E4E4E4]/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6501] flex-shrink-0" />
                  <span>Varennes, Québec<br/>Desservant la Rive-Sud</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6501] flex-shrink-0" />
                  <span>514-515-6795</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6501] flex-shrink-0" />
                  <span>info@renovationsergerie.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E4E4E4]/50">
            <p>&copy; {new Date().getFullYear()} Les Rénovations Sergerie Inc. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
