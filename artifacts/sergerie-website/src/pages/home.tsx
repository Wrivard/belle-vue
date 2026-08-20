import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Building2, Home as HomeIcon, Layers3, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { ContactSection } from '@/components/layout/contact-section';
import { img } from '@/lib/utils';

const services = [
  { title: 'Revêtement résidentiel', description: 'Installation et remplacement pour maisons neuves et projets de rénovation.', img: 'kmf-projet-02.png' },
  { title: 'Revêtement commercial', description: 'Des solutions durables pour commerces, bâtiments professionnels et multilogements.', img: 'kmf-projet-04.png' },
  { title: 'Remplacement de revêtement', description: 'Modernisez l’enveloppe de votre bâtiment avec une finition propre et actuelle.', img: 'kmf-projet-03.png' },
  { title: 'Construction neuve', description: 'Installation complète du revêtement extérieur sur les nouvelles constructions.', img: 'kmf-projet-01.png' },
  { title: 'Rénovation extérieure', description: 'Transformez l’apparence de votre propriété et augmentez sa protection.', img: 'kmf-projet-05.png' },
  { title: 'Finitions extérieures', description: 'Chaque détail final est posé avec précision pour un résultat uniforme et durable.', img: 'kmf-projet-08.png' },
];

const projects = [
  { img: 'kmf-projet-06.png', title: 'Façade contemporaine', cat: 'Résidentiel', detail: 'Revêtement architectural' },
  { img: 'kmf-projet-04.png', title: 'Projet d’envergure', cat: 'Commercial', detail: 'Construction neuve' },
  { img: 'kmf-projet-03.png', title: 'Transformation extérieure', cat: 'Rénovation', detail: 'Remplacement de revêtement' },
  { img: 'kmf-projet-07.png', title: 'Finition durable', cat: 'Résidentiel', detail: 'Revêtement extérieur' },
];

