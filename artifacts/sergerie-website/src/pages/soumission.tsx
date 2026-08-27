import { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { FadeIn } from '@/components/layout/fade-in';
import { FaqSection } from '@/components/layout/faq-section';
import { img } from '@/lib/utils';

const advantages = [
  'Armoires de cuisine sur mesure',
  'Vanités et armoires de salle de bain',
  'Rangement personnalisé',
  'Projets d’ébénisterie sur mesure',
  'Configuration adaptée à votre espace',
  'Attention portée aux détails',
];

export default function Soumission() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const project = String(form.get('projectType') || 'Projet sur mesure');
    const body = [
      `Nom : ${form.get('name') || ''}`,
      `Téléphone : ${form.get('phone') || ''}`,
      `Courriel : ${form.get('email') || ''}`,
      `Ville : ${form.get('city') || ''}`,
      `Type de projet : ${project}`,
      `Échéancier souhaité : ${form.get('timeline') || ''}`,
      `Budget approximatif : ${form.get('budget') || ''}`,
      '',
      `Description : ${form.get('details') || ''}`,
      '',
      'Les photos ou plans peuvent être joints directement au courriel.',
    ].join('\n');
    window.location.href = `mailto:armoirebelle-vue@hotmail.ca?subject=${encodeURIComponent(`Demande de soumission — ${project}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="relative min-h-[50vh] flex items-center pt-20" data-testid="soumission-hero">
        <div className="absolute inset-0 z-0">
          <img src={img('photo-cuisine-2.jpg')} alt="Cuisine avec armoires sur mesure" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#1B1B1B]/85"></div>
        </div>
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10 text-[#EDEDED] py-16">
          <div className="max-w-3xl">
            <FadeIn><div className="flex items-center gap-4 mb-6"><div className="w-12 h-1 bg-[#D71920]"></div><span className="text-[#FF4B50] font-bold tracking-[0.2em] uppercase text-sm">Armoire Belle-Vue Ébénisterie</span></div></FadeIn>
            <FadeIn delay={100}><h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white uppercase tracking-tight" data-testid="text-soumission-title">Parlez-nous de <span className="text-[#FF4B50]">votre projet.</span></h1></FadeIn>
            <FadeIn delay={200}><p className="text-lg md:text-xl text-[#EDEDED]/80 max-w-2xl font-medium leading-relaxed">Vous planifiez une nouvelle cuisine, une salle de bain ou un projet d’ébénisterie sur mesure? Présentez-nous votre idée et discutons de vos besoins.</p></FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#EDEDED]" data-testid="soumission-form-section">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white p-8 md:p-12 rounded-md shadow-lg">
                  <div className="flex items-center gap-3 mb-2"><div className="w-8 h-1 bg-[#D71920]"></div></div>
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-3 text-[#1B1B1B]">Détails du projet</h2>
                  <p className="text-[#1B1B1B]/60 mb-8">Quelques informations nous aideront à mieux comprendre votre projet.</p>
                  {submitted && <div className="mb-8 border-l-4 border-[#D71920] bg-[#FBE8E9] px-5 py-4 text-sm text-[#1B1B1B]" role="status">Votre demande est prête à être envoyée dans votre application courriel. Vous pouvez y joindre vos photos ou vos plans avant l’envoi.</div>}
                  <form className="space-y-8" data-testid="soumission-form" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2"><label htmlFor="quote-name" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Nom *</label><Input id="quote-name" name="name" required className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#D71920]" placeholder="Votre nom" data-testid="input-soumission-name" /></div>
                      <div className="space-y-2"><label htmlFor="quote-phone" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Téléphone *</label><Input id="quote-phone" name="phone" required type="tel" className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#D71920]" placeholder="(418) 000-0000" data-testid="input-soumission-phone" /></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2"><label htmlFor="quote-email" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Courriel *</label><Input id="quote-email" name="email" required type="email" className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#D71920]" placeholder="votre@courriel.com" data-testid="input-soumission-email" /></div>
                      <div className="space-y-2"><label htmlFor="quote-city" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Ville</label><Input id="quote-city" name="city" className="bg-[#EDEDED]/50 border-0 h-14 rounded-sm focus-visible:ring-[#D71920]" placeholder="Votre ville" data-testid="input-soumission-city" /></div>
                    </div>
                    <div className="space-y-2"><label htmlFor="quote-project" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Type de projet *</label><select id="quote-project" name="projectType" required className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#D71920] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-service"><option value="">Sélectionnez un projet</option><option value="Cuisine sur mesure">Cuisine sur mesure</option><option value="Salle de bain">Salle de bain</option><option value="Ébénisterie">Ébénisterie</option><option value="Rangement sur mesure">Rangement sur mesure</option><option value="Autre">Autre</option></select></div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2"><label htmlFor="quote-budget" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Budget approximatif</label><select id="quote-budget" name="budget" className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#D71920] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-budget"><option value="">À déterminer</option><option value="Moins de 10 000 $">Moins de 10 000 $</option><option value="10 000 $ à 20 000 $">10 000 $ à 20 000 $</option><option value="20 000 $ à 40 000 $">20 000 $ à 40 000 $</option><option value="Plus de 40 000 $">Plus de 40 000 $</option></select></div>
                      <div className="space-y-2"><label htmlFor="quote-timeline" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Échéancier souhaité</label><select id="quote-timeline" name="timeline" className="w-full h-14 bg-[#EDEDED]/50 border-0 rounded-sm px-3 text-[#1B1B1B] focus:ring-2 focus:ring-[#D71920] focus:outline-none appearance-none cursor-pointer" data-testid="select-soumission-timeline"><option value="">À déterminer</option><option value="Le plus tôt possible">Le plus tôt possible</option><option value="Dans 1 à 3 mois">Dans 1 à 3 mois</option><option value="Dans 3 à 6 mois">Dans 3 à 6 mois</option><option value="Flexible">Flexible</option></select></div>
                    </div>
                    <div className="space-y-2"><label htmlFor="quote-details" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Description du projet *</label><Textarea id="quote-details" name="details" required className="bg-[#EDEDED]/50 border-0 min-h-[220px] rounded-sm focus-visible:ring-[#D71920] resize-none" placeholder="Parlez-nous de l’espace, de vos besoins et de vos idées." data-testid="input-soumission-details" /></div>
                    <div className="space-y-2"><label htmlFor="quote-files" className="text-sm font-bold uppercase tracking-wide text-[#1B1B1B]/70">Photos ou plans</label><div className="flex items-center gap-3 bg-[#EDEDED]/50 px-4 h-14 rounded-sm"><Paperclip size={18} className="text-[#D71920]" /><Input id="quote-files" name="files" type="file" accept="image/*,.pdf" multiple className="border-0 p-0 h-auto bg-transparent file:mr-4 file:border-0 file:bg-[#1B1B1B] file:px-3 file:py-2 file:text-white file:text-sm file:font-semibold" data-testid="input-soumission-files" /></div><p className="text-xs text-[#1B1B1B]/50">Vous pourrez joindre ces fichiers dans votre courriel.</p></div>
                    <div className="flex items-start gap-3 pt-2"><input type="checkbox" id="consent" required className="mt-1 accent-[#D71920] w-4 h-4" data-testid="checkbox-consent" /><label htmlFor="consent" className="text-sm text-[#1B1B1B]/60 leading-relaxed">J’accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission.</label></div>
                    <Button type="submit" className="w-full bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md py-6 uppercase tracking-wide text-base transition-transform hover:scale-[1.02] h-auto mt-4" data-testid="button-soumission-submit">Demander une soumission</Button>
                  </form>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={200}><div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-contact"><h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Contactez-nous</h3><div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><Phone size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Téléphone</div><a href="tel:+14186721613" className="font-bold text-white text-lg hover:text-[#FF4B50] transition-colors">(418) 672-1613</a></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><Mail size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Courriel</div><a href="mailto:armoirebelle-vue@hotmail.ca" className="font-bold text-white hover:text-[#FF4B50] transition-colors text-sm break-all">armoirebelle-vue@hotmail.ca</a></div></div>
                <div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#D71920] rounded-md flex items-center justify-center shrink-0"><MapPin size={18} className="text-white" /></div><div><div className="text-xs uppercase tracking-wider text-[#EDEDED]/40 font-bold mb-1">Adresse</div><span className="font-bold text-white text-sm">381 rue Principale<br />Québec, G0V 1G0</span></div></div>
              </div></div></FadeIn>
              <FadeIn delay={350}><div className="bg-[#1B1B1B] text-[#EDEDED] p-8 rounded-md shadow-lg" data-testid="sidebar-advantages"><h3 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">Nos services</h3><ul className="space-y-4">{advantages.map((item) => <li key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#FF4B50] shrink-0" /><span className="text-[#EDEDED]/80 text-sm font-medium">{item}</span></li>)}</ul></div></FadeIn>
              <FadeIn delay={500}><div className="relative overflow-hidden rounded-md h-[420px]"><img src={img('photo-sdb-vanite.jpg')} alt="Vanité de salle de bain sur mesure" loading="lazy" className="w-full h-full object-cover object-center" /><div className="absolute inset-0 bg-[#1B1B1B]/60"></div><div className="absolute bottom-0 left-0 w-full p-8"><p className="text-white font-bold text-lg uppercase tracking-wide leading-tight">Armoires sur mesure</p><p className="text-[#FF4B50] font-bold text-lg uppercase tracking-wide leading-tight">Pensées pour votre quotidien</p></div></div></FadeIn>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </PageWrapper>
  );
}