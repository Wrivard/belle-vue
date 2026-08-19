import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { img } from '@/lib/utils';

const advantages = [
  'Entrepreneur général de confiance',
  'Rénovations résidentielles complètes',
  'Repentigny, Montréal et environs',
  'Visite et soumission gratuites',
  'Prix fermes, sans surprise',
  'Service professionnel du début à la fin',
  'Travail précis et durable',
  'Résultats durables et esthétiques'
];

export default function Soumission() {
  return (
    <PageWrapper>
      <section className="relative min-h-[50vh] flex items-center pt-20" data-testid="soumission-hero">
        <div className="absolute inset-0 z-0">
           <img src={img('client-reno-general.jfif')} alt="Projet de rénovation résidentielle" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED] py-16">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-1 bg-[#C89A4D]"></div>
                 <span className="text-[#C89A4D] font-bold tracking-[0.2em] uppercase text-sm">Soumission gratuite</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white uppercase tracking-tight" data-testid="text-soumission-title">
                 Démarrez votre <br />
                 <span className="text-[#C89A4D]">projet</span> aujourd'hui
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-[#EDEDED]/80 max-w-2xl font-medium leading-relaxed">
                 Rénovation intérieure ou extérieure à Repentigny, Montréal et les environs. Décrivez-nous votre projet et recevez une réponse personnalisée, sans engagement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#EDEDED]" data-testid="soumission-form-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-md shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-1 bg-[#C89A4D]"></div>
                  </div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-8 text-[#1B1B1B]">Détails du projet</h2>
                  
                  <form className="space-y-8" data-testid="soumission-form">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Nom complet *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="Votre nom" data-testid="input-soumission-name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Téléphone *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="(514) 000-0000" data-testid="input-soumission-phone" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Courriel *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="votre@courriel.com" data-testid="input-soumission-email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Adresse des travaux *</label>
                        <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="Numéro et rue, Ville" data-testid="input-soumission-address" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Type de service *</label>
                      <select className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#C89A4D] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-service">
                        <option value="">Sélectionnez un service</option>
                         <option value="cuisine">Rénovation de cuisine</option>
                         <option value="salle-de-bain">Rénovation de salle de bain</option>
                         <option value="interieur-complet">Rénovation intérieure complète</option>
                         <option value="finition-interieure">Finition intérieure</option>
                         <option value="exterieur">Rénovation extérieure</option>
                         <option value="sur-mesure">Projet sur mesure</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Budget approximatif</label>
                        <select className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#C89A4D] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-budget">
                          <option value="">Sélectionnez un budget</option>
                          <option value="moins-5000">Moins de 5 000 $</option>
                          <option value="5000-15000">5 000 $ – 15 000 $</option>
                          <option value="15000-30000">15 000 $ – 30 000 $</option>
                          <option value="30000-60000">30 000 $ – 60 000 $</option>
                          <option value="plus-60000">Plus de 60 000 $</option>
                          <option value="a-determiner">À déterminer</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Échéancier souhaité</label>
                        <select className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#C89A4D] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-timeline">
                          <option value="">Sélectionnez un délai</option>
                          <option value="urgent">Le plus tôt possible</option>
                          <option value="1-3-mois">Dans 1 à 3 mois</option>
                          <option value="3-6-mois">Dans 3 à 6 mois</option>
                          <option value="6-mois-plus">Dans 6 mois ou plus</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Détails supplémentaires</label>
                         <Textarea 
                         className="bg-[#EDEDED]/50 border-0 min-h-[220px] rounded-sm focus-visible:ring-[#C89A4D] resize-none" 
                         placeholder="Décrivez votre projet (pièces concernées, travaux souhaités, style recherché, échéancier, etc.)" 
                        data-testid="input-soumission-details"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                       <input type="checkbox" id="consent" className="mt-1 accent-[#C89A4D] w-4 h-4" data-testid="checkbox-consent" />
                      <label htmlFor="consent" className="text-sm text-[#1B1B1B]/60 leading-relaxed">
                        J'accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission conformément à notre politique de confidentialité.
                      </label>
                    </div>

                     <Button className="w-full bg-[#C89A4D] hover:bg-[#9A702F] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-transform hover:scale-[1.02] h-auto mt-4" data-testid="button-soumission-submit">
                      Envoyer ma demande de soumission
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={200}>
                <div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-contact">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Contactez-nous</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Téléphone</div>
                         <a href="tel:514-795-2889" className="font-bold text-white text-lg hover:text-[#C89A4D] transition-colors">(514) 795-2889</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Courriel</div>
                         <a href="mailto:renovationisaact@icloud.com" className="font-bold text-white hover:text-[#C89A4D] transition-colors text-sm">renovationisaact@icloud.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 bg-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Adresse</div>
                         <span className="font-bold text-white text-sm">40 Camille<br/>Repentigny (QC)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={350}>
                <div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-advantages">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Pourquoi nous choisir?</h3>
                  
                  <ul className="space-y-4">
                    {advantages.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#C89A4D] shrink-0" />
                        <span className="text-[#EDEDED]/80 text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="relative overflow-hidden rounded-md h-[420px]">
                   <img src={img('client-salle-de-bain-1.png')} alt="Réalisation de salle de bain" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[#1B1B1B]/60"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8">
                     <p className="text-white font-bold text-lg uppercase tracking-wide leading-tight">Rénovation résidentielle</p>
                     <p className="text-[#C89A4D] font-bold text-lg uppercase tracking-wide leading-tight">Qualité & souci du détail</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
    </PageWrapper>
  );
}