const advantages = [
  { icon: Layers3, title: 'Expertise spécialisée', text: 'Le revêtement extérieur est au cœur de notre savoir-faire.' },
  { icon: CheckCircle2, title: 'Travail soigné', text: 'Une attention constante portée aux détails et aux finitions.' },
  { icon: Building2, title: 'Résidentiel & commercial', text: 'Des solutions adaptées à chaque type de bâtiment.' },
  { icon: ShieldCheck, title: 'Résultat durable', text: 'Une installation pensée pour l’apparence et la longévité.' },
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90svh] flex items-center py-32 md:py-40" data-testid="hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <img src={img('kmf-hero.png')} alt="Maison contemporaine avec revêtement extérieur" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-[#171717]/75" />
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-white">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#29499A]" />
                <span className="text-[#29499A] font-bold tracking-[0.2em] uppercase text-sm">Spécialiste en revêtement extérieur</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-8 uppercase tracking-tight">
                Donnez une nouvelle dimension <span className="text-[#29499A]">à votre extérieur.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Installation et rénovation de revêtement extérieur pour projets résidentiels et commerciaux à Montréal et sur la Rive-Nord.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission">
                <Button className="bg-[#29499A] hover:bg-[#1E3778] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base h-auto">
                  Demander une soumission <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-white/70 bg-transparent hover:bg-white hover:text-[#171717] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base h-auto" onClick={() => document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir nos réalisations
              </Button>
            </FadeIn>
            <p className="mt-8 text-sm font-bold tracking-widest uppercase text-white/60">Résidentiel <span className="text-[#29499A]">•</span> Commercial <span className="text-[#29499A]">•</span> Rénovation</p>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 md:py-32 bg-white text-[#171717]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#29499A]" /><span className="text-[#29499A] font-bold tracking-widest uppercase text-sm">Notre expertise</span></div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Le revêtement extérieur, au cœur de notre métier.</h2>
              <p className="text-lg text-[#171717]/65 leading-relaxed">Construction KMF réalise des projets propres, durables et professionnels pour donner à chaque bâtiment une enveloppe qui inspire confiance.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 60}>
                <Link href="/soumission">
                  <div className="group relative overflow-hidden rounded-md aspect-[4/5] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500">
                    <img src={img(service.img)} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#171717]/60 group-hover:bg-[#29499A]/55 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6"><div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 mb-2">0{idx + 1}</div><h3 className="text-xl font-bold text-white uppercase tracking-tight leading-tight">{service.title}</h3><p className="text-white/75 text-sm mt-3 leading-relaxed">{service.description}</p><div className="mt-4 h-px w-10 bg-[#29499A] group-hover:w-full group-hover:bg-white transition-all duration-500" /></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="py-24 md:py-32 bg-[#171717] text-white" data-testid="about-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#29499A]" /><span className="text-[#29499A] font-bold tracking-widest uppercase text-sm">À propos de KMF</span></div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8">Le souci du <span className="text-[#29499A]">travail bien fait.</span></h2>
              <div className="space-y-6 text-white/75 text-lg leading-relaxed">
                <p>Construction KMF est une entreprise générale spécialisée en revêtement extérieur qui réalise des projets résidentiels, commerciaux et de rénovation.</p>
                <p>Chaque projet est réalisé avec une attention particulière portée à la qualité d’exécution, aux détails et à la durabilité du résultat.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10"><p className="text-sm uppercase tracking-widest text-white/50">Licence RBQ</p><p className="text-3xl font-bold text-[#29499A] mt-2">5786-4977-01</p></div>
            </FadeIn>
            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#29499A]/60 rounded-md translate-x-4 translate-y-4" />
              <img src={img('kmf-projet-01.png')} alt="Projet de revêtement extérieur Construction KMF" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="realisations" className="py-24 md:py-32 bg-[#F4F4F4] text-[#171717]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#29499A]" /><span className="text-[#29499A] font-bold tracking-widest uppercase text-sm">Réalisations</span></div><h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Voyez la différence.</h2><p className="text-lg text-[#171717]/65 max-w-2xl mb-16">Des transformations qui parlent d’elles-mêmes. Découvrez quelques projets réalisés par Construction KMF.</p></FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
          <FadeIn key={project.title} delay={idx * 100}><div className="group relative overflow-hidden rounded-md cursor-pointer h-[360px]"><img src={img(project.img)} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-[#171717]/55 group-hover:bg-[#171717]/40 transition-colors" /><div className="absolute bottom-0 left-0 w-full p-8"><span className="text-[#29499A] font-bold text-sm tracking-widest uppercase mb-2 block">{project.cat}</span><h3 className="text-white text-2xl font-bold uppercase">{project.title}</h3><p className="text-white/70 mt-2">{project.detail}</p></div></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white text-[#171717]" data-testid="why-section">
        <div className="container mx-auto px-6 max-w-[1200px]"><FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#29499A]" /><span className="text-[#29499A] font-bold tracking-widest uppercase text-sm">Pourquoi Construction KMF</span></div><h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-16">Une base solide pour votre projet.</h2></FadeIn><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{advantages.map(({ icon: Icon, title, text }, idx) => <FadeIn key={title} delay={idx * 80}><div className="border-t-2 border-[#29499A] pt-6"><Icon className="text-[#29499A] mb-6" size={32} /><h3 className="font-bold uppercase tracking-wide mb-3">{title}</h3><p className="text-[#171717]/60 leading-relaxed">{text}</p></div></FadeIn>)}</div></div>
      </section>

      <section className="py-32 text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0"><img src={img('kmf-projet-05.png')} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#171717]/85" /></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center"><FadeIn><h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Un projet de <span className="text-[#29499A]">revêtement extérieur?</span></h2><p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">Parlez-nous de votre projet et obtenez une soumission adaptée à vos besoins.</p><Link href="/soumission"><Button className="bg-[#29499A] hover:bg-[#1E3778] text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg h-auto">Obtenir une soumission</Button></Link><a href="tel:5148381641" className="block mt-8 text-[#29499A] font-bold text-2xl">(514) 838-1641</a></FadeIn></div>
      </section>
      <ContactSection showForm={false} />
    </PageWrapper>
  );
}