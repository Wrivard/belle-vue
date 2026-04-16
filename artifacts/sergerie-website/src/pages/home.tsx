import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { CountUp } from '@/components/layout/count-up';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { ContactSection } from '@/components/layout/contact-section';
import { CertificationsSection } from '@/components/layout/certifications-section';
import { img } from '@/lib/utils';

const services = [
  { title: 'Finition cuisine & salle de bain', desc: 'Rénovation complète avec des finitions soignées pour le coeur de votre maison.', img: 'mc-sdb-luxe.jpg' },
  { title: 'Finition intérieure', desc: 'Céramique, plancher, moulures — des finitions précises et durables.', img: 'mc-escalier.jpg' },
  { title: 'Finition extérieure', desc: 'Revêtement et aluminium pour une protection et un look impeccable.', img: 'mc-exterieur.jpg' },
  { title: 'Agrandissement', desc: 'Agrandissez votre espace de vie avec des travaux solides et bien planifiés.', img: 'mc-agrandissement.jpg' },
  { title: 'Balcon & Cabanon', desc: "Construction et rénovation de balcons et cabanons sur mesure.", img: 'mc-balcon.jpg' },
  { title: 'Toiture', desc: 'Installation et réfection complète avec matériaux de première qualité.', img: 'photo-toiture.jpg' },
];

const projects = [
  { img: 'mc-cuisine.jpg', title: 'Cuisine Moderne', cat: 'Finition intérieure' },
  { img: 'mc-sdb-douche.jpg', title: 'Salle de Bain Luxueuse', cat: 'Finition intérieure' },
  { img: 'mc-cabanon.jpg', title: 'Garage & Cabanon', cat: 'Construction extérieure' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Visite gratuite sur place. On évalue vos besoins, on discute du budget et on répond à toutes vos questions.' },
  { num: '02', title: 'Soumission', desc: "Document détaillé avec prix fermes, échéancier précis et description complète des travaux. Sans surprise." },
  { num: '03', title: 'Exécution', desc: "Travaux exécutés selon les normes RBQ, chantier propre et livré dans les délais convenus. Garanti." }
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img src={img('mc-cuisine.jpg')} alt="Cuisine MC Rénovation Construction" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#E4E4E4]">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-bold tracking-[0.2em] uppercase text-sm">Rénovation & Construction</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white uppercase tracking-tight" data-testid="text-hero-title">
                Des travaux complets <br />
                <span className="text-[#F97316]">précis</span> et <br />
                efficaces
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#E4E4E4]/80 mb-10 max-w-2xl font-medium leading-relaxed">
                MC Rénovation Construction vous accompagne dans tous vos projets avec précision et efficacité. L'expertise des Laurentides, de la conception à la finition.
              </p>
            </FadeIn>
            
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission" data-testid="link-hero-soumission">
                <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto">
                  Soumission gratuite
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-[#E4E4E4] bg-transparent hover:bg-[#E4E4E4] hover:text-[#1B1B1B] text-[#E4E4E4] font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-colors h-auto" data-testid="button-voir-realisations">
                Voir nos réalisations
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="bg-white border-t border-black/5 relative z-20 py-16" data-testid="stats-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2"><CountUp end={15} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2"><CountUp end={500} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Projets complétés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2"><CountUp end={24} suffix="h" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      <CertificationsSection />

      <section id="services" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Services</span>
                <div className="w-8 h-1 bg-[#F97316]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos expertises</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group bg-white rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col" data-testid={`service-card-${idx}`}>
                  <div className="h-48 overflow-hidden">
                    <img src={img(service.img)} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#1B1B1B] mb-3 group-hover:text-[#F97316] transition-colors">{service.title}</h3>
                    <p className="text-[#1B1B1B]/70 leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-6 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-[#1B1B1B]/20 flex items-center justify-center group-hover:bg-[#F97316] group-hover:border-[#F97316] transition-colors">
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

      <section id="apropos" className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4] relative overflow-hidden" data-testid="about-section">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#222222] clip-path-polygon"></div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Une référence dans les <span className="text-[#F97316]">Laurentides</span></h2>
              
              <div className="space-y-6 text-[#E4E4E4]/80 text-lg">
                <p>
                  Depuis plusieurs années, MC Rénovation Construction s'impose comme un acteur de confiance dans le domaine de la rénovation et de la finition résidentielle à Saint-Jérôme et dans toute la région des Laurentides.
                </p>
                <p>
                  Notre approche est simple: <strong>précision, polyvalence et fiabilité</strong>. Nous comprenons qu'un chantier est avant tout votre milieu de vie. C'est pourquoi nous mettons un point d'honneur à livrer des travaux complets et bien exécutés.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#E4E4E4]/10 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">10+</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#F97316] mb-2">100%</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Satisfaction client</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#F97316]/30 rounded-md transform translate-x-4 translate-y-4"></div>
              <img src={img('mc-camion.jpg')} alt="MC Rénovation Construction" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Réalisations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos projets récents</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Button variant="outline" className="border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#E4E4E4] font-bold rounded-md px-6 py-6 uppercase tracking-wide" data-testid="button-voir-tout">
                Voir tout
              </Button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="group relative overflow-hidden rounded-md cursor-pointer h-[400px]" data-testid={`project-card-${idx}`}>
                  <img src={img(proj.img)} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#F97316] font-bold text-sm tracking-widest uppercase mb-2 block">{proj.cat}</span>
                    <h3 className="text-[#E4E4E4] text-2xl font-bold uppercase">{proj.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]" data-testid="process-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-bold tracking-widest uppercase text-sm">Notre processus</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Simple et transparent</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="flex flex-col" data-testid={`step-${step.num}`}>
                  <div className="text-6xl md:text-7xl font-bold text-[#F97316] mb-6 leading-none">{step.num}</div>
                  <div className="w-10 h-1 bg-[#F97316] mb-6"></div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                  <p className="text-[#E4E4E4]/60 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FaqSection />

      <section className="py-32 text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 z-0">
          <img src={img('mc-camion.jpg')} alt="MC Rénovation Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Besoin d'un expert <br/>en rénovation?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">
              Confiez-nous votre projet et découvrez la différence d'un travail fait avec rigueur et propreté.
            </p>
            <Link href="/soumission" data-testid="link-cta-soumission">
              <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg transition-transform hover:scale-105 h-auto">
                Obtenir ma soumission gratuite
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </PageWrapper>
  );
}
