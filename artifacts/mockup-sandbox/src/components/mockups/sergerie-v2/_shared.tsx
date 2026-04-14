import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Mail, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
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

export const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
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

export function Navbar() {
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
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1B1B1B] py-3 shadow-lg' : 'bg-transparent py-5'} text-[#E4E4E4]`}>
        <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/__mockup/preview/sergerie-v2/Homepage">
              <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-10 w-auto object-contain brightness-0 invert" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide uppercase">
            <a href="/__mockup/preview/sergerie-v2/Homepage" className="hover:text-[#FF6501] transition-colors">Accueil</a>
            <a href="/__mockup/preview/sergerie-v2/Homepage#services" className="hover:text-[#FF6501] transition-colors">Services</a>
            <a href="/__mockup/preview/sergerie-v2/Homepage#realisations" className="hover:text-[#FF6501] transition-colors">Réalisations</a>
            <a href="/__mockup/preview/sergerie-v2/Homepage#apropos" className="hover:text-[#FF6501] transition-colors">À propos</a>
            <a href="/__mockup/preview/sergerie-v2/Homepage#contact" className="hover:text-[#FF6501] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:514-515-6795" className="flex items-center gap-2 text-[#E4E4E4] font-bold text-sm tracking-wide">
              <Phone size={16} className="text-[#FF6501]" />
              514-515-6795
            </a>
            <a href="/__mockup/preview/sergerie-v2/Soumission">
              <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-6 py-5 uppercase tracking-wide transition-transform hover:scale-105">
                Soumission gratuite
              </Button>
            </a>
          </div>

          <button className="md:hidden text-[#E4E4E4]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B1B1B] pt-24 px-6 md:hidden flex flex-col gap-6 text-[#E4E4E4]">
          <a href="/__mockup/preview/sergerie-v2/Homepage" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="/__mockup/preview/sergerie-v2/Homepage#services" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="/__mockup/preview/sergerie-v2/Homepage#realisations" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Réalisations</a>
          <a href="/__mockup/preview/sergerie-v2/Homepage#apropos" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>À propos</a>
          <a href="/__mockup/preview/sergerie-v2/Homepage#contact" className="text-2xl font-bold uppercase" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="/__mockup/preview/sergerie-v2/Soumission">
            <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md py-6 mt-4 uppercase tracking-wide text-lg w-full">
              Soumission gratuite
            </Button>
          </a>
        </div>
      )}
    </>
  );
}

export function TestimonialsSection() {
  return (
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
  );
}

export function ContactSection() {
  return (
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
  );
}

export function MapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44865.06350975407!2d-73.43839!3d45.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc904f4c2e6d6ed%3A0x5040cadae4d5880!2sVarennes%2C%20QC!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca"
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation - Varennes, Rive-Sud de Montréal"
      />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-[#E4E4E4]">
      <div className="container mx-auto px-6 max-w-[1200px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="/__mockup/preview/sergerie-v2/Homepage">
              <img src="/__mockup/images/logo-sergerie.png" alt="Les Rénovations Sergerie Inc." className="h-12 w-auto object-contain mb-6 brightness-0 invert" />
            </a>
            <p className="text-[#E4E4E4]/60 mb-6 text-sm leading-relaxed">
              Entreprise spécialisée en toiture et rénovation résidentielle. Fiers de desservir Varennes et la Rive-Sud de Montréal avec rigueur et propreté.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6501] rounded-md flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/40 font-bold">Appelez-nous</div>
                <a href="tel:514-515-6795" className="font-bold text-white hover:text-[#FF6501] transition-colors">514-515-6795</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Nos services</h4>
            <ul className="space-y-3 text-[#E4E4E4]/60 text-sm">
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Toiture</a></li>
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Cuisine</a></li>
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Salle de bain</a></li>
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Sous-sol</a></li>
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Revêtement extérieur</a></li>
              <li><a href="#" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Balcon & Terrasse</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Navigation</h4>
            <ul className="space-y-3 text-[#E4E4E4]/60 text-sm">
              <li><a href="/__mockup/preview/sergerie-v2/Homepage" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Accueil</a></li>
              <li><a href="/__mockup/preview/sergerie-v2/Homepage#services" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Services</a></li>
              <li><a href="/__mockup/preview/sergerie-v2/Homepage#realisations" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Réalisations</a></li>
              <li><a href="/__mockup/preview/sergerie-v2/Homepage#apropos" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>À propos</a></li>
              <li><a href="/__mockup/preview/sergerie-v2/Homepage#contact" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Contact</a></li>
              <li><a href="/__mockup/preview/sergerie-v2/Soumission" className="hover:text-[#FF6501] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF6501] rounded-full shrink-0"></span>Soumission gratuite</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-white border-b border-[#FF6501] pb-3 inline-block">Coordonnées</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <span className="text-[#E4E4E4]/60">Varennes, Rive-Sud de Montréal, QC</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <a href="tel:514-515-6795" className="text-[#E4E4E4]/60 hover:text-[#FF6501] transition-colors">514-515-6795</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#FF6501] shrink-0 mt-0.5" />
                <a href="mailto:info@renovations-sergerie.ca" className="text-[#E4E4E4]/60 hover:text-[#FF6501] transition-colors">info@renovations-sergerie.ca</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#E4E4E4]/10">
              <div className="text-xs uppercase tracking-wider text-[#E4E4E4]/40 font-bold mb-2">Heures d'ouverture</div>
              <div className="text-sm text-[#E4E4E4]/60">
                <div>Lun - Ven: 7h00 - 18h00</div>
                <div>Sam: 8h00 - 16h00</div>
                <div>Dim: Fermé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#E4E4E4]/10">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E4E4E4]/40 font-medium">
          <p>© {new Date().getFullYear()} Les Rénovations Sergerie Inc. Tous droits réservés.</p>
          <p>RBQ: (À venir)</p>
        </div>
      </div>
    </footer>
  );
}

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-['Inter'] bg-[#E4E4E4] text-[#1B1B1B] min-h-screen selection:bg-[#FF6501] selection:text-white dark">
      <Navbar />
      {children}
      <MapSection />
      <Footer />
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
