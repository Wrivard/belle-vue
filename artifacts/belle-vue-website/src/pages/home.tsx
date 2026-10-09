import { Link } from 'wouter';
import { ArrowRight, Maximize2, Ruler, Sparkles, TableProperties } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { ContactSection } from '@/components/layout/contact-section';
import { FaqSection } from '@/components/layout/faq-section';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { ProcessSection } from '@/components/layout/process-section';
import { belleVueHeroImage, belleVueImages } from '@/data/belle-vue-images';
import { ProjectImage } from '@/components/layout/project-image';

const services = [
  {
    title: 'Armoires de cuisine sur mesure',
    description: 'Une configuration ergonomique et sur mesure, adaptée à votre espace, vos habitudes et vos besoins au quotidien.',
    img: belleVueImages[0],
  },
  {
    title: 'Vanités et armoires de salle de bain',
    description: 'Des vanités et armoires ergonomiques, adaptées aux dimensions de la pièce, à la configuration du lavabo et à vos besoins.',
    img: belleVueImages[10],
  },
  {
    title: 'Rangement sur mesure',
    description: 'Des rangements sur mesure, pensés pour faciliter vos gestes et adaptés à l’espace et à vos besoins.',
    img: belleVueImages[2],
  },
  {
    title: 'Ameublement sur mesure',
    description: 'Une idée précise ou un espace à optimiser? Discutons d’une solution ergonomique, conçue selon votre projet et vos besoins.',
    img: belleVueImages[23],
  },
];

const advantages = [
  { icon: Ruler, title: 'Dimensions précises', text: 'Des armoires adaptées aux dimensions de votre espace et à votre réalité.' },
  { icon: TableProperties, title: 'Conception ergonomique', text: 'Une configuration pensée pour faciliter vos gestes et répondre à vos habitudes.' },
  { icon: Maximize2, title: 'Rangement adapté', text: 'L’espace de rangement est réfléchi en fonction de vos besoins et de votre quotidien.' },
  { icon: Sparkles, title: 'Détails à votre image', text: 'Des choix de couleurs, de finis et de détails adaptés à vos goûts et à votre projet.' },
];

const featuredRealizations = [
  { image: belleVueImages[0], className: 'col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1' },
  { image: belleVueImages[19], className: 'col-span-1 lg:col-span-1 lg:col-start-2 lg:row-start-1' },
  { image: belleVueImages[10], className: 'col-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-1' },
  { image: belleVueImages[23], className: 'col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2' },
  { image: belleVueImages[2], className: 'col-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-2' },
  { image: belleVueImages[3], className: 'col-span-1 lg:col-span-2 lg:col-start-2 lg:row-start-2' },
  { image: belleVueImages[24], className: 'col-span-2 lg:col-span-2 lg:col-start-1 lg:row-start-3' },
  { image: belleVueImages[11], className: 'col-span-1 lg:col-span-1 lg:col-start-3 lg:row-start-3' },
  { image: belleVueImages[27], className: 'col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-3' },
];

