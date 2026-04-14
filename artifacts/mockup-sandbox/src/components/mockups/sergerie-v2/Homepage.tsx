import React, { useState, useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Mail, ChevronRight, Menu, X } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function Homepage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Inter'] bg-[#E4E4E4] text-[#1B1B1B] min-h-screen selection:bg-[#FF6501] selection:text-white dark">
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-transparent py-5'} text-[#E4E4E4]`}>
        <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-10 w-auto object-contain brightness-0 invert" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide uppercase">
            <a href="#accueil" className="hover:text-[#FF6501] transition-colors">Accueil</a>
            <a href="#services" className="hover:text-[#FF6501] transition-colors">Services</a>
            <a href="#realisations" className="hover:text-[#FF6501] transition-colors">Réalisations</a>
            <a href="#apropos" className="hover:text-[#FF6501] transition-colors">À propos</a>
            <a href="#contact" className="hover:text-[#FF6501] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:514-515-6795" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide">
              <Phone size={16} className="text-[#FF6501]" />
              514-515-6795
            </a>
            <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-6 py-5 uppercase tracking-wide transition-transform hover:scale-105">
              Soumission gratuite
            </Button>
          </div>

          <button className="md:hidden text-[#E4E4E4]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] pt-24 px-6 md:hidden flex flex-col gap-6 text-[#E4E4E4]">
          <a href="#accueil" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="#services" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#realisations" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Réalisations</a>
          <a href="#apropos" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>À propos</a>
          <a href="#contact" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md py-6 mt-4 uppercase tracking-wide text-lg w-full">
            Soumission gratuite
          </Button>
        </div>
      )}

      {/* HERO */}
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/sergerie-hero-bg.png" alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#E4E4E4]">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-[0.2em] uppercase text-sm">Toiture & Rénovation</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white uppercase tracking-tight">
                Des travaux <br />
                <span className="text-[#FF6501]">solides</span> et <br />
                professionnels
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#E4E4E4]/80 mb-10 max-w-2xl font-medium leading-relaxed">
                Les Rénovations Sergerie vous accompagnent dans tous vos projets avec qualité et propreté. L'expertise de la Rive-Sud, de la conception à la finition.
              </p>
            </FadeIn>
            
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto">
                Soumission gratuite
              </Button>
              <Button variant="outline" className="border-2 border-[#E4E4E4] bg-transparent hover:bg-[#E4E4E4] hover:text-[#1B1B1B] text-[#E4E4E4] font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-colors h-auto">
                Voir nos réalisations
              </Button>
            </FadeIn>
          </div>
        </div>
        
      </section>

      {/* STATS SECTION */}
      <div className="bg-[#1B1B1B] border-t-4 border-[#FF6501] relative z-20 py-16">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Projets complétés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2">
                <CountUp end={24} suffix="h" />
              </div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Services</span>
                <div className="w-8 h-1 bg-[#FF6501]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos expertises</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Toiture', desc: 'Installation et réfection complète avec matériaux de première qualité.', img: 'service-toiture.png' },
              { title: 'Rénovation', desc: 'Gestion de projets de rénovation de A à Z, clés en main.', img: 'service-renovation.png' },
              { title: 'Cuisine', desc: 'Design moderne et fonctionnel pour le coeur de votre maison.', img: 'service-cuisine.png' },
              { title: 'Salle de bain', desc: 'Espaces repensés, matériaux durables et finitions impeccables.', img: 'service-sdb.png' },
              { title: 'Sous-sol', desc: 'Aménagement complet pour maximiser votre espace habitable.', img: 'service-soussol.png' },
              { title: 'Revêtement extérieur', desc: 'Protection et esthétique avec des revêtements de haute durabilité.', img: 'service-revetement.png' },
              { title: 'Balcon / terrasse', desc: "Conception et construction d'espaces extérieurs sur mesure.", img: 'service-balcon.png' },
            ].map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group bg-white rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={`/__mockup/images/${service.img}`} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#1B1B1B] mb-3 group-hover:text-[#FF6501] transition-colors">{service.title}</h3>
                    <p className="text-[#1B1B1B]/70 leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-6 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-[#1B1B1B]/20 flex items-center justify-center group-hover:bg-[#FF6501] group-hover:border-[#FF6501] transition-colors">
                        <ChevronRight size={20} className="text-[#1B1B1B] group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE/EXPERTISE */}
      <section id="apropos" className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4] relative overflow-hidden">
        {/* Geometric accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#222222] clip-path-polygon"></div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Une référence sur la <span className="text-[#FF6501]">Rive-Sud</span></h2>
              
              <div className="space-y-6 text-[#E4E4E4]/80 text-lg">
                <p>
                  Depuis plusieurs années, Les Rénovations Sergerie Inc. s'impose comme un acteur de confiance dans le domaine de la toiture et de la rénovation résidentielle à Varennes et sur toute la Rive-Sud de Montréal.
                </p>
                <p>
                  Notre approche est simple: <strong>fiabilité, durabilité et propreté</strong>. Nous comprenons qu'un chantier est avant tout votre milieu de vie. C'est pourquoi nous mettons un point d'honneur à maintenir des espaces de travail propres et sécuritaires.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#E4E4E4]/10 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#FF6501] mb-2">10+</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF6501] mb-2">100%</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Satisfaction client</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#FF6501]/30 rounded-md transform translate-x-4 translate-y-4"></div>
              <img src="/__mockup/images/sergerie-feature-site.png" alt="Construction site" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="realisations" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Réalisations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos projets récents</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Button variant="outline" className="border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#E4E4E4] font-bold rounded-md px-6 py-6 uppercase tracking-wide">
                Voir tout
              </Button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: 'sergerie-project-roofing.png', title: 'Toiture Résidentielle', cat: 'Toiture' },
              { img: 'sergerie-project-kitchen.png', title: 'Cuisine Moderne', cat: 'Rénovation intérieure' },
              { img: 'sergerie-project-exterior.png', title: 'Revêtement Extérieur', cat: 'Extérieur' }
            ].map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="group relative overflow-hidden rounded-md cursor-pointer h-[400px]">
                  <img src={`/__mockup/images/${proj.img}`} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#FF6501] font-bold text-sm tracking-widest uppercase mb-2 block">{proj.cat}</span>
                    <h3 className="text-[#E4E4E4] text-2xl font-bold uppercase">{proj.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Notre processus</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Simple et transparent</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'Visite gratuite sur place. On évalue vos besoins, on discute du budget et on répond à toutes vos questions.' },
              { num: '02', title: 'Soumission', desc: "Document détaillé avec prix fermes, échéancier précis et description complète des travaux. Sans surprise." },
              { num: '03', title: 'Exécution', desc: "Travaux exécutés selon les normes RBQ, chantier propre et livré dans les délais convenus. Garanti." }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="flex flex-col">
                  <div className="text-6xl md:text-7xl font-bold text-[#FF6501] mb-6 leading-none">{step.num}</div>
                  <div className="w-10 h-1 bg-[#FF6501] mb-6"></div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                  <p className="text-[#E4E4E4]/60 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#FF6501]"></div>
              <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16">Ils nous font confiance</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Martin Tremblay', type: 'Toiture', quote: "Une équipe super professionnelle. Ils ont refait ma toiture en un temps record et ont laissé le terrain impeccable." },
              { name: 'Sophie L.', type: 'Rénovation Cuisine', quote: "Le souci du détail de l'équipe Sergerie est impressionnant. Ma nouvelle cuisine est exactement comme je l'avais imaginée." },
              { name: 'Pierre-Luc Côté', type: 'Sous-sol', quote: "Des gars fiables, polis et ponctuels. C'est rare de nos jours dans la construction. Je les recommande sans hésiter." }
            ].map((test, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="bg-white p-10 rounded-md relative shadow-sm border-l-4 border-[#FF6501]">
                  <div className="text-5xl font-serif text-[#E4E4E4] absolute top-6 right-8 opacity-50">"</div>
                  <p className="text-lg italic text-[#1B1B1B]/80 mb-8 relative z-10">{test.quote}</p>
                  <div>
                    <h4 className="font-bold uppercase tracking-wide">{test.name}</h4>
                    <p className="text-[#FF6501] text-sm font-bold uppercase tracking-wider">{test.type}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]">
        <div className="container mx-auto px-6 max-w-[1200px] max-w-3xl">
          <FadeIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#FF6501]"></div>
              <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Questions</span>
              <div className="w-8 h-1 bg-[#FF6501]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Questions fréquentes</h2>
          </FadeIn>

          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">Les soumissions sont-elles vraiment gratuites?</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">
                  Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une estimation détaillée et transparente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">Faites-vous uniquement de la toiture?</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">
                  Non, bien que la toiture soit l'une de nos grandes expertises, nous réalisons des rénovations complètes : cuisines, salles de bain, sous-sols, revêtements extérieurs et balcons.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">Desservez-vous toute la Rive-Sud?</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">
                  Oui, nous sommes basés à Varennes mais nous nous déplaçons sur l'ensemble de la Rive-Sud de Montréal pour réaliser vos projets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">Prenez-vous en charge les projets de A à Z?</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">
                  Absolument. Nous offrons un service clés en main. Nous gérons la planification, la commande des matériaux, l'exécution des travaux et la finition, en gardant le chantier propre.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]">
                <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">Quels sont vos délais pour débuter les travaux?</AccordionTrigger>
                <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">
                  Les délais varient en fonction de l'ampleur du projet et de la saison (surtout pour la toiture). Lors de la soumission, nous établissons un échéancier réaliste que nous nous engageons à respecter.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-[#FF6501] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-white/10 clip-path-slant-reverse"></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Besoin d'un expert <br/>en rénovation?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">
              Confiez-nous votre projet et découvrez la différence d'un travail fait avec rigueur et propreté.
            </p>
            <Button className="bg-[#1B1B1B] hover:bg-[#1B1B1B]/90 text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg transition-transform hover:scale-105 h-auto">
              Obtenir ma soumission gratuite
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Contact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Discutons de <br/>votre projet</h2>
              <p className="text-lg text-[#1B1B1B]/70 mb-12">
                Prêt à transformer votre maison? Contactez-nous dès aujourd'hui pour une évaluation gratuite.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#1B1B1B] text-[#FF6501] rounded-md flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Téléphone</h4>
                    <p className="text-2xl font-bold">514-515-6795</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#1B1B1B] text-[#FF6501] rounded-md flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Courriel</h4>
                    <p className="text-xl font-bold">info@renovations-sergerie.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#1B1B1B] text-[#FF6501] rounded-md flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Emplacement</h4>
                    <p className="text-xl font-bold">Varennes, Rive-Sud de Montréal</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white p-10 rounded-md shadow-xl border-t-4 border-[#FF6501]">
                <h3 className="text-2xl font-bold uppercase mb-8">Envoyer un message</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Nom complet</label>
                    <Input className="bg-[#E4E4E4]/50 border-0 h-14 rounded-sm focus-visible:ring-[#FF6501]" placeholder="Jean Tremblay" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Téléphone</label>
                      <Input className="bg-[#E4E4E4]/50 border-0 h-14 rounded-sm focus-visible:ring-[#FF6501]" placeholder="514-000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Courriel</label>
                      <Input className="bg-[#E4E4E4]/50 border-0 h-14 rounded-sm focus-visible:ring-[#FF6501]" placeholder="jean@exemple.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Détails du projet</label>
                    <Textarea className="bg-[#E4E4E4]/50 border-0 min-h-[150px] rounded-sm focus-visible:ring-[#FF6501] resize-none" placeholder="Décrivez votre projet de toiture ou de rénovation..." />
                  </div>
                  <Button className="w-full bg-[#1B1B1B] hover:bg-[#FF6501] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-colors h-auto mt-4">
                    Envoyer la demande
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B1B1B] text-[#E4E4E4] pt-24 pb-8 border-t-8 border-[#FF6501]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div>
              <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-12 w-auto object-contain mb-8 brightness-0 invert" />
              <p className="text-[#E4E4E4]/60 mb-8 max-w-sm">
                Entreprise spécialisée en toiture et rénovation résidentielle. Fiers de desservir Varennes et la Rive-Sud de Montréal avec rigueur et propreté.
              </p>
              <div className="flex items-center gap-4 font-bold text-xl">
                <Phone size={20} className="text-[#FF6501]" />
                514-515-6795
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-8 text-white">Nos services</h4>
              <ul className="space-y-4 text-[#E4E4E4]/70 font-medium">
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Toiture</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Rénovation complète</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Cuisine & Salle de bain</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Sous-sol</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Revêtement extérieur</a></li>
                <li><a href="#" className="hover:text-[#FF6501] transition-colors">Balcon & Terrasse</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-8 text-white">Menu rapide</h4>
              <ul className="space-y-4 text-[#E4E4E4]/70 font-medium">
                <li><a href="#accueil" className="hover:text-[#FF6501] transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-[#FF6501] transition-colors">Services</a></li>
                <li><a href="#realisations" className="hover:text-[#FF6501] transition-colors">Réalisations</a></li>
                <li><a href="#apropos" className="hover:text-[#FF6501] transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-[#FF6501] transition-colors">Contact</a></li>
              </ul>
              <Button className="mt-8 bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-6 py-5 uppercase tracking-wide w-full h-auto">
                Soumission gratuite
              </Button>
            </div>
          </div>
          
          <div className="border-t border-[#E4E4E4]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E4E4E4]/40 font-medium">
            <p>© {new Date().getFullYear()} Les Rénovations Sergerie Inc. Tous droits réservés.</p>
            <p>RBQ: (À venir)</p>
          </div>
        </div>
      </footer>

      {/* Global styling for custom clip paths used in design */}
      <style>{`
        .clip-path-slant {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
        .clip-path-slant-reverse {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
        .clip-path-polygon {
          clip-path: polygon(100% 0, 100% 100%, 20% 100%, 0% 50%, 20% 0);
        }
      `}</style>
    </div>
  );
}
