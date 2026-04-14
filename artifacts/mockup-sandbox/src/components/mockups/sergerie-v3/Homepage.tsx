import React, { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Phone, MapPin, Mail, Menu, X, Hammer, ShieldCheck, SprayCan } from "lucide-react";

export function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-[#E4E4E4] font-['Inter'] selection:bg-[#FF6501] selection:text-white overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#E4E4E4]/5 ${scrolled ? 'bg-[#1B1B1B]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-[#1B1B1B] py-6'}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-10 w-auto group-hover:opacity-90 transition-opacity" />
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-sm font-medium hover:text-[#FF6501] transition-colors">Accueil</a>
            <a href="#services" className="text-sm font-medium hover:text-[#FF6501] transition-colors">Services</a>
            <a href="#realisations" className="text-sm font-medium hover:text-[#FF6501] transition-colors">Réalisations</a>
            <a href="#a-propos" className="text-sm font-medium hover:text-[#FF6501] transition-colors">À propos</a>
            <a href="#contact" className="text-sm font-medium hover:text-[#FF6501] transition-colors">Contact</a>
            <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-[6px] px-6">
              Soumission gratuite
            </Button>
          </div>

          <button className="md:hidden text-[#E4E4E4]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] pt-24 px-6 md:hidden flex flex-col gap-6">
          <a href="#accueil" className="text-2xl font-bold border-b border-[#E4E4E4]/10 pb-4" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="#services" className="text-2xl font-bold border-b border-[#E4E4E4]/10 pb-4" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#realisations" className="text-2xl font-bold border-b border-[#E4E4E4]/10 pb-4" onClick={() => setMobileMenuOpen(false)}>Réalisations</a>
          <a href="#a-propos" className="text-2xl font-bold border-b border-[#E4E4E4]/10 pb-4" onClick={() => setMobileMenuOpen(false)}>À propos</a>
          <a href="#contact" className="text-2xl font-bold border-b border-[#E4E4E4]/10 pb-4" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-[6px] py-6 text-lg mt-4 w-full">
            Soumission gratuite
          </Button>
        </div>
      )}

      {/* 2. HERO */}
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/hero-bg.png" alt="Travaux de toiture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-[#1B1B1B]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-[#FF6501] block"></span>
              <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501]">Toiture & Rénovation</span>
            </div>
            <h1 className="text-5xl md:text-[68px] leading-[1.1] font-bold mb-6 tracking-tight text-white">
              Des travaux <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6501] to-[#FF8533]">solides</span> et professionnels.
            </h1>
            <p className="text-xl md:text-2xl text-[#E4E4E4]/80 mb-10 max-w-2xl leading-relaxed font-light">
              Les Rénovations Sergerie vous accompagnent dans tous vos projets avec qualité et propreté. L'expertise brute, le travail bien fait.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold h-14 px-8 text-lg rounded-[6px] shadow-[0_0_20px_rgba(255,101,1,0.3)] hover:shadow-[0_0_30px_rgba(255,101,1,0.5)] transition-all">
                Soumission gratuite
              </Button>
              <Button size="lg" variant="outline" className="border-[#E4E4E4]/20 bg-transparent hover:bg-[#E4E4E4]/10 text-white font-bold h-14 px-8 text-lg rounded-[6px]">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP */}
      <div className="bg-[#FF6501] text-[#1B1B1B] py-6 relative z-20 border-y border-[#FF6501]/80 shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
              <div className="bg-[#1B1B1B] text-[#FF6501] p-1.5 rounded-full"><Check size={20} strokeWidth={3} /></div>
              Soumission gratuite
            </div>
            <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
              <div className="bg-[#1B1B1B] text-[#FF6501] p-1.5 rounded-full"><ShieldCheck size={20} strokeWidth={3} /></div>
              Travail garanti
            </div>
            <div className="flex items-center gap-3 font-bold text-lg md:text-xl">
              <div className="bg-[#1B1B1B] text-[#FF6501] p-1.5 rounded-full"><SprayCan size={20} strokeWidth={3} /></div>
              Propreté assurée
            </div>
          </div>
        </div>
      </div>

      {/* 4. SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-[#1B1B1B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Services</span>
            <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">Nos expertises</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Toiture", desc: "Installation et réparation de toitures durables et étanches." },
              { title: "Rénovation complète", desc: "Prise en charge de A à Z de vos projets de rénovation." },
              { title: "Cuisine", desc: "Modernisation et aménagement sur mesure." },
              { title: "Salle de bain", desc: "Rénovation esthétique et fonctionnelle." },
              { title: "Sous-sol", desc: "Finition et aménagement de sous-sols confortables." },
              { title: "Revêtement extérieur", desc: "Protection et esthétique pour votre façade." },
              { title: "Balcon / terrasse", desc: "Construction de structures extérieures solides." }
            ].map((service, i) => (
              <Card key={i} className="bg-[#242424] border-[#E4E4E4]/5 rounded-[6px] hover:bg-[#2A2A2A] hover:border-[#FF6501]/30 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#FF6501] transition-all duration-300 group-hover:h-full"></div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#1B1B1B] border border-[#E4E4E4]/10 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Hammer className="text-[#FF6501]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-[#E4E4E4]/60 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURE/EXPERTISE */}
      <section className="py-24 md:py-32 bg-[#242424] border-y border-[#E4E4E4]/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Expertise</span>
              <h2 className="text-4xl md:text-[48px] font-bold text-white mb-8 tracking-tight leading-[1.1]">Une référence sur la Rive-Sud</h2>
              
              <div className="space-y-6 text-[#E4E4E4]/80 text-lg font-light leading-relaxed">
                <p>
                  Fondée sur des principes de rigueur et d'honnêteté, Les Rénovations Sergerie Inc. s'impose comme un acteur de confiance pour vos travaux résidentiels.
                </p>
                <p>
                  Nous ne faisons pas que construire; nous bâtissons des relations durables basées sur la transparence. Chaque chantier est traité avec le plus grand respect, assurant une propreté exemplaire de la première journée jusqu'à la livraison finale.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#E4E4E4]/10 pt-10">
                <div>
                  <div className="text-4xl font-bold text-[#FF6501] mb-2">100%</div>
                  <div className="text-sm font-medium text-[#E4E4E4]/60 uppercase tracking-wide">Satisfaction garantie</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF6501] mb-2">15+</div>
                  <div className="text-sm font-medium text-[#E4E4E4]/60 uppercase tracking-wide">Années d'expérience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#FF6501]/20 rounded-[6px] translate-x-4 translate-y-4"></div>
              <img src="/__mockup/images/feature-site.png" alt="Chantier de construction" className="w-full h-auto rounded-[6px] relative z-10 shadow-2xl object-cover aspect-[4/3] grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS */}
      <section id="realisations" className="py-24 md:py-32 bg-[#1B1B1B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Réalisations</span>
              <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">Nos projets récents</h2>
            </div>
            <Button variant="outline" className="border-[#E4E4E4]/20 hover:bg-[#E4E4E4]/10 rounded-[6px]">
              Voir la galerie complète
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "project-roof.png", title: "Toiture Résidentielle", cat: "Toiture" },
              { img: "project-kitchen.png", title: "Rénovation Cuisine", cat: "Intérieur" },
              { img: "project-exterior.png", title: "Revêtement Extérieur", cat: "Extérieur" }
            ].map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[6px] aspect-[3/4] cursor-pointer">
                <img 
                  src={`/__mockup/images/${project.img}`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#FF6501] text-sm font-bold uppercase tracking-wider mb-2 block">{project.cat}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <section className="py-24 md:py-32 bg-[#242424] border-y border-[#E4E4E4]/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Processus</span>
            <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">Une approche simple et efficace</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-[#E4E4E4]/10"></div>
            
            {[
              { num: "01", title: "Soumission", desc: "Évaluation sur place de vos besoins et remise d'une estimation détaillée et transparente." },
              { num: "02", title: "Planification", desc: "Choix des matériaux, établissement de l'échéancier et préparation minutieuse du chantier." },
              { num: "03", title: "Réalisation", desc: "Exécution des travaux selon les plus hauts standards avec un nettoyage complet à la fin." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#1B1B1B] border-4 border-[#242424] shadow-[0_0_0_2px_rgba(228,228,228,0.1)] flex items-center justify-center text-3xl font-bold text-[#FF6501] mb-8 group-hover:scale-110 group-hover:border-[#FF6501]/30 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#E4E4E4]/60 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#1B1B1B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Clients</span>
            <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">Ils nous font confiance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marc Tremblay", project: "Réfection de toiture", quote: "Équipe professionnelle et efficace. Le chantier était impeccable à leur départ. Je recommande fortement Sergerie pour toute toiture." },
              { name: "Sophie Gagnon", project: "Rénovation de cuisine", quote: "Ils ont transformé notre cuisine. Respect des délais, minutie dans les détails et communication transparente tout au long du projet." },
              { name: "Alain Dubois", project: "Finition de sous-sol", quote: "Le résultat dépasse nos attentes. Des gars vaillants qui connaissent leur métier. C'est du solide." }
            ].map((test, i) => (
              <Card key={i} className="bg-[#242424] border-none rounded-[6px] relative">
                <div className="absolute top-6 right-6 text-[#FF6501]/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.504C16.638 13.904 16.75 13.256 16.75 12.5V3H24V12.5C24 16.621 21.621 20 17.5 21H14.017ZM4.017 21L6.411 14.504C6.638 13.904 6.75 13.256 6.75 12.5V3H14V12.5C14 16.621 11.621 20 7.5 21H4.017Z" />
                  </svg>
                </div>
                <CardContent className="p-8 pt-12">
                  <p className="text-[#E4E4E4]/80 italic mb-8 relative z-10">"{test.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{test.name}</div>
                    <div className="text-sm text-[#FF6501]">{test.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 md:py-32 bg-[#242424] border-y border-[#E4E4E4]/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Questions</span>
            <h2 className="text-4xl md:text-[48px] font-bold text-white tracking-tight">Questions fréquentes</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Les soumissions sont-elles vraiment gratuites?", a: "Oui, nous offrons des soumissions 100% gratuites et sans engagement. Nous nous déplaçons pour évaluer correctement l'ampleur des travaux." },
              { q: "Quels secteurs desservez-vous?", a: "Nous sommes basés à Varennes et desservons principalement la Rive-Sud de Montréal et les environs." },
              { q: "Faites-vous des projets de rénovation complète?", a: "Absolument. Nous avons l'expertise pour prendre en charge des projets de rénovation majeure de A à Z, incluant la gestion des différents corps de métier si nécessaire." },
              { q: "Combien de temps dure la réfection d'une toiture?", a: "La majorité des toitures résidentielles standard sont complétées en 1 à 2 jours, selon la météo et la complexité de la toiture. Nous visons toujours l'efficacité sans compromettre la qualité." },
              { q: "Garantissez-vous vos travaux?", a: "Oui, tous nos travaux sont garantis. Nous utilisons des matériaux de première qualité et respectons les normes de l'industrie pour assurer la durabilité de nos réalisations." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-[#1B1B1B] border border-[#E4E4E4]/10 rounded-[6px] px-6">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-24 bg-[#FF6501] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1B1B1B 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6 tracking-tight">Besoin d'un expert en rénovation?</h2>
          <p className="text-xl text-[#1B1B1B]/80 mb-10 max-w-2xl mx-auto font-medium">
            Contactez-nous dès aujourd'hui pour discuter de votre projet. Une équipe fiable, du travail solide.
          </p>
          <Button size="lg" className="bg-[#1B1B1B] hover:bg-[#2A2A2A] text-white font-bold h-14 px-10 text-lg rounded-[6px] shadow-xl">
            Soumission gratuite
          </Button>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-[#1B1B1B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="uppercase tracking-widest text-sm font-bold text-[#FF6501] mb-2 block">Contact</span>
              <h2 className="text-4xl md:text-[48px] font-bold text-white mb-8 tracking-tight">Parlons de votre projet</h2>
              <p className="text-[#E4E4E4]/70 text-lg mb-12">
                Remplissez le formulaire ou contactez-nous directement. Nous vous répondrons dans les plus brefs délais.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded bg-[#242424] flex items-center justify-center shrink-0 border border-[#E4E4E4]/5">
                    <Phone className="text-[#FF6501]" />
                  </div>
                  <div>
                    <h4 className="text-[#E4E4E4]/50 text-sm font-bold uppercase tracking-wider mb-1">Téléphone</h4>
                    <p className="text-xl font-bold text-white">514-515-6795</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded bg-[#242424] flex items-center justify-center shrink-0 border border-[#E4E4E4]/5">
                    <Mail className="text-[#FF6501]" />
                  </div>
                  <div>
                    <h4 className="text-[#E4E4E4]/50 text-sm font-bold uppercase tracking-wider mb-1">Courriel</h4>
                    <p className="text-xl font-bold text-white">info@renovationsergerie.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded bg-[#242424] flex items-center justify-center shrink-0 border border-[#E4E4E4]/5">
                    <MapPin className="text-[#FF6501]" />
                  </div>
                  <div>
                    <h4 className="text-[#E4E4E4]/50 text-sm font-bold uppercase tracking-wider mb-1">Service</h4>
                    <p className="text-xl font-bold text-white">Varennes et Rive-Sud de Montréal</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-[#242424] border border-[#E4E4E4]/10 rounded-[6px]">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#E4E4E4]/80">Nom</label>
                      <Input className="bg-[#1B1B1B] border-[#E4E4E4]/10 h-12 rounded-[4px] focus-visible:ring-[#FF6501]" placeholder="Votre nom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#E4E4E4]/80">Téléphone</label>
                      <Input className="bg-[#1B1B1B] border-[#E4E4E4]/10 h-12 rounded-[4px] focus-visible:ring-[#FF6501]" placeholder="Votre numéro" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#E4E4E4]/80">Courriel</label>
                    <Input className="bg-[#1B1B1B] border-[#E4E4E4]/10 h-12 rounded-[4px] focus-visible:ring-[#FF6501]" type="email" placeholder="Votre courriel" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#E4E4E4]/80">Message</label>
                    <Textarea className="bg-[#1B1B1B] border-[#E4E4E4]/10 min-h-[150px] rounded-[4px] focus-visible:ring-[#FF6501]" placeholder="Décrivez votre projet..." />
                  </div>
                  <Button className="w-full bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold h-14 rounded-[6px] text-lg">
                    Envoyer la demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#111111] pt-20 pb-10 border-t border-[#E4E4E4]/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-10 w-auto mb-6 opacity-80" />
              <p className="text-[#E4E4E4]/60 max-w-sm mb-6 leading-relaxed">
                Entrepreneur général spécialisé en toiture et rénovation résidentielle sur la Rive-Sud de Montréal. Qualité, propreté et durabilité garanties.
              </p>
              <div className="font-bold text-[#FF6501] text-xl">514-515-6795</div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-[#E4E4E4]/60">
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Toiture</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Rénovation complète</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Cuisine & Salle de bain</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Sous-sol</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Revêtement extérieur</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Entreprise</h4>
              <ul className="space-y-3 text-[#E4E4E4]/60">
                <li><a href="#accueil" className="hover:text-[#FF6501] transition-colors">Accueil</a></li>
                <li><a href="#realisations" className="hover:text-[#FF6501] transition-colors">Réalisations</a></li>
                <li><a href="#a-propos" className="hover:text-[#FF6501] transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-[#FF6501] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Soumission gratuite</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#E4E4E4]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#E4E4E4]/40 text-sm">
            <p>© {new Date().getFullYear()} Les Rénovations Sergerie Inc. Tous droits réservés.</p>
            <p>Conception par Alliance Design</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
