import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { ContactSection } from '@/components/layout/contact-section';
import { CertificationsSection } from '@/components/layout/certifications-section';
import { img } from '@/lib/utils';

const advantages = [
  "10+ ans d'expérience",
  'Visite et estimation gratuites',
  'Prix fermes, sans surprise',
  'Service clé en main',
  'Chantier propre garanti',
  'Réponse sous 24h'
];

export default function Soumission() {
  return (
    <PageWrapper>
      <section className="relative min-h-[50vh] flex items-center pt-20" data-testid="soumission-hero">
        <div className="absolute inset-0 z-0">
          <img src={img('mc-chantier.jpg')} alt="Chantier Construction Pro 3M" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0B0B0B]/85"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED] py-16">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#F47A1F]"></div>
                <span className="text-[#F47A1F] font-bold tracking-[0.2em] uppercase text-sm">Soumission gratuite</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white uppercase tracking-tight" data-testid="text-soumission-title">
                Démarrez votre <br />
                <span className="text-[#F47A1F]">projet</span> aujourd'hui
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#EDEDED]/80 max-w-2xl font-medium leading-relaxed">
                Réponse garantie sous 24h. Visite gratuite incluse. Aucun engagement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <CertificationsSection />

      <section className="py-16 md:py-24 bg-[#EDEDED]" data-testid="soumission-form-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-md shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-1 bg-[#F47A1F]"></div>
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 text-[#0B0B0B]">Détails du projet</h2>
                  
                  <form className="space-y-6" data-testid="soumission-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Nom complet *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="Votre nom" data-testid="input-soumission-name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Téléphone *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="(450) 000-0000" data-testid="input-soumission-phone" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Courriel *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="votre@courriel.com" data-testid="input-soumission-email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Adresse des travaux *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="Numéro et rue, Ville" data-testid="input-soumission-address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Type de service *</label>
                      <select className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#0B0B0B] focus:ring-2 focus:ring-[#F47A1F] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-service">
                        <option value="">Sélectionnez un service</option>
                        <option value="renovation">Rénovation</option>
                        <option value="portes-fenetres">Portes et fenêtres</option>
                        <option value="agrandissement">Agrandissement</option>
                        <option value="travaux-residentiels">Travaux résidentiels</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#0B0B0B]/70">Détails supplémentaires</label>
                      <Textarea 
                        className="bg-[#EDEDED]/50 border-0 min-h-[180px] rounded-sm focus-visible:ring-[#F47A1F] resize-none" 
                        placeholder="Décrivez votre projet (dimensions approximatives, délai souhaité, etc.)" 
                        data-testid="input-soumission-details"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input type="checkbox" id="consent" className="mt-1 accent-[#F47A1F] w-4 h-4" data-testid="checkbox-consent" />
                      <label htmlFor="consent" className="text-sm text-[#0B0B0B]/60 leading-relaxed">
                        J'accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission conformément à notre politique de confidentialité.
                      </label>
                    </div>

                    <Button className="w-full bg-[#F47A1F] hover:bg-[#FF8C2A] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-transform hover:scale-[1.02] h-auto mt-4" data-testid="button-soumission-submit">
                      Envoyer ma demande de soumission
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={200}>
                <div className="bg-[#0B0B0B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-contact">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Contactez-nous</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Téléphone</div>
                        <a href="tel:450-502-3399" className="font-bold text-white text-lg hover:text-[#F47A1F] transition-colors">450-502-3399</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Courriel</div>
                        <a href="mailto:constructionpro3m@gmail.com" className="font-bold text-white hover:text-[#F47A1F] transition-colors text-sm">constructionpro3m@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Adresse</div>
                        <span className="font-bold text-white text-sm">850 rang des bas étangs, Québec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={350}>
                <div className="bg-[#0B0B0B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-advantages">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Pourquoi nous choisir?</h3>
                  
                  <ul className="space-y-4">
                    {advantages.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#F47A1F] shrink-0" />
                        <span className="text-[#EDEDED]/80 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="relative overflow-hidden rounded-md h-[200px]">
                  <img src={img('mc-camion.jpg')} alt="Construction Pro 3M" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#0B0B0B]/40"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </PageWrapper>
  );
}
