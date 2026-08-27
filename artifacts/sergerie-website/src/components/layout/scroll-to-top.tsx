import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    requestAnimationFrame(() => {
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [location]);

  return null;
}
