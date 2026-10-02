import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown, Paperclip } from 'lucide-react';
import {
  BUDGETS, EMPTY_DRAFT, PROJECT_TYPES, QuoteDraft, QuoteErrors, TIMELINES, buildMailto, validateStep,
} from '@/lib/quote-form-model';

const STEPS = ['Votre projet', 'Vos coordonnées', 'Vérification'];
const field = 'w-full h-14 bg-[#EDEDED] border border-[#1B1B1B]/15 rounded-sm px-4 text-base text-[#1B1B1B] placeholder:text-[#1B1B1B]/45 focus:outline-none focus:ring-2 focus:ring-[#D71920] focus:border-[#D71920] aria-[invalid=true]:border-[#D71920]';
const labelCls = 'block text-sm font-bold text-[#1B1B1B]';

function Row({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className={labelCls}>
        {label}
        {optional ? <span className="ml-2 font-normal text-[#1B1B1B]/60">(facultatif)</span> : <span className="text-[#D71920]" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="text-sm font-semibold text-[#B51218]" role="alert">{error}</p>}
    </div>
  );
}

function Select({ id, value, onChange, options, placeholder, invalid, testId }: { id: string; value: string; onChange: (v: string) => void; options: string[]; placeholder: string; invalid?: boolean; testId: string }) {
  return (
    <div className="relative">
      <select id={id} name={id} required={id === 'quote-projectType'} value={value} onChange={(e) => onChange(e.target.value)} aria-invalid={invalid || undefined} aria-describedby={invalid ? `${id}-error` : undefined} className={`${field} appearance-none pr-12 cursor-pointer`} data-testid={testId}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={20} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1B1B1B]/70" aria-hidden="true" />
    </div>
  );
}

