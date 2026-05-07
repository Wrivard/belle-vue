import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home as HomeIcon, Building2, Factory, Hammer, Maximize2, DoorOpen, Paintbrush, Layers } from 'lucide-react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { CountUp } from '@/components/layout/count-up';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { ContactSection } from '@/components/layout/contact-section';
import { CertificationsSection } from '@/components/layout/certifications-section';
import { img } from '@/lib/utils';

const sectors = [
  { icon: HomeIcon, title: 'Résidentiel', desc: 'Maisons neuves, rénovations et agrandissements pour propriétaires.' },
  { icon: Building2, title: 'Commercial', desc: 'Locaux, bureaux et bâtiments commerciaux clés en main.' },
  { icon: Factory, title: 'Industriel', desc: 'Bâtiments industriels et institutionnels structurés.' },
];

const services = [
  { icon: HomeIcon, title: 'Construction résidentielle', desc: 'Maisons neuves bâties avec rigueur, du plan à la livraison clé en main.' },
  { icon: Building2, title: 'Construction commerciale', desc: 'Bâtiments commerciaux fonctionnels, livrés selon les normes et l\'échéancier.' },
  { icon: Factory, title: 'Construction industrielle', desc: 'Structures industrielles et industrielles robustes, conçues pour durer.' },
  { icon: Hammer, title: 'Rénovation', desc: 'Rénovations résidentielles et commerciales — propre, ponctuel et bien fini.' },
  { icon: Maximize2, title: 'Agrandissement', desc: 'Agrandissez votre espace en harmonie avec l\'existant, sans compromis.' },
  { icon: DoorOpen, title: 'Portes et fenêtres', desc: 'Installation et remplacement de portes et fenêtres performantes et étanches.' },
  { icon: Paintbrush, title: 'Finition intérieure', desc: 'Gypse, joints, moulures, peinture et planchers — finition soignée du début à la fin.' },
  { icon: Layers, title: 'Revêtement extérieur', desc: 'Revêtements muraux durables qui protègent et valorisent votre bâtiment.' },
];

const projects = [
  { img: 'photo-construction.jpg', title: 'Construction résidentielle', cat: 'Résidentiel' },
  { img: 'photo-chantier.jpg', title: 'Chantier commercial', cat: 'Commercial' },
  { img: 'marinier-cuisine-blanche.jpg', title: 'Rénovation intérieure', cat: 'Rénovation' },
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

      <section id="services" className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B] relative overflow-hidden" data-testid="services-section">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#114D8B]"></div>

        <div className="container mx-auto px-6 max-w-[1200px] relative">
          <FadeIn>
            <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-[#114D8B]"></div>
                  <span className="text-[#114D8B] font-bold tracking-widest uppercase text-sm">Nos services</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">Une expertise <span className="text-[#114D8B]">multi-secteur</span></h2>
              </div>
              <div className="md:col-span-5">
                <p className="text-lg text-[#1B1B1B]/70 leading-relaxed">
                  Entrepreneur général polyvalent, nous intervenons en construction neuve, en rénovation et en agrandissement, autant en résidentiel qu'en commercial et industriel.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4 mb-12" data-testid="sectors-grid">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <FadeIn key={sector.title} delay={idx * 100}>
                  <div className="group bg-[#1B1B1B] text-white p-8 rounded-md flex items-start gap-5 hover:bg-[#114D8B] transition-colors duration-300 h-full" data-testid={`sector-${idx}`}>
                    <div className="w-14 h-14 rounded-md bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <Icon size={26} className="text-[#114D8B] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-[0.25em] uppercase text-white/40 group-hover:text-white/70 mb-2 transition-colors">0{idx + 1} — Secteur</div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{sector.title}</h3>
                      <p className="text-white/70 group-hover:text-white/90 text-sm leading-relaxed">{sector.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1B1B1B]/10 rounded-md overflow-hidden border border-[#1B1B1B]/10" data-testid="services-grid">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={idx * 60}>
                  <div className="group bg-white p-8 hover:bg-[#114D8B] transition-colors duration-300 h-full flex flex-col relative" data-testid={`service-card-${idx}`}>
                    <div className="absolute top-6 right-6 text-xs font-bold tracking-widest text-[#1B1B1B]/20 group-hover:text-white/40 transition-colors">0{idx + 1}</div>
                    <div className="w-12 h-12 rounded-md bg-[#114D8B]/10 group-hover:bg-white/15 flex items-center justify-center mb-6 transition-colors">
                      <Icon size={22} className="text-[#114D8B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-[#1B1B1B] group-hover:text-white mb-3 transition-colors leading-tight">{service.title}</h3>
                    <p className="text-[#1B1B1B]/65 group-hover:text-white/85 text-sm leading-relaxed flex-1 transition-colors">{service.desc}</p>
                    <div className="mt-6 pt-4 border-t border-[#1B1B1B]/10 group-hover:border-white/25 flex items-center justify-between transition-colors">
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#114D8B] group-hover:text-white transition-colors">En savoir plus</span>
                      <ChevronRight size={16} className="text-[#1B1B1B]/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border-l-4 border-[#114D8B] p-8 rounded-md" data-testid="services-cta">
              <div>
                <div className="text-xs font-bold tracking-[0.25em] uppercase text-[#114D8B] mb-2">RBQ : 5698-3927-01</div>
                <p className="text-xl font-bold text-[#1B1B1B]">Un projet en tête ? Discutons-en — soumission gratuite et sans engagement.</p>
              </div>
              <Link href="/soumission" data-testid="link-services-soumission">
                <Button className="bg-[#114D8B] hover:bg-[#1A6BB8] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto whitespace-nowrap">
                  Demander une soumission
                </Button>
              </Link>
            </div>
          </FadeIn>
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
              <img src={img('photo-construction.jpg')} alt="Réno-Action FB inc. — chantier" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl" />
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
          <img src={img('photo-chantier.jpg')} alt="Réno-Action FB inc." className="w-full h-full object-cover" />
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
