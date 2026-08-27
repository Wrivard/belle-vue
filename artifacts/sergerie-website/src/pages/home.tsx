import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Maximize2, Ruler, Sparkles, TableProperties } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { ContactSection } from '@/components/layout/contact-section';
import { FaqSection } from '@/components/layout/faq-section';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { img } from '@/lib/utils';

const services = [
  {
    title: 'Armoires de cuisine sur mesure',
    description: 'Une configuration pensée pour votre espace, vos habitudes et la façon dont vous utilisez votre cuisine.',
    img: 'photo-cuisine.jpg',
  },
  {
    title: 'Vanités et armoires de salle de bain',
    description: 'Du rangement adapté aux dimensions de la pièce, à la configuration du lavabo et à votre quotidien.',
    img: 'photo-sdb-vanite.jpg',
  },
  {
    title: 'Rangement sur mesure',
    description: 'Des solutions personnalisées pour mieux utiliser l’espace disponible dans chaque pièce.',
    img: 'photo-garage.jpg',
  },
  {
    title: 'Projets d’ébénisterie',
    description: 'Une idée précise ou un espace à optimiser? Discutons d’une solution conçue pour votre projet.',
    img: 'photo-porte-grange.jpg',
  },
];

const projects = [
  { img: 'photo-cuisine-2.jpg', title: 'Projet de cuisine sur mesure', cat: 'Cuisine', detail: 'Armoires personnalisées' },
  { img: 'photo-sdb-complete.jpg', title: 'Projet de salle de bain', cat: 'Salle de bain', detail: 'Vanité et rangement' },
  { img: 'photo-garage.jpg', title: 'Solution de rangement', cat: 'Rangement', detail: 'Aménagement sur mesure' },
  { img: 'photo-cuisine-3.jpg', title: 'Projet d’ébénisterie', cat: 'Ébénisterie sur mesure', detail: 'Création personnalisée' },
];

const advantages = [
  { icon: Ruler, title: 'Dimensions précises', text: 'Une solution adaptée aux dimensions exactes de votre espace.' },
  { icon: TableProperties, title: 'Configuration personnalisée', text: 'Chaque rangement est réfléchi selon vos besoins et vos habitudes.' },
  { icon: Maximize2, title: 'Espace optimisé', text: 'Une meilleure utilisation du rangement disponible, dans chaque pièce.' },
  { icon: Sparkles, title: 'Détails à votre image', text: 'Des choix de couleurs, de finis et de détails qui vous ressemblent.' },
];

