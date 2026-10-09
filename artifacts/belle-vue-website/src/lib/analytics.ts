type AnalyticsData = Record<string, string | number | boolean>;
type AnalyticsEvent =
  | 'quote_cta_clicked'
  | 'quote_form_started'
  | 'quote_step_completed'
  | 'quote_validation_error'
  | 'quote_submitted'
  | 'contact_clicked'
  | 'facebook_clicked'
  | 'faq_opened';

declare global {
  interface Window {
    umami?: {
      track(name: string, data?: AnalyticsData): void | Promise<unknown>;
    };
  }
}

// Replit injects the tracker on published sites when analytics is enabled.
// Never add a tracker script or block an interaction while waiting for it.
export function trackEvent(name: AnalyticsEvent, data?: AnalyticsData): void {
  if (typeof window === 'undefined') return;
  try {
    const pending = window.umami?.track(name, data);
    if (pending) void Promise.resolve(pending).catch(() => {});
  } catch {
    // Analytics failures must not interrupt navigation or the quote form.
  }
}

export function getAnalyticsPage(pathname: string, basePath = '/'): string {
  const base = basePath.replace(/\/+$/, '');
  const relative = base && pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname;
  const path = relative.replace(/\/+$/, '') || '/';
  return ['/', '/soumission', '/politique-cookies'].includes(path) ? path : '/404';
}

// Only return fixed categories. Never transmit the link URL, mailto body,
// query parameters, or arbitrary user-provided paths.
export function classifyAnalyticsLink(
  href: string,
  origin: string,
  basePath = '/',
): { name: AnalyticsEvent; data: AnalyticsData } | null {
  try {
    const url = new URL(href, origin);
    if (url.protocol === 'tel:') return { name: 'contact_clicked', data: { channel: 'phone' } };
    if (url.protocol === 'mailto:') return { name: 'contact_clicked', data: { channel: 'email' } };
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (url.hostname === 'facebook.com' || url.hostname.endsWith('.facebook.com')) {
      return { name: 'facebook_clicked', data: {} };
    }
    const quotePath = `${basePath.replace(/\/+$/, '')}/soumission`;
    if (url.origin === origin && url.pathname.replace(/\/+$/, '') === quotePath) {
      return { name: 'quote_cta_clicked', data: {} };
    }
  } catch {
    // Malformed links are not analytics events.
  }
  return null;
}
