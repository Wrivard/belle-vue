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
  { title: 'Rénovation', desc: 'Rénovation complète de votre maison — cuisine, salle de bain, sous-sol et plus encore. Un travail soigné, du début à la fin.', img: 'mc-sdb-luxe.jpg' },
  { title: 'Portes et fenêtres', desc: "Installation et remplacement de portes et fenêtres pour améliorer l'efficacité énergétique et le look de votre maison.", img: 'mc-exterieur.jpg' },
  { title: 'Agrandissement', desc: 'Agrandissez votre espace de vie avec des travaux solides et bien planifiés. On bâtit avec vous, pas juste pour vous.', img: 'mc-agrandissement.jpg' },
  { title: 'Travaux résidentiels', desc: 'Tous types de travaux pour votre résidence : plancher, céramique, moulures, peinture et finition intérieure ou extérieure.', img: 'mc-escalier.jpg' },
];

const projects = [
  { img: 'mc-cuisine.jpg', title: 'Rénovation Cuisine', cat: 'Rénovation' },
  { img: 'mc-sdb-douche.jpg', title: 'Salle de Bain Moderne', cat: 'Travaux résidentiels' },
  { img: 'mc-agrandissement.jpg', title: 'Agrandissement Résidentiel', cat: 'Agrandissement' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Visite gratuite sur place. On évalue vos besoins, on discute du budget et on répond à toutes vos questions sans engagement.' },
  { num: '02', title: 'Soumission', desc: "Document détaillé avec prix fermes, échéancier précis et description complète des travaux. Sans surprise, sans cachette." },
  { num: '03', title: 'Exécution', desc: "Travaux exécutés avec soin et rigueur, chantier propre, livré dans les délais convenus. Votre tranquillité d'esprit, notre savoir-faire !" }
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img src={img('mc-cuisine.jpg')} alt="Construction Pro 3M" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0B0B0B]/80"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED]">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-[0.2em] uppercase text-sm">Rénovation & Construction</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white uppercase tracking-tight" data-testid="text-hero-title">
                Votre tranquillité <br />
                d'esprit, <span className="text-[#F47A1F]">notre</span> <br />
                savoir-faire !
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#EDEDED]/80 mb-10 max-w-2xl font-medium leading-relaxed">
                Construction Pro 3M vous accompagne dans tous vos projets résidentiels avec fiabilité et professionnalisme. Rénovation, portes et fenêtres, agrandissement — on s'en occupe.
              </p>
            </FadeIn>
            
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission" data-testid="link-hero-soumission">
                <Button className="bg-[#F47A1F] hover:bg-[#FF8C2A] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto">
                  Soumission gratuite
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-[#EDEDED] bg-transparent hover:bg-[#EDEDED] hover:text-[#0B0B0B] text-[#EDEDED] font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-colors h-auto" data-testid="button-voir-realisations">
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
              <div className="text-4xl md:text-5xl font-bold text-[#F47A1F] mb-2"><CountUp end={10} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#0B0B0B]/50">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F47A1F] mb-2"><CountUp end={300} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#0B0B0B]/50">Projets complétés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F47A1F] mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#0B0B0B]/50">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#F47A1F] mb-2"><CountUp end={24} suffix="h" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#0B0B0B]/50">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      <CertificationsSection />

      <section id="services" className="py-24 md:py-32 bg-[#EDEDED] text-[#0B0B0B]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Services</span>
                <div className="w-8 h-1 bg-[#F47A1F]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos expertises</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group bg-white rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col" data-testid={`service-card-${idx}`}>
                  <div className="h-48 overflow-hidden">
                    <img src={img(service.img)} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-[#0B0B0B] mb-3 group-hover:text-[#F47A1F] transition-colors">{service.title}</h3>
                    <p className="text-[#0B0B0B]/70 leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-6 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-[#0B0B0B]/20 flex items-center justify-center group-hover:bg-[#F47A1F] group-hover:border-[#F47A1F] transition-colors">
                        <ChevronRight size={20} className="text-[#0B0B0B] group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="py-24 md:py-32 bg-[#0B0B0B] text-[#EDEDED] relative overflow-hidden" data-testid="about-section">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#141414] clip-path-polygon"></div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Une équipe de <span className="text-[#F47A1F]">terrain</span> pour vous</h2>
              
              <div className="space-y-6 text-[#EDEDED]/80 text-lg">
                <p>
                  Construction Pro 3M est une entreprise de construction et rénovation résidentielle fondée sur des valeurs simples : fiabilité, accessibilité et professionnalisme. Nous sommes des gens de terrain qui comprennent les réalités d'un chantier.
                </p>
                <p>
                  Notre approche est directe: <strong>écouter, planifier et livrer</strong>. Nous comprenons qu'un chantier est avant tout votre milieu de vie. C'est pourquoi nous mettons un point d'honneur à travailler avec soin et transparence.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#EDEDED]/10 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#F47A1F] mb-2">10+</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#EDEDED]/60">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#F47A1F] mb-2">100%</div>
                  <div className="uppercase text-sm font-bold tracking-wider text-[#EDEDED]/60">Satisfaction client</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#F47A1F]/30 rounded-md transform translate-x-4 translate-y-4"></div>
              <img src={img('mc-camion.jpg')} alt="Construction Pro 3M" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 md:py-32 bg-[#EDEDED] text-[#0B0B0B]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Réalisations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">Nos projets récents</h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Button variant="outline" className="border-2 border-[#0B0B0B] bg-transparent text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#EDEDED] font-bold rounded-md px-6 py-6 uppercase tracking-wide" data-testid="button-voir-tout">
                Voir tout
              </Button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="group relative overflow-hidden rounded-md cursor-pointer h-[400px]" data-testid={`project-card-${idx}`}>
                  <img src={img(proj.img)} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0B0B0B]/60 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#F47A1F] font-bold text-sm tracking-widest uppercase mb-2 block">{proj.cat}</span>
                    <h3 className="text-[#EDEDED] text-2xl font-bold uppercase">{proj.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#0B0B0B] text-[#EDEDED]" data-testid="process-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Notre processus</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Simple et transparent</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="flex flex-col" data-testid={`step-${step.num}`}>
                  <div className="text-6xl md:text-7xl font-bold text-[#F47A1F] mb-6 leading-none">{step.num}</div>
                  <div className="w-10 h-1 bg-[#F47A1F] mb-6"></div>
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
          <img src={img('mc-camion.jpg')} alt="Construction Pro 3M" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0B0B0B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Prêt à démarrer <br/>votre projet?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">
              Votre tranquillité d'esprit, notre savoir-faire. Contactez-nous pour une estimation gratuite sans engagement.
            </p>
            <Link href="/soumission" data-testid="link-cta-soumission">
              <Button className="bg-[#F47A1F] hover:bg-[#FF8C2A] text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg transition-transform hover:scale-105 h-auto">
                Obtenir mon estimation gratuite
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <ContactSection />
    </PageWrapper>
  );
}
