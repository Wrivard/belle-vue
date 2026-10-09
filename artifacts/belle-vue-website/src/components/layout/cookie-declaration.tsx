import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    belleVueConsentEnabled?: boolean;
    Cookiebot?: { renew(): void };
  }
}

export function CookieDeclaration() {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!window.belleVueConsentEnabled) {
      setNotice('La gestion Cookiebot est désactivée dans cet aperçu de développement.');
      return;
    }
    const updateReady = () => setReady(Boolean(window.Cookiebot));
    updateReady();
    window.addEventListener('bellevue:cookiebot-ready', updateReady);
    const script = document.createElement('script');
    script.id = 'CookieDeclaration';
    script.src = 'https://consent.cookiebot.com/a6066f16-917c-48f9-a5b8-c7b1895caa20/cd.js';
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('data-culture', 'FR');
    script.onerror = () => setNotice('La déclaration des témoins est indisponible. Veuillez vérifier votre connexion ou réessayer plus tard.');
    const target = container.current!;
    target.appendChild(script);
    return () => {
      window.removeEventListener('bellevue:cookiebot-ready', updateReady);
      script.onerror = null;
      // The vendor renders beside its script; clear it on SPA navigation.
      target.replaceChildren();
    };
  }, []);

  return (
    <div>
      <Button type="button" variant="outline" disabled={!ready}
        onClick={() => window.Cookiebot?.renew()}>
        Modifier mes préférences de témoins
      </Button>
      {notice && <p className="mt-4 text-sm text-[#171717]/70" role="status">{notice}</p>}
      <div ref={container} className="mt-6 min-w-0 break-words [overflow-wrap:anywhere]" />
    </div>
  );
}