export default function Home() {
  return (
    <PageWrapper>
      <section id="accueil" className="relative min-h-[90svh] flex items-center py-32 md:py-40" data-testid="hero-section">
        <div className="absolute inset-0 overflow-hidden">
           <ProjectImage image={belleVueHeroImage} priority sizes="100vw" alt="Cuisine avec armoires en bois clair et rangement sur mesure" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#171717]/75" />
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-white">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-[#D71920]" />
                <span className="text-[#FF4B50] font-bold tracking-[0.2em] uppercase text-sm">Ameublement sur mesure</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-8 uppercase tracking-tight">
                Des armoires sur mesure <span className="text-[#FF4B50]">conçues pour votre quotidien.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mb-4 text-xl font-bold leading-snug text-white md:text-2xl" data-testid="hero-region">
                Vos experts au Saguenay Lac Saint-Jean
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Cuisine, salle de bain et ameublement sur mesure, pensés pour un quotidien plus ergonomique et adaptés à votre espace, à vos besoins et à votre style.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4">
              <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}>
                <Button className="w-full sm:w-auto max-w-full whitespace-normal bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 sm:px-8 py-6 uppercase tracking-wide text-sm sm:text-base h-auto">
                  Demander une soumission <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto max-w-full whitespace-normal border-2 border-white/70 bg-transparent hover:bg-white hover:text-[#171717] text-white font-bold rounded-md px-5 sm:px-8 py-6 uppercase tracking-wide text-sm sm:text-base h-auto" onClick={() => document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir nos réalisations
              </Button>
            </FadeIn>
            <p className="mt-8 text-sm font-bold tracking-widest uppercase text-white/60">Cuisine <span className="text-[#FF4B50]">•</span> Salle de bain <span className="text-[#FF4B50]">•</span> Ameublement sur mesure</p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-24 md:py-32 bg-white text-[#171717]" data-testid="services-section">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <FadeIn>
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Notre savoir-faire</span></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Armoires, vanités et rangement sur mesure.</h2>
              <p className="text-lg text-[#171717]/65 leading-relaxed">Armoire Belle-Vue conçoit des armoires et de l’ameublement sur mesure, ergonomiques et adaptés à chaque projet. La configuration tient compte de votre espace, de vos habitudes et de la façon dont vous souhaitez utiliser votre rangement au quotidien.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={service.title} delay={idx * 60}>
                <Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}>
                  <div className="group relative overflow-hidden rounded-md aspect-[4/3] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500">
                    <ProjectImage image={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#FF4B50] font-bold tracking-widest uppercase text-sm">À propos</span></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8 [overflow-wrap:anywhere]">L’ameublement <span className="text-[#FF4B50]">à votre mesure.</span></h2>
              <div className="space-y-6 text-white/75 text-lg leading-relaxed">
                <p>Fondée en 2011, Armoire Belle-Vue est née du désir de Frédéric et Bianka de mieux concilier le travail et la vie de famille, alors que l’entreprise où travaillait Frédéric allait fermer.</p>
                <p>Diplômé du Collège d’Alma en 1996, Frédéric œuvre dans le domaine depuis la fin de ses études. Il met aujourd’hui environ 30 ans d’expérience au service de vos projets.</p>
                <p>Bianka a étudié et travaillé en comptabilité, puis ouvert un service de garde à domicile en 2007. La création de l’entreprise lui permettait de continuer à travailler de la maison tout en étant présente pour leurs deux jeunes enfants.</p>
                <p>Notre petite équipe privilégie une communication étroite et une véritable écoute. Comme nous aimons le dire : <strong className="text-white">« C’est votre cuisine. »</strong> Chaque projet doit correspondre à vos goûts, à vos besoins et à votre réalité.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 mt-8 pt-6">
                <div><p className="text-xl sm:text-2xl font-bold text-white">Depuis 2011</p><p className="mt-2 text-sm text-white/65">Une entreprise familiale</p></div>
                <div><p className="text-xl sm:text-2xl font-bold text-white">≈ 30 ans</p><p className="mt-2 text-sm text-white/65">D’expérience pour Frédéric</p></div>
                <div><p className="text-xl sm:text-2xl font-bold text-white">360+</p><p className="mt-2 text-sm text-white/65">Projets réalisés</p></div>
              </div>
            </FadeIn>
            <FadeIn delay={200} className="relative">
              <div className="absolute -inset-2 xl:-inset-4 border-2 border-[#D71920]/60 rounded-md translate-x-2 translate-y-2 xl:translate-x-4 xl:translate-y-4" />
               <ProjectImage image={belleVueImages[3]} className="w-full h-[500px] object-cover rounded-md relative z-10 shadow-2xl" />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="pourquoi" className="scroll-mt-24 py-24 md:py-32 bg-white text-[#171717]" data-testid="why-section">
        <div className="container mx-auto px-6 max-w-[1200px]"><FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Le sur mesure</span></div><h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Votre espace, vos besoins, votre solution.</h2><p className="text-lg text-[#171717]/65 max-w-3xl mb-14">Nous concevons chaque projet pour s’adapter à votre façon de vivre : une organisation ergonomique, des gestes plus simples et du rangement pensé selon vos besoins.</p></FadeIn><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{advantages.map(({ icon: Icon, title, text }, idx) => <FadeIn key={title} delay={idx * 80}><div className="border-t-2 border-[#D71920] pt-6"><Icon className="text-[#D71920] mb-6" size={32} /><h3 className="font-bold uppercase tracking-wide mb-3">{title}</h3><p className="text-[#171717]/60 leading-relaxed">{text}</p></div></FadeIn>)}</div></div>
      </section>

      <section id="realisations" className="scroll-mt-24 py-24 md:py-32 bg-[#F4F4F4] text-[#171717]" data-testid="projects-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
           <FadeIn><div className="flex items-center gap-3 mb-4"><div className="w-8 h-1 bg-[#D71920]" /><span className="text-[#D71920] font-bold tracking-widest uppercase text-sm">Réalisations</span></div><h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Nos réalisations sur mesure.</h2><p className="text-lg text-[#171717]/65 max-w-2xl mb-16">Une sélection de cuisines, salles de bain et solutions de rangement sur mesure.</p></FadeIn>
            <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-[1.55fr_1fr_1fr_1.55fr] lg:grid-rows-[207px_207px_207px]">
             {featuredRealizations.map(({ image, className }, idx) => (
                <FadeIn key={image} delay={(idx % 6) * 60} className={`min-h-[196px] lg:min-h-0 ${className}`}><div className="group relative h-full min-h-0 overflow-hidden rounded-xl bg-[#171717]"><ProjectImage image={image} sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /></div></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-32 text-white relative overflow-hidden" data-testid="cta-section">
         <div className="absolute inset-0"><ProjectImage image={belleVueImages[18]} sizes="100vw" alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#171717]/85" /></div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-center"><FadeIn><h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">Vous avez un <span className="text-[#FF4B50]">projet en tête?</span></h2><p className="text-xl md:text-2xl font-medium mb-12 text-white/90 max-w-2xl mx-auto">Parlez-nous de vos habitudes et de vos besoins : nous réfléchirons avec vous à une configuration d’armoires ergonomique, adaptée à votre espace.</p><Link href="/soumission" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}><Button className="w-full sm:w-auto max-w-full whitespace-normal bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md px-5 sm:px-10 py-8 uppercase tracking-widest text-sm sm:text-lg h-auto">Demander une soumission</Button></Link><a href="tel:+14186721613" className="block mt-8 text-[#FF4B50] font-bold text-2xl">(418) 672-1613</a></FadeIn></div>
      </section>
      <TestimonialsSection />
      <FaqSection />
      <ContactSection showForm={false} />
    </PageWrapper>
  );
}