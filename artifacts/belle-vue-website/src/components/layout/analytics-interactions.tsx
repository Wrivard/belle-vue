import { useEffect } from 'react';
import { classifyAnalyticsLink, getAnalyticsPage, trackEvent } from '@/lib/analytics';

const sectionIds = new Set(['accueil', 'services', 'apropos', 'pourquoi', 'realisations', 'approche', 'temoignages', 'faq', 'contact']);

function interactionLocation(link: Element): string {
  if (link.closest('nav, header')) return 'navigation';
  if (link.closest('footer')) return 'footer';
  if (link.closest('[data-testid="cta-section"]')) return 'bottom_cta';
  const section = link.closest('section')?.id;
  return section && sectionIds.has(section) ? section : 'main';
}

export function AnalyticsInteractions() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      const link = event.target.closest('a[href]');
      if (!link) return;
      const eventInfo = classifyAnalyticsLink(
        link.getAttribute('href') ?? '',
        window.location.origin,
        import.meta.env.BASE_URL,
      );
      if (!eventInfo) return;
      trackEvent(eventInfo.name, {
        ...eventInfo.data,
        location: interactionLocation(link),
        page: getAnalyticsPage(window.location.pathname, import.meta.env.BASE_URL),
      });
    };
    // Capture before React's SPA navigation changes the current route.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
