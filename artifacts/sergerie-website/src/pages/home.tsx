import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { CountUp } from '@/components/layout/count-up';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { ContactSection } from '@/components/layout/contact-section';
import { CertificationsSection } from '@/components/layout/certifications-section';
import { img } from '@/lib/utils';

const services = [
  { title: 'Construction résidentielle', img: 'ra/construction-residentielle.jpg' },
  { title: 'Construction commerciale', img: 'ra/portes-garage.jpg' },
  { title: 'Construction industrielle', img: 'ra/fondation.jpg' },
  { title: 'Rénovation', img: 'ra/sdb-douche.jpg' },
  { title: 'Agrandissement', img: 'ra/chantier-trailer.jpg' },
  { title: 'Portes et fenêtres', img: 'ra/sdb-bain.jpg' },
  { title: 'Finition intérieure', img: 'ra/sdb-vanite.jpg' },
  { title: 'Revêtement extérieur', img: 'ra/exterieur-noir-bois.jpg' },
];

const projects = [
  { img: 'ra/exterieur-noir-bois.jpg', title: 'Maison résidentielle clé en main', cat: 'Résidentiel' },
  { img: 'ra/chantier-trailer.jpg', title: 'Construction de structure', cat: 'Construction' },
  { img: 'ra/sdb-vanite.jpg', title: 'Rénovation salle de bain', cat: 'Rénovation' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Visite gratuite sur place. On évalue vos besoins, on discute du budget et on répond à toutes vos questions sans engagement.' },
  { num: '02', title: 'Soumission', desc: "Document détaillé avec prix fermes, échéancier précis et description complète des travaux. Sans surprise, sans cachette." },
  { num: '03', title: 'Exécution', desc: "Travaux exécutés avec soin et rigueur, chantier propre, livré dans les délais convenus. Une finition moderne et polie, à la hauteur de vos attentes." }
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20" data-testid="hero-section">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={img('marinier-salon.jpg')}
            className="w-full h-full object-cover object-center"
          >
            <source src={`${import.meta.env.BASE_URL}images/marinier-hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1B1B1B]/70"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED]">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#114D8B]"></div>
                <span className="text-[#114D8B] font-bold tracking-[0.2em] uppercase text-sm">Rénovation & Construction</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white uppercase tracking-tight" data-testid="text-hero-title">
                Entrepreneur <br />
                <span className="text-[#114D8B]">général</span> <br />
                en construction & rénovation
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#EDEDED]/80 mb-10 max-w-2xl font-medium leading-relaxed">
                Réno-Action FB inc. réalise vos projets de construction et rénovation résidentielle, commerciale et industrielle. Une approche structurée, fiable et professionnelle, du plan à la livraison.
              </p>
              <p className="text-xs text-[#EDEDED]/50 mb-6 font-bold tracking-widest uppercase">RBQ : 5698-3927-01</p>
            </FadeIn>
            
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission" data-testid="link-hero-soumission">
                <Button className="bg-[#114D8B] hover:bg-[#1A6BB8] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto">
                  Soumission gratuite
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-[#EDEDED] bg-transparent hover:bg-[#EDEDED] hover:text-[#1B1B1B] text-[#EDEDED] font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-colors h-auto" onClick={() => document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })} data-testid="button-voir-realisations">
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
              <div className="text-5xl md:text-7xl font-extrabold text-[#114D8B] mb-3 tracking-tight"><CountUp end={10} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Années d'expérience</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-extrabold text-[#114D8B] mb-3 tracking-tight"><CountUp end={300} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Projets complétés</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-extrabold text-[#114D8B] mb-3 tracking-tight"><CountUp end={100} suffix="%" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Satisfaction client</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-extrabold text-[#114D8B] mb-3 tracking-tight"><CountUp end={24} suffix="h" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#1B1B1B]/50">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      <CertificationsSection />

      <section id="services" className="py-24 md:py-32 bg-white text-[#1B1B1B]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <FadeIn>
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#114D8B]"></div>
                <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Nos services</span>
                <div className="w-8 h-1 bg-[#114D8B]"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Construction & rénovation</h2>
              <p className="text-lg text-[#1B1B1B]/65 leading-relaxed">
                Entrepreneur général polyvalent — résidentiel, commercial et industriel.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-testid="services-grid">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 60}>
                <Link href="/soumission" data-testid={`service-card-${idx}`}>
                  <div className="group relative overflow-hidden rounded-md aspect-[4/5] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={img(service.img)}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-[#114D8B]/0 group-hover:bg-[#114D8B]/40 transition-colors duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 mb-2">0{idx + 1}</div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-tight">{service.title}</h3>
                      <div className="mt-4 h-px w-10 bg-[#114D8B] group-hover:w-full group-hover:bg-white transition-all duration-500"></div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED] relative overflow-hidden" data-testid="about-section">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#222222] clip-path-polygon"></div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#114D8B]"></div>
                <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Expertise</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8">Entrepreneur général <span className="text-[#114D8B]">polyvalent</span></h2>
              
              <div className="space-y-6 text-[#EDEDED]/80 text-lg">
                <p>
                  Réno-Action FB inc. est un entrepreneur général établi à Coaticook, spécialisé en construction et rénovation résidentielle, commerciale et industrielle. Une entreprise structurée, fiable et reconnue pour la qualité de son exécution.
                </p>
                <p>
                  Notre approche est <strong>professionnelle, rigoureuse et transparente</strong>. De la planification à la livraison, nous gérons vos projets de A à Z avec le même engagement envers la qualité, peu importe leur ampleur.
                </p>
                <p className="text-sm font-bold tracking-widest uppercase text-[#114D8B]">Licence RBQ : 5698-3927-01</p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#EDEDED]/10 pt-8">
                <div>
                  <div className="text-5xl md:text-6xl font-extrabold text-[#114D8B] mb-3 tracking-tight">10+</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#EDEDED]/60">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-extrabold text-[#114D8B] mb-3 tracking-tight">100%</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#EDEDED]/60">Satisfaction client</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#114D8B]/30 rounded-md transform translate-x-4 translate-y-4"></div>
              <img src={img('ra/construction-residentielle.jpg')} alt="Réno-Action FB inc. — chantier" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#114D8B]"></div>
                <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Réalisations</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Nos projets récents</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Button variant="outline" className="border-2 border-[#1B1B1B] bg-transparent text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-[#EDEDED] font-bold rounded-md px-6 py-6 uppercase tracking-wide" data-testid="button-voir-tout">
                Voir tout
              </Button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="group relative overflow-hidden rounded-md cursor-pointer h-[400px]" data-testid={`project-card-${idx}`}>
                  <img src={img(proj.img)} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#1B1B1B]/60 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#114D8B] font-bold text-sm tracking-widest uppercase mb-2 block">{proj.cat}</span>
                    <h3 className="text-[#EDEDED] text-2xl font-bold uppercase">{proj.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#EDEDED]" data-testid="process-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#114D8B]"></div>
                <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Notre processus</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Simple et transparent</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="flex flex-col" data-testid={`step-${step.num}`}>
                  <div className="text-6xl md:text-7xl font-bold text-[#114D8B] mb-6 leading-none">{step.num}</div>
                  <div className="w-10 h-1 bg-[#114D8B] mb-6"></div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                  <p className="text-[#EDEDED]/60 leading-relaxed">{step.desc}</p>
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
          <img src={img('ra/exterieur-noir-bois.jpg')} alt="Réno-Action FB inc." className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Prêt à démarrer <br/>votre projet?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">
              Construction ou rénovation — résidentielle, commerciale ou industrielle. Contactez Réno-Action FB inc. pour une soumission gratuite et sans engagement.
            </p>
            <Link href="/soumission" data-testid="link-cta-soumission">
              <Button className="bg-[#114D8B] hover:bg-[#1A6BB8] text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg transition-transform hover:scale-105 h-auto">
                Obtenir mon estimation gratuite
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactSection showForm={false} />
    </PageWrapper>
  );
}