const processSteps = [
  ['01', 'Votre projet', 'Nous discutons de votre espace, de vos besoins, de vos préférences et de vos objectifs.'],
  ['02', 'Planification', 'Nous déterminons la configuration et la solution sur mesure adaptées à votre projet.'],
  ['03', 'Choix et détails', 'Nous finalisons les couleurs, les finis, la configuration et les détails pertinents.'],
  ['04', 'Fabrication', 'Les armoires sont fabriquées selon le projet approuvé.'],
  ['05', 'Finalisation', 'Le projet est finalisé, avec installation lorsque celle-ci est offerte pour le projet.'],
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90svh] flex items-center py-32 md:py-40" data-testid="hero-section">
        <div className="absolute inset-0 overflow-hidden">
          <img src={img('photo-cuisine.jpg')} alt="Cuisine avec armoires sur mesure" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#171717]/75" />
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-white">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#D71920]" />
                <span className="text-[#FF4B50] font-bold tracking-[0.2em] uppercase text-sm">Ébénisterie sur mesure</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-8 uppercase tracking-tight">
                Des armoires sur mesure <span className="text-[#FF4B50]">conçues pour votre quotidien.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Cuisine, salle de bain et projets d’ébénisterie réalisés sur mesure selon votre espace, vos besoins et votre style.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}>
                <Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base h-auto">
                  Demander une soumission <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-white/70 bg-transparent hover:bg-white hover:text-[#171717] text-white font-bold rounded-md px-8 py-6 uppercase tracking-wide text-base h-auto" onClick={() => document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir nos réalisations
              </Button>
            </FadeIn>
            <p className="mt-8 text-sm font-bold tracking-widest uppercase text-white/60">Cuisine <span className="text-[#FF4B50]">•</span> Salle de bain <span className="text-[#FF4B50]">•</span> Ébénisterie</p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-24 md:py-32 bg-white text-[#171717]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Notre savoir-faire</span></div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Des espaces pensés pour vous.</h2>
              <p className="text-lg text-[#171717]/65 leading-relaxed">Armoire Belle-Vue Ébénisterie crée des espaces fonctionnels et personnalisés. Chaque projet commence par vos besoins pour intégrer naturellement les armoires à votre pièce et maximiser le rangement.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 60}>
                <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}>
                  <div className="group relative overflow-hidden rounded-md aspect-[4/3] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500">
                    <img src={img(service.img)} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#171717]/60 group-hover:bg-[#D71920]/55 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8"><div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 mb-2">0{idx + 1}</div><h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">{service.title}</h3><p className="text-white/75 text-sm mt-3 leading-relaxed max-w-xl">{service.description}</p><div className="mt-4 h-px w-10 bg-[#D71920] group-hover:w-full group-hover:bg-white transition-all duration-500" /></div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="scroll-mt-24 py-24 md:py-32 bg-[#171717] text-white" data-testid="about-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#FF4B50] font-bold tracking-widest uppercase text-sm">À propos</span></div>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8">L’ébénisterie <span className="text-[#FF4B50]">à votre mesure.</span></h2>
              <div className="space-y-6 text-white/75 text-lg leading-relaxed">
                <p>Armoire Belle-Vue Ébénisterie se spécialise dans la fabrication d’armoires sur mesure pour les espaces résidentiels.</p>
                <p>Nous concevons des projets personnalisés en portant attention à vos besoins, à la fonctionnalité de l’espace et aux détails qui feront la différence dans votre quotidien.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-4 border-2 border-[#D71920]/60 rounded-md translate-x-4 translate-y-4" />
              <img src={img('photo-cuisine-2.jpg')} alt="Projet de cuisine avec armoires personnalisées" loading="lazy" className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="pourquoi" className="scroll-mt-24 py-24 md:py-32 bg-white text-[#171717]" data-testid="why-section">
        <div className="container mx-auto px-6 max-w-[1200px]"><FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Le sur mesure</span></div><h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-16">Votre espace, vos besoins, votre solution.</h2></FadeIn><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{advantages.map(({ icon: Icon, title, text }, idx) => <FadeIn key={title} delay={idx * 80}><div className="border-t-2 border-[#D71920] pt-6"><Icon className="text-[#D71920] mb-6" size={32} /><h3 className="font-bold uppercase tracking-wide mb-3">{title}</h3><p className="text-[#171717]/60 leading-relaxed">{text}</p></div></FadeIn>)}</div></div>
      </section>

      <section id="realisations" className="scroll-mt-24 py-24 md:py-32 bg-[#F4F4F4] text-[#171717]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Réalisations</span></div><h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Des projets qui vous ressemblent.</h2><p className="text-lg text-[#171717]/65 max-w-2xl mb-16">Découvrez quelques exemples de cuisines, salles de bain et solutions de rangement sur mesure.</p></FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <FadeIn key={project.title} delay={idx * 100}><div className="group relative overflow-hidden rounded-md cursor-pointer h-[360px]"><img src={img(project.img)} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-[#171717]/55 group-hover:bg-[#171717]/40 transition-colors" /><div className="absolute bottom-0 left-0 w-full p-8"><span className="text-[#FF4B50] font-bold text-sm tracking-widest uppercase mb-2 block">{project.cat}</span><h3 className="text-white text-2xl font-bold uppercase">{project.title}</h3><p className="text-white/70 mt-2">{project.detail}</p></div></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="approche" className="scroll-mt-24 py-24 md:py-32 bg-[#EDEDED] text-[#171717]" data-testid="approach-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Notre approche</span></div><h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Un projet conçu autour de vos besoins.</h2><p className="text-lg text-[#171717]/65 max-w-2xl mb-16">De la première discussion à la finalisation, chaque étape sert à créer une solution d’armoires qui s’intègre à votre espace.</p></FadeIn>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map(([number, title, text], idx) => <FadeIn key={number} delay={idx * 70}><div className="border-t-2 border-[#D71920] pt-6 h-full"><span className="text-[#D71920] font-bold text-sm tracking-widest">{number}</span><h3 className="font-bold uppercase tracking-wide mt-4 mb-3">{title}</h3><p className="text-[#171717]/60 leading-relaxed text-sm">{text}</p></div></FadeIn>)}
          </div>
        </div>
      </section>

      <section className="py-32 text-white relative overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0"><img src={img('photo-cuisine-3.jpg')} alt="" loading="lazy" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#171717]/85" /></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center"><FadeIn><h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Vous avez un <span className="text-[#FF4B50]">projet en tête?</span></h2><p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">Parlez-nous de votre cuisine, salle de bain ou projet d’ébénisterie et obtenez une soumission adaptée à vos besoins.</p><Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}><Button className="bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-10 py-8 uppercase tracking-widest text-lg h-auto">Demander une soumission</Button></Link><a href="tel:+14186721613" className="block mt-8 text-[#FF4B50] font-bold text-2xl">(418) 672-1613</a></FadeIn></div>
      </section>
      <TestimonialsSection />
      <FaqSection />
      <ContactSection showForm={false} />
    </PageWrapper>
  );
}