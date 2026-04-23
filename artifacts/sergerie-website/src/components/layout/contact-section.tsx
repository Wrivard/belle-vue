import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn } from './fade-in';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#EDEDED] text-[#1B1B1B]" data-testid="contact-section">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-[#F47A1F]"></div>
              <span className="text-[#F47A1F] font-bold tracking-widest uppercase text-sm">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">Discutons de <br/>votre projet</h2>
            <p className="text-lg text-[#1B1B1B]/70 mb-12">
              Prêt à transformer votre maison? Contactez-nous dès aujourd'hui pour une évaluation gratuite.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Téléphone</h4>
                  <a href="tel:450-502-3399" className="text-2xl font-bold hover:text-[#F47A1F] transition-colors" data-testid="text-phone">450-502-3399</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Courriel</h4>
                  <a href="mailto:constructionpro3m@gmail.com" className="text-xl font-bold hover:text-[#F47A1F] transition-colors" data-testid="text-email">constructionpro3m@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#1B1B1B] text-[#F47A1F] rounded-md flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm text-[#1B1B1B]/60 tracking-wider mb-1">Emplacement</h4>
                  <p className="text-xl font-bold" data-testid="text-location">850 rang des bas étangs, Québec</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white p-10 rounded-md shadow-xl border-t-4 border-[#F47A1F]">
              <h3 className="text-2xl font-bold uppercase mb-8">Envoyer un message</h3>
              <form className="space-y-6" data-testid="contact-form">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Nom complet</label>
                  <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="Jean Tremblay" data-testid="input-contact-name" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Téléphone</label>
                    <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="514-000-0000" data-testid="input-contact-phone" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Courriel</label>
                    <Input className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#F47A1F]" placeholder="jean@exemple.com" data-testid="input-contact-email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Détails du projet</label>
                  <Textarea className="bg-[#EDEDED]/50 border-0 min-h-[150px] rounded-sm focus-visible:ring-[#F47A1F] resize-none" placeholder="Décrivez votre projet de rénovation, agrandissement, portes et fenêtres..." data-testid="input-contact-details" />
                </div>
                <Button className="w-full bg-[#1B1B1B] hover:bg-[#F47A1F] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-colors h-auto mt-4" data-testid="button-contact-submit">
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
