import { type ReactNode, useEffect } from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { setMapConsent, useMapConsent } from '@/lib/map-consent';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 border-l-4 border-[#D71920] pl-4">{title}</h2>
      <div className="space-y-3 leading-relaxed text-[#171717]/85">{children}</div>
    </section>
  );
}

const ext = 'underline underline-offset-4 text-[#B5141A] hover:text-[#171717]';

export default function PolitiqueCookies() {
  const enabled = useMapConsent();
  useEffect(() => {
    const title = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const previousOgTitle = ogTitle?.content;
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const previousOgDescription = ogDescription?.content;
    document.title = 'Politique relative aux témoins | Armoire Belle-Vue';
    const text = 'Découvrez les témoins, vos choix pour Google Maps et les moyens de protéger vos renseignements personnels sur le site d’Armoire Belle-Vue.';
    if (description) description.content = text;
    if (ogTitle) ogTitle.content = document.title;
    if (ogDescription) ogDescription.content = text;
    return () => {
      document.title = title;
      if (description && previousDescription !== undefined) description.content = previousDescription;
      if (ogTitle && previousOgTitle !== undefined) ogTitle.content = previousOgTitle;
      if (ogDescription && previousOgDescription !== undefined) ogDescription.content = previousOgDescription;
    };
  }, []);
  return (
    <PageWrapper>
      <main className="container mx-auto px-6 max-w-[800px] pt-36 pb-20" data-testid="page-politique-cookies">
        <h1 className="text-4xl font-bold mb-3">Politique relative aux témoins (cookies)</h1>
        <p className="text-sm text-[#171717]/60 mb-10">Dernière mise à jour : 2 octobre 2026</p>

        <Section title="En bref">
          <p>Le site d’Armoire Belle-Vue Ébénisterie inc. n’utilise aucun outil d’analyse ni de publicité. Nous ne vous demandons donc pas d’« accepter » des témoins de ce genre : il n’y en a pas. Le seul élément facultatif est la carte Google Maps, qui reste désactivée tant que vous ne l’activez pas.</p>
          <p>Un témoin est un petit fichier que votre navigateur peut conserver sur votre appareil. Le stockage de session est un mécanisme distinct qui permet de mémoriser temporairement une préférence. Cette politique explique ces technologies et vos choix sur notre site.</p>
        </Section>

        <Section title="Ce que nous stockons sur votre appareil">
          <p>Sans action de votre part, le site ne dépose aucun témoin de suivi ni de marketing.</p>
          <p>Si vous activez la carte, nous conservons une préférence technique dans le stockage de session de votre navigateur (sessionStorage) :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Clé : <code>abv-carte-google</code></li>
            <li>Finalité : se souvenir que vous avez choisi d’afficher la carte, pour ne pas vous le redemander à chaque page.</li>
            <li>Durée : la session de navigation de l’onglet, ou jusqu’à la désactivation de la carte. Certains navigateurs peuvent restaurer cette session lors de la réouverture d’un onglet; vous pouvez toujours retirer votre choix avec les contrôles du site.</li>
            <li>Contenu : une simple valeur « 1 ». Aucun renseignement personnel. Si votre navigateur bloque ce stockage, le choix est gardé en mémoire le temps de la visite.</li>
          </ul>
        </Section>

        <Section title="Carte Google Maps (service tiers)">
          <p>Avant votre activation, aucune connexion à Google n’est établie pour la carte. Après activation, votre navigateur charge du contenu de Google : Google reçoit alors notamment votre adresse IP et des informations sur votre appareil et votre navigateur, et peut déposer ou lire des témoins. Ces témoins et leur durée sont déterminés par Google, pas par nous. Vos renseignements peuvent être traités à l’extérieur du Québec.</p>
          <p>La carte est facultative : vous pouvez utiliser tout le site sans elle. Le lien « Ouvrir dans Google Maps » est différent : il ouvre un nouvel onglet sur le site de Google, et c’est alors la politique de Google qui s’applique, sans activation de la carte sur notre site.</p>
          <p>Pour en savoir plus : <a className={ext} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a> · <a className={ext} href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Utilisation des témoins par Google</a>.</p>
          <div className="mt-4 p-5 bg-white border border-[#171717]/15 rounded-md" data-testid="panel-map-preference">
            <p className="font-bold mb-3">Votre choix : la carte est actuellement {enabled ? 'activée' : 'désactivée'}.</p>
            <button type="button" onClick={() => setMapConsent(!enabled)} className="bg-[#D71920] text-white font-bold px-5 py-3 rounded-md hover:bg-[#B5141A] transition-colors" data-testid="button-map-toggle">{enabled ? 'Retirer mon consentement et désactiver la carte' : 'Activer la carte Google Maps'}</button>
          </div>
        </Section>

        <Section title="Polices de caractères">
          <p>Les polices de caractères sont hébergées avec le site. Leur affichage ne nécessite aucune connexion à Google Fonts.</p>
        </Section>

        <Section title="Formulaire de soumission">
          <p>Le formulaire prépare un courriel dans votre application de messagerie. Les réponses saisies ne sont ni enregistrées dans une base de données du site ni transmises par celui-ci à l’entreprise. Aucun fichier n’est joint automatiquement : vous devez joindre vos photos ou vos plans et envoyer vous-même le courriel.</p>
          <p>Si vous envoyez ce courriel, votre nom, votre téléphone, votre courriel, votre ville et les détails du projet servent à traiter votre demande, vous contacter et préparer votre soumission. Les photos et plans que vous choisissez de joindre servent à comprendre votre projet. N’y incluez pas de renseignements sensibles inutiles.</p>
          <p>La messagerie fait intervenir votre fournisseur de courriel et celui de l’entreprise (adresse Hotmail / Microsoft). Ces services peuvent traiter des renseignements à l’extérieur du Québec. Pour connaître les modalités de Microsoft, consultez sa <a className={ext} href="https://privacy.microsoft.com/fr-ca/privacystatement" target="_blank" rel="noopener noreferrer">déclaration de confidentialité</a>.</p>
          <p>Vous pouvez demander à la direction les renseignements détenus, les catégories de personnes qui y ont accès et la durée de conservation applicable à votre demande. Le refus de communiquer les informations nécessaires peut empêcher la préparation de la soumission.</p>
        </Section>

        <Section title="Données techniques de navigation">
          <p>L’accès au site nécessite des échanges techniques avec son service d’hébergement, notamment votre adresse IP et les informations de requête nécessaires à l’affichage des pages. L’absence de témoins de suivi ne signifie pas l’absence de ces échanges. Pour toute question sur leur traitement ou leur conservation, contactez la direction aux coordonnées ci-dessous.</p>
        </Section>

        <Section title="Contrôler ou supprimer les témoins">
          <p>Vous pouvez à tout moment supprimer les témoins et les données de site dans les réglages de votre navigateur, ou les bloquer. Retirer votre consentement à la carte se fait avec le bouton ci-dessus ou le lien « Préférences de la carte » au bas de chaque page. Les témoins déjà déposés par Google se suppriment depuis votre navigateur.</p>
        </Section>

        <Section title="Vos droits">
          <p>Selon les conditions prévues par la Loi sur la protection des renseignements personnels dans le secteur privé du Québec, modifiée par la Loi 25, vous pouvez demander l’accès à vos renseignements personnels, leur rectification, retirer votre consentement et, dans les cas prévus, obtenir leur communication dans un format technologique structuré et couramment utilisé (portabilité). Vous pouvez également adresser une plainte à la direction ou à la Commission d’accès à l’information du Québec.</p>
          <p>Le retrait de votre choix pour la carte empêche son chargement ultérieur sur ce site; il n’efface pas les renseignements déjà reçus par Google. Le retrait d’un consentement peut limiter un service nécessitant ces renseignements et n’écarte pas les obligations légales de conservation applicables.</p>
          <p className="text-sm">Contexte : <a className={ext} href="https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25" target="_blank" rel="noopener noreferrer">Commission d’accès à l’information du Québec – principaux changements de la Loi 25</a>.</p>
        </Section>

        <Section title="Responsable de la protection des renseignements personnels">
          <p>Cette fonction relève de la personne ayant la plus haute autorité au sein de l’entreprise, sauf délégation écrite, conformément à la loi. Vous pouvez adresser votre demande à la direction aux coordonnées suivantes :</p>
          <p>Pour toute question ou demande liée à cette politique :</p>
          <address className="not-italic">
            Armoire Belle-Vue Ébénisterie inc.<br />
            381 rue Principale, Québec, G0V 1G0<br />
            Téléphone : <a className={ext} href="tel:+14186721613">(418) 672-1613</a><br />
            Courriel : <a className={ext} href="mailto:armoirebelle-vue@hotmail.ca">armoirebelle-vue@hotmail.ca</a>
          </address>
        </Section>

        <Section title="Modifications">
          <p>Les changements à cette politique seront signalés sur cette page avec leur date. Si un nouveau service facultatif nécessitant votre consentement est ajouté ou si ses finalités changent, il ne sera pas activé sans vous informer et recueillir le choix requis.</p>
        </Section>
      </main>
    </PageWrapper>
  );
}
