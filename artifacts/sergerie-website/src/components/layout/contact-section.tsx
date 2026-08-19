import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';
import { FadeIn } from './fade-in';
import { img } from '@/lib/utils';

interface ContactSectionProps {
  showForm?: boolean;
}

export function ContactSection({ showForm = true }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="contact-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#C89A4D]"></div>
              <span className="text-[#C89A4D] font-bold tracking-widest uppercase text-sm">Contact</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-8">Discutons de <br/>votre projet</h2>
            <p className="text-lg text-[#1B1B1B]/70 mb-12">
              Rénovation intérieure et extérieure résidentielle à Repentigny, Montréal et environs. Contactez-nous pour une soumission gratuite.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Téléphone</h4>
                   <a href="tel:514-795-2889" className="text-2xl font-bold hover:text-[#C89A4D] transition-colors" data-testid="text-phone">(514) 795-2889</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Courriel</h4>
                   <a href="mailto:renovationisaact@icloud.com" className="text-xl font-bold hover:text-[#C89A4D] transition-colors" data-testid="text-email">renovationisaact@icloud.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#C89A4D] rounded-md flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Emplacement</h4>
                   <p className="text-xl font-bold" data-testid="text-location">Repentigny, QC<br/><span className="text-base text-[#1B1B1B]/60">Montréal et environs</span></p>
                </div>
              </div>
            </div>

            {!showForm && (
              <div className="mt-12">
                <Link href="/soumission">
                  <button className="bg-[#C89A4D] hover:bg-[#9A702F] text-white font-bold rounded-md px-8 py-5 uppercase tracking-wide text-base transition-transform hover:scale-105">
                    Obtenir une soumission gratuite
                  </button>
                </Link>
              </div>
            )}
          </FadeIn>

          {showForm ? (
            <FadeIn delay={200}>
              <div className="bg-white p-10 rounded-md shadow-xl border-t-4 border-[#C89A4D]">
                <h3 className="text-2xl font-bold uppercase mb-8">Envoyer un message</h3>
                <form className="space-y-6" data-testid="contact-form">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Nom complet</label>
                    <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="Votre nom" data-testid="input-contact-name" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Téléphone</label>
                      <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="514-000-0000" data-testid="input-contact-phone" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Courriel</label>
                      <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#C89A4D]" placeholder="vous@exemple.com" data-testid="input-contact-email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Détails du projet</label>
                    <Textarea className="bg-[#EDEDED]/50 border-0 min-h-[150px] rounded-sm focus-visible:ring-[#C89A4D] resize-none" placeholder="Décrivez votre projet : cuisine, salle de bain, rénovation intérieure ou extérieure, etc." data-testid="input-contact-details" />
                  </div>
                  <Button className="w-full bg-[#1B1B1B] hover:bg-[#C89A4D] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-colors h-auto mt-4" data-testid="button-contact-submit">
                    Envoyer la demande
                  </Button>
                </form>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={200}>
              <div className="relative rounded-md overflow-hidden shadow-xl h-full min-h-[500px]">
                   <img
                   src={img('photo-cuisine.jpg')}
                   alt="Projet de rénovation résidentielle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1B1B1B]/40"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-[#1B1B1B]/80">
                  <div className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-2">Entrepreneur spécialisé</div>
                   <p className="text-white font-bold text-lg uppercase tracking-wide">Rénovation intérieure</p>
                   <p className="text-[#C89A4D] font-bold text-lg uppercase tracking-wide">Finitions haut de gamme</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