export function QuoteForm() {
  const [draft, setDraft] = useState<QuoteDraft>(EMPTY_DRAFT);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [consent, setConsent] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (!moved.current) return;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [step]);

  const set = (k: keyof QuoteDraft) => (v: string) => {
    setPrepared(false);
    setDraft((d) => ({ ...d, [k]: v }));
    setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e));
  };
  const goTo = (s: 1 | 2 | 3) => { moved.current = true; setPrepared(false); setErrors({}); setStep(s); };

  const focusFirst = (errs: QuoteErrors) => {
    const order: (keyof QuoteDraft)[] = ['projectType', 'details', 'name', 'phone', 'email'];
    const first = order.find((k) => errs[k]);
    if (first) requestAnimationFrame(() => document.getElementById(`quote-${first}`)?.focus());
  };

  const next = () => {
    if (step === 3) return;
    const errs = validateStep(step, draft);
    setErrors(errs);
    if (Object.keys(errs).length) { focusFirst(errs); return; }
    goTo((step + 1) as 2 | 3);
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (step < 3) { next(); return; }
    if (!consent) {
      setErrors({ consent: 'Cochez cette case pour préparer le courriel.' });
      document.getElementById('quote-consent')?.focus();
      return;
    }
    window.location.href = buildMailto(draft);
    setPrepared(true);
  };

  const inv = (k: keyof QuoteDraft) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `quote-${k}-error` : undefined,
  });

  const summary: [string, string, 1 | 2][] = [
    ['Type de projet', draft.projectType, 1],
    ['Description', draft.details.trim(), 1],
    ['Budget approximatif', draft.budget || 'À déterminer', 1],
    ['Échéancier souhaité', draft.timeline || 'À déterminer', 1],
    ['Nom', draft.name.trim(), 2],
    ['Téléphone', draft.phone.trim(), 2],
    ['Courriel', draft.email.trim(), 2],
    ['Ville', draft.city.trim() || 'Non précisée', 2],
  ];

  return (
    <div>
      <ol className="flex gap-2 mb-8" aria-label="Progression du formulaire">
        {STEPS.map((s, i) => {
          const n = i + 1;
          const current = n === step;
          return (
            <li key={s} aria-current={current ? 'step' : undefined} className={`flex-1 border-t-4 pt-2 text-xs sm:text-sm font-bold ${n <= step ? 'border-[#D71920] text-[#1B1B1B]' : 'border-[#1B1B1B]/15 text-[#1B1B1B]/55'}`} data-testid={`progress-step-${n}`}>
              <span className="block text-[11px] font-semibold uppercase tracking-wide">Étape {n} sur 3</span>{s}
            </li>
          );
        })}
      </ol>

      <form noValidate className="space-y-6" onSubmit={onSubmit} data-testid="soumission-form">
        <h3 ref={headingRef} tabIndex={-1} className="scroll-mt-28 text-2xl font-bold text-[#1B1B1B] focus:outline-none" data-testid="text-step-heading">{STEPS[step - 1]}</h3>

        {step === 1 && (
          <>
            <p className="text-[#1B1B1B]/70 -mt-3">Décrivez votre espace, vos habitudes et vos besoins. Ces détails nous aideront à réfléchir à une conception ergonomique adaptée à votre quotidien.</p>
            <Row id="quote-projectType" label="Type de projet" error={errors.projectType}>
              <Select id="quote-projectType" value={draft.projectType} onChange={set('projectType')} options={PROJECT_TYPES} placeholder="Sélectionnez un projet" invalid={!!errors.projectType} testId="select-soumission-service" />
            </Row>
            <Row id="quote-details" label="Description du projet" error={errors.details}>
              <textarea id="quote-details" name="details" required value={draft.details} onChange={(e) => set('details')(e.target.value)} {...inv('details')} className={`${field} min-h-[180px] py-3 resize-y`} placeholder="Parlez-nous de l’espace, de vos besoins et de vos idées." data-testid="input-soumission-details" />
            </Row>
            <div className="grid md:grid-cols-2 gap-6">
              <Row id="quote-budget" label="Budget approximatif" optional>
                <Select id="quote-budget" value={draft.budget} onChange={set('budget')} options={BUDGETS} placeholder="À déterminer" testId="select-soumission-budget" />
              </Row>
              <Row id="quote-timeline" label="Échéancier souhaité" optional>
                <Select id="quote-timeline" value={draft.timeline} onChange={set('timeline')} options={TIMELINES} placeholder="À déterminer" testId="select-soumission-timeline" />
              </Row>
            </div>
            <div className="flex gap-3 border border-dashed border-[#1B1B1B]/25 p-4 rounded-sm" data-testid="text-attachment-guidance">
              <Paperclip size={18} className="text-[#D71920] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#1B1B1B]/75"><strong>Photos ou plans :</strong> ce formulaire ne téléverse aucun fichier. À l’étape finale, votre courriel s’ouvrira; vous pourrez alors y joindre vos photos ou plans manuellement avant de l’envoyer.</p>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-[#1B1B1B]/70 -mt-3">Pour que nous puissions vous répondre.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Row id="quote-name" label="Nom" error={errors.name}>
                <input id="quote-name" name="name" required autoComplete="name" value={draft.name} onChange={(e) => set('name')(e.target.value)} {...inv('name')} className={field} placeholder="Votre nom" data-testid="input-soumission-name" />
              </Row>
              <Row id="quote-phone" label="Téléphone" error={errors.phone}>
                <input id="quote-phone" name="phone" required type="tel" inputMode="tel" autoComplete="tel" value={draft.phone} onChange={(e) => set('phone')(e.target.value)} {...inv('phone')} className={field} placeholder="(418) 000-0000" data-testid="input-soumission-phone" />
              </Row>
              <Row id="quote-email" label="Courriel" error={errors.email}>
                <input id="quote-email" name="email" required type="email" inputMode="email" autoComplete="email" value={draft.email} onChange={(e) => set('email')(e.target.value)} {...inv('email')} className={field} placeholder="votre@courriel.com" data-testid="input-soumission-email" />
              </Row>
              <Row id="quote-city" label="Ville" optional>
                <input id="quote-city" name="city" autoComplete="address-level2" value={draft.city} onChange={(e) => set('city')(e.target.value)} className={field} placeholder="Votre ville" data-testid="input-soumission-city" />
              </Row>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="text-[#1B1B1B]/70 -mt-3">Relisez vos réponses. Vous pouvez corriger une section avant de continuer.</p>
            <dl className="divide-y divide-[#1B1B1B]/10 border border-[#1B1B1B]/10 rounded-sm" data-testid="quote-summary">
              {summary.map(([k, v, s]) => (
                <div key={k} className="flex items-start justify-between gap-4 p-4">
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#1B1B1B]/60">{k}</dt>
                    <dd className="mt-1 text-[#1B1B1B] whitespace-pre-wrap break-words">{v}</dd>
                  </div>
                  <button type="button" onClick={() => goTo(s)} className="shrink-0 text-sm font-semibold underline underline-offset-4 text-[#B51218] min-h-[44px] px-1" aria-label={`Modifier : ${k}`} data-testid={`button-edit-${s}-${k}`}>Modifier</button>
                </div>
              ))}
            </dl>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="quote-consent" required checked={consent} onChange={(e) => { setConsent(e.target.checked); setPrepared(false); setErrors({}); }} aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? 'quote-consent-error' : undefined} className="mt-1 accent-[#D71920] w-5 h-5 shrink-0" data-testid="checkbox-consent" />
              <label htmlFor="quote-consent" className="text-sm text-[#1B1B1B]/80 leading-relaxed">J’accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission. <span className="text-[#D71920]" aria-hidden="true">*</span></label>
            </div>
            {errors.consent && <p id="quote-consent-error" className="text-sm font-semibold text-[#B51218]" role="alert">{errors.consent}</p>}
            <p className="text-sm text-[#1B1B1B]/70">Le bouton ci-dessous ouvre votre application courriel avec le message prérempli. Votre demande n’est envoyée que lorsque vous cliquez sur « Envoyer » dans cette application; pensez à y joindre vos photos ou plans. <a href={`${import.meta.env.BASE_URL}politique-cookies`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#D71920]">Renseignements sur la confidentialité et vos droits (nouvel onglet)</a>.</p>
            {prepared && <div className="border-l-4 border-[#D71920] bg-[#FBE8E9] px-5 py-4 text-sm text-[#1B1B1B]" role="status" data-testid="status-mailto">Le courriel a été préparé dans votre application de messagerie. Il n’a pas encore été envoyé : vérifiez-le, joignez vos fichiers, puis cliquez sur « Envoyer ». Si rien ne s’est ouvert, écrivez-nous à armoirebelle-vue@hotmail.ca.</div>}
          </>
        )}

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          {step > 1 ? (
            <button type="button" onClick={() => goTo((step - 1) as 1 | 2)} className="min-h-[48px] px-4 font-semibold text-[#1B1B1B] underline underline-offset-4 hover:text-[#D71920]" data-testid="button-soumission-back">Retour</button>
          ) : <span />}
          <button type="submit" className="min-h-[56px] px-8 bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md uppercase tracking-wide text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1B1B]" data-testid={step === 3 ? 'button-soumission-submit' : 'button-soumission-next'}>
            {step === 1 ? 'Continuer : vos coordonnées' : step === 2 ? 'Continuer : vérification' : 'Préparer mon courriel'}
          </button>
        </div>
      </form>
    </div>
  );
}
