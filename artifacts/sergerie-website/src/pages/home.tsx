import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { CountUp } from '@/components/layout/count-up';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { ContactSection } from '@/components/layout/contact-section';
import { img } from '@/lib/utils';

const services = [
  { title: 'Toiture', desc: 'Installation et réfection complète avec matériaux de première qualité.', img: 'photo-toiture.jpg' },
  { title: 'Cuisine', desc: 'Design moderne et fonctionnel pour le coeur de votre maison.', img: 'photo-cuisine.jpg' },
  { title: 'Salle de bain', desc: 'Espaces repensés, matériaux durables et finitions impeccables.', img: 'photo-sdb-vanite.jpg' },
  { title: 'Sous-sol', desc: 'Aménagement complet pour maximiser votre espace habitable.', img: 'photo-soussol.jpg' },
  { title: 'Revêtement extérieur', desc: 'Protection et esthétique avec des revêtements de haute durabilité.', img: 'photo-revetement.jpg' },
  { title: 'Balcon / terrasse', desc: "Conception et construction d'espaces extérieurs sur mesure.", img: 'photo-balcon.jpg' },
];

const projects = [
  { img: 'photo-construction.jpg', title: 'Construction Résidentielle', cat: 'Toiture & Structure' },
  { img: 'photo-cuisine-2.jpg', title: 'Cuisine Moderne', cat: 'Rénovation intérieure' },
  { img: 'photo-sdb-bain.jpg', title: 'Salle de Bain Luxueuse', cat: 'Rénovation intérieure' }
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Visite gratuite sur place. On évalue vos besoins, on discute du budget et on répond à toutes vos questions.' },
  { num: '02', title: 'Soumission', desc: "Document détaillé avec prix fermes, échéancier précis et description complète des travaux. Sans surprise." },
  { num: '03', title: 'Exécution', desc: "Travaux exécutés selon les normes RBQ, chantier propre et livré dans les délais convenus. Garanti." }
];

const faqItems = [
  { value: 'item-1', q: 'Les soumissions sont-elles vraiment gratuites?', a: 'Oui, nous offrons une évaluation gratuite de votre projet. Nous nous déplaçons sur place pour bien comprendre vos besoins et vous fournir une estimation détaillée et transparente.' },
  { value: 'item-2', q: 'Faites-vous uniquement de la toiture?', a: 'Non, bien que la toiture soit l\'une de nos grandes expertises, nous réalisons des rénovations complètes : cuisines, salles de bain, sous-sols, revêtements extérieurs et balcons.' },
  { value: 'item-3', q: 'Desservez-vous toute la Rive-Sud?', a: 'Oui, nous sommes basés à Varennes mais nous nous déplaçons sur l\'ensemble de la Rive-Sud de Montréal pour réaliser vos projets.' },
  { value: 'item-4', q: 'Prenez-vous en charge les projets de A à Z?', a: 'Absolument. Nous offrons un service clés en main. Nous gérons la planification, la commande des matériaux, l\'exécution des travaux et la finition, en gardant le chantier propre.' },
  { value: 'item-5', q: 'Quels sont vos délais pour débuter les travaux?', a: 'Les délais varient en fonction de l\'ampleur du projet et de la saison (surtout pour la toiture). Lors de la soumission, nous établissons un échéancier réaliste que nous nous engageons à respecter.' },
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img src={img('photo-hero-bg.jpg')} alt="Hero background" className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 bg-[#1B1B1B]/80"></div>
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
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-white uppercase tracking-tight" data-testid="text-hero-title">
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
              <Link href="/soumission" data-testid="link-hero-soumission">
                <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base transition-transform hover:scale-105 h-auto">
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

      <div className="bg-[#1B1B1B] relative z-20 py-16" data-testid="stats-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2"><CountUp end={15} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2"><CountUp end={500} suffix="+" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Projets complétés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Satisfaction client</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#FF6501] mb-2"><CountUp end={24} suffix="h" /></div>
              <div className="uppercase text-sm font-bold tracking-wider text-[#E4E4E4]/60">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]" data-testid="services-section">
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
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 80}>
                <div className="group bg-white rounded-md shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col" data-testid={`service-card-${idx}`}>
                  <div className="h-48 overflow-hidden">
                    <img src={img(service.img)} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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

      <section id="apropos" className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4] relative overflow-hidden" data-testid="about-section">
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
              <img src={img('photo-chantier.jpg')} alt="Chantier de construction" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 md:py-32 bg-[#E4E4E4] text-[#1B1B1B]" data-testid="projects-section">
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
                    <span className="text-[#FF6501] font-bold text-sm tracking-widest uppercase mb-2 block">{proj.cat}</span>
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
                <div className="w-8 h-1 bg-[#FF6501]"></div>
                <span className="text-[#FF6501] font-bold tracking-widest uppercase text-sm">Notre processus</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">Simple et transparent</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 200}>
                <div className="flex flex-col" data-testid={`step-${step.num}`}>
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

      <TestimonialsSection />

      <section className="py-24 md:py-32 bg-[#1B1B1B] text-[#E4E4E4]" data-testid="faq-section">
        <div className="container mx-auto px-6 max-w-3xl">
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
              {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border border-[#E4E4E4]/20 rounded-md px-6 bg-[#222222]" data-testid={`faq-${item.value}`}>
                  <AccordionTrigger className="text-lg font-bold hover:text-[#FF6501] hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-[#E4E4E4]/70 text-base pb-6">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 z-0">
          <img src={img('photo-camion.jpg')} alt="Camion Sergerie" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Besoin d'un expert <br/>en rénovation?</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">
              Confiez-nous votre projet et découvrez la différence d'un travail fait avec rigueur et propreté.
            </p>
            <Link href="/soumission" data-testid="link-cta-soumission">
              <Button className="bg-[#FF6501] hover:bg-[#FF6501]/90 text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg transition-transform hover:scale-105 h-auto">
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
