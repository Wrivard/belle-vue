import { FACEBOOK_URL, COMPANY_CITY } from './company';

// Owner-designated production domain, prepared ahead of domain connection and publishing.
export const SITE_URL = 'https://armoirebellevue.com';
export const PUBLIC_ROUTES = ['/', '/soumission', '/politique-cookies'] as const;

const pages: Record<string, { title: string; description: string; image: string; imageAlt: string }> = {
  '/': {
    title: 'Armoires sur mesure au Saguenay–Lac-Saint-Jean | Belle-Vue',
    description: 'Armoires de cuisine, vanités et rangement sur mesure au Saguenay–Lac-Saint-Jean. Armoire Belle-Vue conçoit des projets adaptés à votre espace et à vos besoins.',
    image: '/images/belle-vue/og-home.jpg',
    imageAlt: 'Armoire Belle-Vue — Armoires sur mesure au Saguenay–Lac-Saint-Jean',
  },
  '/soumission': {
    title: 'Soumission d’armoires sur mesure | Armoire Belle-Vue',
    description: 'Décrivez votre projet de cuisine, de salle de bain ou d’ameublement sur mesure. Demandez une soumission à Armoire Belle-Vue au Saguenay–Lac-Saint-Jean.',
    image: '/images/belle-vue/og-soumission.jpg',
    imageAlt: 'Demandez une soumission — Armoire Belle-Vue',
  },
  '/politique-cookies': {
    title: 'Politique relative aux témoins | Armoire Belle-Vue',
    description: 'Découvrez l’utilisation de Google Maps, les témoins et les moyens de protéger vos renseignements personnels sur le site d’Armoire Belle-Vue.',
    image: '/images/belle-vue/og-home.jpg',
    imageAlt: 'Armoire Belle-Vue — Ameublement sur mesure',
  },
};

export function normalizePath(path: string) {
  return path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
}

export function getPageSeo(path: string) {
  const normalized = normalizePath(path);
  const page = pages[normalized];
  return {
    ...(page ?? {
      title: 'Page introuvable | Armoire Belle-Vue',
      description: 'Cette page est introuvable. Retrouvez les services, les réalisations et les coordonnées d’Armoire Belle-Vue sur notre page d’accueil.',
      image: '/images/belle-vue/og-home.jpg',
      imageAlt: 'Armoire Belle-Vue',
    }),
    path: normalized,
    indexable: Boolean(page),
    url: `${SITE_URL}${normalized}`,
  };
}

export function getStructuredData(path: string) {
  const page = getPageSeo(path);
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Armoire Belle-Vue',
      url: `${SITE_URL}/`,
      description: 'Armoires de cuisine, vanités, rangement et ameublement sur mesure au Saguenay–Lac-Saint-Jean.',
      telephone: '+1-418-672-1613',
      email: 'armoirebelle-vue@hotmail.ca',
      logo: `${SITE_URL}/images/logo-armoire-belle-vue-ameublement.png`,
      image: `${SITE_URL}/images/belle-vue/og-home.jpg`,
      sameAs: [FACEBOOK_URL],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '381 rue Principale',
        addressLocality: COMPANY_CITY,
        addressRegion: 'QC',
        postalCode: 'G0V 1G0',
        addressCountry: 'CA',
      },
      areaServed: { '@type': 'Place', name: 'Saguenay–Lac-Saint-Jean' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Armoire Belle-Vue',
      inLanguage: 'fr-CA',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': page.path === '/soumission' ? 'ContactPage' : 'WebPage',
      '@id': `${page.url}#webpage`,
      url: page.url,
      name: page.title,
      description: page.description,
      inLanguage: 'fr-CA',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      ...(page.path === '/soumission' ? { breadcrumb: { '@id': `${page.url}#breadcrumb` } } : {}),
    },
  ];
  if (page.path === '/soumission') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${page.url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Soumission', item: page.url },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]!));

export function renderSeoHead(path: string) {
  const page = getPageSeo(path);
  const image = `${SITE_URL}${page.image}`;
  const meta = (key: string, value: string, property = false) =>
    `<meta data-seo ${property ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}" />`;
  return [
    `<title data-seo>${escapeHtml(page.title)}</title>`,
    meta('description', page.description),
    meta('robots', page.indexable ? 'index,follow,max-image-preview:large' : 'noindex,follow'),
    ...(page.indexable ? [`<link data-seo rel="canonical" href="${escapeHtml(page.url)}" />`] : []),
    meta('og:title', page.title, true),
    meta('og:description', page.description, true),
    meta('og:url', page.url, true),
    meta('og:site_name', 'Armoire Belle-Vue', true),
    meta('og:type', 'website', true),
    meta('og:locale', 'fr_CA', true),
    meta('og:image', image, true),
    meta('og:image:secure_url', image, true),
    meta('og:image:width', '1200', true),
    meta('og:image:height', '630', true),
    meta('og:image:alt', page.imageAlt, true),
    meta('twitter:card', 'summary_large_image'),
    meta('twitter:title', page.title),
    meta('twitter:description', page.description),
    meta('twitter:image', image),
    meta('twitter:image:alt', page.imageAlt),
    ...(page.indexable ? [
      `<script data-seo type="application/ld+json">${JSON.stringify(getStructuredData(path)).replace(/</g, '\\u003c')}</script>`,
    ] : []),
  ].join('\n    ');
}

export const renderRobots = () => `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
export const renderSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PUBLIC_ROUTES.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
