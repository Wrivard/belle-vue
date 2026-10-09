import { type ReactNode } from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { CookieDeclaration } from '@/components/layout/cookie-declaration';

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
  return (
    <PageWrapper>
      <article className="container mx-auto px-6 max-w-[800px] pt-36 pb-20" data-testid="page-politique-cookies">
        <h1 className="text-4xl font-bold mb-3">Politique relative aux témoins (cookies)</h1>
        <p className="text-sm text-[#171717]/60 mb-10">Dernière mise à jour : 9 octobre 2026</p>

        <Section title="En bref">
          <p>Le site d’Armoire Belle-Vue utilise Cookiebot pour recueillir vos choix relatifs aux témoins et Google Tag Manager pour gérer les balises configurées pour le site publié. Ces balises peuvent servir à mesurer les visites ou à des fins publicitaires, selon leur configuration et vos choix. Une carte Google Maps est intégrée aux pages; ce service tiers peut recevoir des données techniques et utiliser des témoins, selon les modalités de Google et les règles de consentement applicables.</p>
          <p>Un témoin est un petit fichier que votre navigateur peut conserver sur votre appareil. Le stockage de session est un mécanisme distinct qui permet de mémoriser temporairement une préférence. Cette politique explique ces technologies et vos choix sur notre site.</p>
        </Section>

        <Section title="Ce que nous stockons sur votre appareil">
          <p>Cookiebot mémorise vos choix de consentement à l’aide de témoins nécessaires. D’autres témoins peuvent être utilisés par les services tiers et les balises configurées dans Google Tag Manager. La déclaration ci-dessous précise les témoins détectés, leurs finalités et leurs durées. Elle dépend de l’analyse du site et de la configuration effectuées dans Cookiebot.</p>
        </Section>

        <Section title="Vos préférences et déclaration des témoins">
          <p>Sur le site publié, vous pouvez accepter, refuser ou personnaliser les catégories proposées par Cookiebot, puis revenir ici pour modifier vos choix.</p>
          <CookieDeclaration />
        </Section>

        <Section title="Carte Google Maps (service tiers)">
          <p>La carte sert à présenter l’emplacement de l’entreprise. Elle est intégrée automatiquement lorsque vous approchez de cette section. Sur le site publié, Cookiebot peut en bloquer le chargement selon la classification de ce service et vos choix. Lorsqu’elle se charge, votre navigateur communique avec Google, qui reçoit notamment votre adresse IP et des informations sur votre appareil et peut déposer ou lire des témoins. Vos renseignements peuvent être traités à l’extérieur du Québec.</p>
          <p>Les réglages de confidentialité de votre navigateur peuvent aussi limiter les témoins ou bloquer du contenu tiers; bloquer uniquement les témoins n’empêche pas nécessairement les connexions à Google. Les liens et interactions qui vous conduisent sur un site de Google sont régis par sa politique.</p>
          <p>Pour en savoir plus : <a className={ext} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a> · <a className={ext} href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Utilisation des témoins par Google</a>.</p>
        </Section>

        <Section title="Polices de caractères">
          <p>Les polices de caractères sont hébergées avec le site. Leur affichage ne nécessite aucune connexion à Google Fonts.</p>
        </Section>

        <Section title="Mesure des visites et des interactions">
          <p>Le consentement Google est défini comme refusé par défaut pour les statistiques et la publicité, puis mis à jour par Cookiebot selon vos choix. Google Tag Manager n’est pas en lui-même un outil de mesure : les données transmises dépendent des balises configurées dans le conteneur et de leurs contrôles de consentement. Certaines balises Google peuvent transmettre des signaux sans témoins même lorsque leur stockage est refusé; les balises doivent être configurées pour exiger un consentement supplémentaire si ces transmissions doivent aussi être bloquées. Cookiebot et Google Tag Manager sont désactivés dans les aperçus Replit et en développement local.</p>
          <p>Lorsque l’analyse est activée pour le site publié, l’hébergeur peut mesurer les visites et les interactions suivantes : accès au formulaire de soumission, début du formulaire, étapes complétées, nombre de champs à corriger, transmission d’une demande confirmée par le service d’envoi, clics sur les coordonnées et Facebook, et ouverture des réponses de la FAQ. Ces mesures servent à comprendre l’utilisation du site et à améliorer le parcours.</p>
          <p>Les événements personnalisés contiennent uniquement des catégories prédéfinies, comme la page, la section, le numéro d’étape, le type de projet ou la nature des travaux. Ils ne contiennent pas votre nom, votre téléphone, votre adresse courriel, votre ville, la description de votre projet ni la référence de votre demande. Une confirmation du service d’envoi ne garantit pas la livraison dans la boîte de réception.</p>
          <p>La mesure des visites peut aussi faire intervenir des données techniques de navigation traitées par l’hébergeur, selon les outils effectivement activés. Pour en savoir plus : <a className={ext} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Vercel</a>. Les bloqueurs et réglages de confidentialité de votre navigateur peuvent limiter ces mesures.</p>
        </Section>

        <Section title="Formulaire de soumission">
          <p>Avec votre consentement, le formulaire transmet vos réponses et, si vous en ajoutez, jusqu’à trois photos compressées au serveur d’hébergement, puis au service Resend. Les photos sont jointes uniquement au courriel destiné à notre équipe; la confirmation à votre adresse contient un récapitulatif sans les images. Les réponses et les photos ne sont pas enregistrées dans une base de données du site, mais les courriels et leurs pièces jointes sont traités et conservés selon les pratiques des services de messagerie. En cas d’erreur, vos réponses et photos restent dans le formulaire tant que vous gardez cette page ouverte; elles ne sont pas sauvegardées après fermeture ou rechargement.</p>
          <p>Votre nom, votre téléphone, votre courriel, votre ville, les détails du projet et les photos fournies servent à traiter votre demande, vous contacter et préparer votre soumission. Vous pouvez répondre au courriel de confirmation pour joindre d’autres photos ou des plans utiles à votre projet. N’y incluez pas de renseignements sensibles inutiles.</p>
          <p>Le traitement fait intervenir Vercel pour l’hébergement de production, Resend pour l’envoi et les fournisseurs de messagerie des destinataires. Ces services peuvent traiter des renseignements à l’extérieur du Québec. Consultez les politiques de <a className={ext} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel</a> et de <a className={ext} href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Resend</a>. Les limites d’envoi peuvent utiliser temporairement des données techniques de connexion pour réduire les abus.</p>
          <p>Vous pouvez demander à la direction les renseignements détenus, les catégories de personnes qui y ont accès et la durée de conservation applicable à votre demande. Le refus de communiquer les informations nécessaires peut empêcher la préparation de la soumission.</p>
        </Section>

        <Section title="Données techniques de navigation">
          <p>L’accès au site nécessite des échanges techniques avec son service d’hébergement, notamment votre adresse IP et les informations de requête nécessaires à l’affichage des pages. L’absence de témoins de suivi ne signifie pas l’absence de ces échanges. Pour toute question sur leur traitement ou leur conservation, contactez la direction aux coordonnées ci-dessous.</p>
        </Section>

        <Section title="Contrôler ou supprimer les témoins">
          <p>Vous pouvez supprimer les témoins et les données de site dans les réglages de votre navigateur, ou bloquer les témoins tiers. Ces réglages peuvent affecter l’affichage ou le fonctionnement de la carte. La suppression des témoins n’efface pas les renseignements déjà reçus par Google.</p>
        </Section>

        <Section title="Vos droits">
          <p>Selon les conditions prévues par la Loi sur la protection des renseignements personnels dans le secteur privé du Québec, modifiée par la Loi 25, vous pouvez demander l’accès à vos renseignements personnels, leur rectification, retirer votre consentement et, dans les cas prévus, obtenir leur communication dans un format technologique structuré et couramment utilisé (portabilité). Vous pouvez également adresser une plainte à la direction ou à la Commission d’accès à l’information du Québec.</p>
          <p>Vous pouvez adresser vos demandes à la direction aux coordonnées ci-dessous. Le retrait d’un consentement peut limiter un service nécessitant ces renseignements et n’écarte pas les obligations légales de conservation applicables. Les choix relatifs aux témoins peuvent être modifiés dans Cookiebot; ils ne suppriment pas les renseignements déjà transmis à un service tiers.</p>
          <p className="text-sm">Contexte : <a className={ext} href="https://www.cai.gouv.qc.ca/protection-renseignements-personnels/sujets-et-domaines-dinteret/principaux-changements-loi-25" target="_blank" rel="noopener noreferrer">Commission d’accès à l’information du Québec – principaux changements de la Loi 25</a>.</p>
        </Section>

        <Section title="Responsable de la protection des renseignements personnels">
          <p>Cette fonction relève de la personne ayant la plus haute autorité au sein de l’entreprise, sauf délégation écrite, conformément à la loi. Vous pouvez adresser votre demande à la direction aux coordonnées suivantes :</p>
          <p>Pour toute question ou demande liée à cette politique :</p>
          <address className="not-italic">
            Armoire Belle-Vue<br />
            381 rue Principale, Saint-Charles-de-Bourget, QC, G0V 1G0<br />
            Téléphone : <a className={ext} href="tel:+14186721613">(418) 672-1613</a><br />
            Courriel : <a className={ext} href="mailto:armoirebelle-vue@hotmail.ca">armoirebelle-vue@hotmail.ca</a>
          </address>
        </Section>

        <Section title="Modifications">
          <p>Les changements à cette politique seront signalés sur cette page avec leur date. Révision du 9 octobre 2026 : préparation de l’envoi des demandes par Resend et de l’hébergement de production sur Vercel. La carte Google Maps reste affichée automatiquement, sans préférence d’activation enregistrée.</p>
        </Section>
      </article>
    </PageWrapper>
  );
}
