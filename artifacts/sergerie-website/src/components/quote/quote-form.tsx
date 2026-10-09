import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { ChevronDown, Paperclip, CheckCircle2, Loader2 } from 'lucide-react';
import { submitQuote } from '@workspace/api-client-react';
import { trackEvent } from '@/lib/analytics';
import {
  BUDGETS, EMPTY_DRAFT, PROJECT_TYPES, QuoteDraft, QuoteErrors, TIMELINES, WORK_TYPES, buildQuoteInput, validateStep,
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
  const [sending, setSending] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);
  const [sendError, setSendError] = useState('');
  const [website, setWebsite] = useState('');
  const submissionId = useRef<string | null>(null);
  const inFlight = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const started = useRef(false);
  const completedSteps = useRef(new Set<number>());

  useEffect(() => {
    if (!moved.current) return;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [step]);

  const set = (k: keyof QuoteDraft) => (v: string) => {
    if (v && !started.current) {
      started.current = true;
      trackEvent('quote_form_started', { page: '/soumission' });
    }
    submissionId.current = null;
    setSendError('');
    setDraft((d) => ({ ...d, [k]: v }));
    setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e));
  };
  const goTo = (s: 1 | 2 | 3) => { if (inFlight.current) return; moved.current = true; setSendError(''); setErrors({}); setStep(s); };

  const focusFirst = (errs: QuoteErrors) => {
    const order: (keyof QuoteDraft)[] = ['projectType', 'workType', 'details', 'budget', 'timeline', 'name', 'phone', 'email', 'city'];
    const first = order.find((k) => errs[k]);
    if (first) requestAnimationFrame(() => document.getElementById(`quote-${first}`)?.focus());
  };

  const next = () => {
    if (step === 3) return;
    const errs = validateStep(step, draft);
    setErrors(errs);
    if (Object.keys(errs).length) {
      trackEvent('quote_validation_error', { page: '/soumission', step, field_count: Object.keys(errs).length });
      focusFirst(errs);
      return;
    }
    if (!completedSteps.current.has(step)) {
      completedSteps.current.add(step);
      trackEvent('quote_step_completed', { page: '/soumission', step });
    }
    goTo((step + 1) as 2 | 3);
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (inFlight.current || receipt) return;
    if (step < 3) { next(); return; }
    const projectErrors = validateStep(1, draft);
    const contactErrors = validateStep(2, draft);
    if (Object.keys(projectErrors).length || Object.keys(contactErrors).length) {
      goTo(Object.keys(projectErrors).length ? 1 : 2);
      setErrors({ ...projectErrors, ...contactErrors });
      focusFirst({ ...projectErrors, ...contactErrors });
      return;
    }
    if (!consent) {
      trackEvent('quote_validation_error', { page: '/soumission', step: 3, field_count: 1 });
      setErrors({ consent: 'Cochez cette case pour envoyer votre demande.' });
      document.getElementById('quote-consent')?.focus();
      return;
    }
    inFlight.current = true;
    setSending(true);
    setSendError('');
    // Keep the same UUID after timeout/errors; Resend deduplicates identical retries.
    try {
      submissionId.current ??= crypto.randomUUID();
      const result = await submitQuote(buildQuoteInput(draft, submissionId.current, consent, website), {
        signal: AbortSignal.timeout(25000),
      });
      if (result.ok !== true || typeof result.reference !== 'string' || !result.reference) throw new Error('invalid_receipt');
      setReceipt(result.reference);
      trackEvent('quote_submitted', {
        page: '/soumission', project_type: draft.projectType, work_type: draft.workType,
      });
    } catch (error) {
      const data = error && typeof error === 'object' && 'data' in error ? error.data : null;
      const message = data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
        ? data.error : 'L’envoi n’a pas pu être confirmé. Vos réponses sont conservées ci-dessous. Réessayez ou appelez-nous au (418) 672-1613.';
      setSendError(message);
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  };

  const inv = (k: keyof QuoteDraft) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `quote-${k}-error` : undefined,
  });

  const summary: [string, string, 1 | 2][] = [
    ['Type de projet', draft.projectType, 1],
    ['Nature des travaux', draft.workType, 1],
    ['Description', draft.details.trim(), 1],
    ['Budget approximatif', draft.budget || 'À déterminer', 1],
    ['Échéancier souhaité', draft.timeline || 'À déterminer', 1],
    ['Nom', draft.name.trim(), 2],
    ['Téléphone', draft.phone.trim(), 2],
    ['Courriel', draft.email.trim(), 2],
    ['Ville', draft.city.trim() || 'Non précisée', 2],
  ];

  if (receipt) return (
    <div className="space-y-6 text-[#1B1B1B]" role="status" data-testid="status-quote-sent">
      <CheckCircle2 size={44} className="text-[#D71920]" aria-hidden="true" />
      <h3 className="text-2xl font-bold">Merci! Votre demande a été transmise.</h3>
      <p>Notre équipe examinera votre projet et communiquera avec vous. Un courriel de confirmation avec le récapitulatif de votre demande vous est envoyé à <strong className="break-all">{draft.email.trim()}</strong>. Vérifiez aussi vos courriels indésirables.</p>
      <p className="text-sm break-all">Référence : <strong>{receipt}</strong></p>
      <p className="text-sm">Vous pouvez répondre au courriel de confirmation pour ajouter des photos, des plans ou des précisions.</p>
      <dl className="divide-y divide-[#1B1B1B]/10 border border-[#1B1B1B]/10 rounded-sm">
        {summary.map(([key, value]) => <div key={key} className="p-4"><dt className="text-xs font-bold uppercase text-[#1B1B1B]/60">{key}</dt><dd className="mt-1 whitespace-pre-wrap break-words">{value}</dd></div>)}
      </dl>
    </div>
  );

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
        <div aria-hidden="true" className="absolute -left-[10000px]">
          <label htmlFor="quote-website">Laissez ce champ vide</label>
          <input id="quote-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <fieldset disabled={sending} className="space-y-6 border-0 p-0 m-0 min-w-0" aria-busy={sending}>
        <h3 ref={headingRef} tabIndex={-1} className="scroll-mt-28 text-2xl font-bold text-[#1B1B1B] focus:outline-none" data-testid="text-step-heading">{STEPS[step - 1]}</h3>

        {step === 1 && (
          <>
            <p className="text-[#1B1B1B]/70 -mt-3">Décrivez votre espace, vos habitudes et vos besoins. Ces détails nous aideront à réfléchir à une conception ergonomique adaptée à votre quotidien.</p>
            <Row id="quote-projectType" label="Type de projet" error={errors.projectType}>
              <Select id="quote-projectType" value={draft.projectType} onChange={set('projectType')} options={PROJECT_TYPES} placeholder="Sélectionnez un projet" invalid={!!errors.projectType} testId="select-soumission-service" />
            </Row>
            <fieldset id="quote-workType-group" className="scroll-mt-28 space-y-2" aria-describedby={errors.workType ? 'quote-workType-error' : undefined}>
              <legend className={`${labelCls} mb-2`}>Construction neuve ou rénovation? <span className="text-[#D71920]" aria-hidden="true">*</span></legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {WORK_TYPES.map((option, index) => (
                  <label key={option} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-sm border px-4 py-3 text-base font-semibold text-[#1B1B1B] transition-colors ${draft.workType === option ? 'border-[#D71920] bg-[#FBE8E9]' : 'border-[#1B1B1B]/15 bg-[#EDEDED] hover:border-[#D71920]/60'}`}>
                    <input
                      id={index === 0 ? 'quote-workType' : `quote-workType-${index}`}
                      type="radio"
                      name="workType"
                      value={option}
                      required
                      checked={draft.workType === option}
                      onChange={(e) => set('workType')(e.target.value)}
                      {...inv('workType')}
                      className="h-5 w-5 shrink-0 accent-[#D71920] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D71920]"
                      data-testid={`radio-soumission-work-type-${index}`}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.workType && <p id="quote-workType-error" className="text-sm font-semibold text-[#B51218]" role="alert">{errors.workType}</p>}
            </fieldset>
            <Row id="quote-details" label="Description du projet" error={errors.details}>
              <textarea id="quote-details" name="details" required maxLength={5000} value={draft.details} onChange={(e) => set('details')(e.target.value)} {...inv('details')} className={`${field} min-h-[180px] py-3 resize-y`} placeholder="Parlez-nous de l’espace, de vos besoins et de vos idées." data-testid="input-soumission-details" />
            </Row>
            <div className="grid md:grid-cols-2 gap-6">
              <Row id="quote-budget" label="Budget approximatif" optional error={errors.budget}>
                <Select id="quote-budget" value={draft.budget} onChange={set('budget')} options={BUDGETS} placeholder="À déterminer" testId="select-soumission-budget" />
              </Row>
              <Row id="quote-timeline" label="Échéancier souhaité" optional error={errors.timeline}>
                <Select id="quote-timeline" value={draft.timeline} onChange={set('timeline')} options={TIMELINES} placeholder="À déterminer" testId="select-soumission-timeline" />
              </Row>
            </div>
            <div className="flex gap-3 border border-dashed border-[#1B1B1B]/25 p-4 rounded-sm" data-testid="text-attachment-guidance">
              <Paperclip size={18} className="text-[#D71920] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-[#1B1B1B]/75"><strong>Photos ou plans :</strong> ce formulaire ne téléverse aucun fichier. Après l’envoi de votre demande, répondez au courriel de confirmation pour joindre vos photos ou plans.</p>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-[#1B1B1B]/70 -mt-3">Pour que nous puissions vous répondre.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Row id="quote-name" label="Nom" error={errors.name}>
                <input id="quote-name" name="name" required maxLength={120} autoComplete="name" value={draft.name} onChange={(e) => set('name')(e.target.value)} {...inv('name')} className={field} placeholder="Votre nom" data-testid="input-soumission-name" />
              </Row>
              <Row id="quote-phone" label="Téléphone" error={errors.phone}>
                <input id="quote-phone" name="phone" required maxLength={40} type="tel" inputMode="tel" autoComplete="tel" value={draft.phone} onChange={(e) => set('phone')(e.target.value)} {...inv('phone')} className={field} placeholder="(418) 000-0000" data-testid="input-soumission-phone" />
              </Row>
              <Row id="quote-email" label="Courriel" error={errors.email}>
                <input id="quote-email" name="email" required maxLength={254} type="email" inputMode="email" autoComplete="email" value={draft.email} onChange={(e) => set('email')(e.target.value)} {...inv('email')} className={field} placeholder="votre@courriel.com" data-testid="input-soumission-email" />
              </Row>
              <Row id="quote-city" label="Ville" optional error={errors.city}>
                <input id="quote-city" name="city" maxLength={120} autoComplete="address-level2" value={draft.city} onChange={(e) => set('city')(e.target.value)} {...inv('city')} className={field} placeholder="Votre ville" data-testid="input-soumission-city" />
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
              <input type="checkbox" id="quote-consent" required checked={consent} onChange={(e) => { setConsent(e.target.checked); setSendError(''); setErrors({}); }} aria-invalid={errors.consent ? true : undefined} aria-describedby={errors.consent ? 'quote-consent-error' : undefined} className="mt-1 accent-[#D71920] w-5 h-5 shrink-0" data-testid="checkbox-consent" />
              <label htmlFor="quote-consent" className="text-sm text-[#1B1B1B]/80 leading-relaxed">J’accepte que mes informations soient utilisées uniquement pour traiter ma demande de soumission. <span className="text-[#D71920]" aria-hidden="true">*</span></label>
            </div>
            {errors.consent && <p id="quote-consent-error" className="text-sm font-semibold text-[#B51218]" role="alert">{errors.consent}</p>}
            <p className="text-sm text-[#1B1B1B]/70">En cliquant sur « Envoyer ma demande », vos réponses seront transmises à notre équipe par courriel via Resend. Vous recevrez également une confirmation avec votre récapitulatif. <a href={`${import.meta.env.BASE_URL}politique-cookies`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#D71920]">Renseignements sur la confidentialité et vos droits (nouvel onglet)</a>.</p>
            {sendError && <div className="border-l-4 border-[#D71920] bg-[#FBE8E9] px-5 py-4 text-sm text-[#1B1B1B]" role="alert" data-testid="status-quote-error">{sendError}</div>}
          </>
        )}

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
          {step > 1 ? (
            <button type="button" onClick={() => goTo((step - 1) as 1 | 2)} className="min-h-[48px] px-4 font-semibold text-[#1B1B1B] underline underline-offset-4 hover:text-[#D71920]" data-testid="button-soumission-back">Retour</button>
          ) : <span />}
          <button type="submit" disabled={sending} className="min-h-[56px] w-full sm:w-auto px-4 sm:px-8 py-3 bg-[#D71920] hover:bg-[#B51218] text-white font-bold rounded-md uppercase tracking-wide text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1B1B] disabled:opacity-60 disabled:cursor-wait" data-testid={step === 3 ? 'button-soumission-submit' : 'button-soumission-next'}>
            {sending ? <span className="inline-flex items-center gap-2"><Loader2 size={18} className="animate-spin" />Envoi en cours…</span> : step === 1 ? 'Continuer : vos coordonnées' : step === 2 ? 'Continuer : vérification' : 'Envoyer ma demande'}
          </button>
        </div>
        </fieldset>
      </form>
    </div>
  );
}
