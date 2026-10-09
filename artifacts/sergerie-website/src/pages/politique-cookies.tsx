import { type ReactNode } from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';

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
          <p>Le site d’Armoire Belle-Vue prévoit une mesure des visites et de certaines interactions au moyen de l’outil d’analyse de son hébergeur, Replit, lorsque cette fonction est activée pour le site publié. Aucun outil publicitaire n’est ajouté par le site. Une carte Google Maps est affichée automatiquement sur les pages; ce service tiers peut recevoir des données techniques et utiliser des témoins, selon les modalités de Google.</p>
          <p>Un témoin est un petit fichier que votre navigateur peut conserver sur votre appareil. Le stockage de session est un mécanisme distinct qui permet de mémoriser temporairement une préférence. Cette politique explique ces technologies et vos choix sur notre site.</p>
        </Section>

        <Section title="Ce que nous stockons sur votre appareil">
          <p>Le site ne mémorise pas de préférence d’activation de la carte et n’ajoute pas de témoins de suivi ou de marketing propres au site. La carte intégrée peut toutefois permettre à Google de déposer ou de lire ses propres témoins. Leur contenu, leurs finalités et leur durée sont déterminés par Google.</p>
        </Section>

        <Section title="Carte Google Maps (service tiers)">
          <p>La carte sert à présenter l’emplacement de l’entreprise. Elle se charge automatiquement lorsque vous approchez de cette section, sans bouton d’activation préalable. Votre navigateur communique alors avec Google, qui reçoit notamment votre adresse IP et des informations sur votre appareil et votre navigateur, et peut déposer ou lire des témoins. Vos renseignements peuvent être traités à l’extérieur du Québec.</p>
          <p>Le site ne propose pas de contrôle pour désactiver cette carte. Les réglages de confidentialité de votre navigateur peuvent limiter les témoins ou bloquer du contenu tiers; bloquer uniquement les témoins n’empêche pas nécessairement les connexions à Google. Les liens et interactions qui vous conduisent sur un site de Google sont régis par sa politique.</p>
          <p>Pour en savoir plus : <a className={ext} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a> · <a className={ext} href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Utilisation des témoins par Google</a>.</p>
        </Section>

        <Section title="Polices de caractères">
          <p>Les polices de caractères sont hébergées avec le site. Leur affichage ne nécessite aucune connexion à Google Fonts.</p>
        </Section>

        <Section title="Mesure des visites et des interactions">
          <p>Lorsque l’analyse est activée pour le site publié, l’hébergeur peut mesurer les visites et les interactions suivantes : accès au formulaire de soumission, début du formulaire, étapes complétées, nombre de champs à corriger, transmission d’une demande confirmée par le service d’envoi, clics sur les coordonnées et Facebook, et ouverture des réponses de la FAQ. Ces mesures servent à comprendre l’utilisation du site et à améliorer le parcours.</p>
          <p>Les événements personnalisés contiennent uniquement des catégories prédéfinies, comme la page, la section, le numéro d’étape, le type de projet ou la nature des travaux. Ils ne contiennent pas votre nom, votre téléphone, votre adresse courriel, votre ville, la description de votre projet ni la référence de votre demande. Une confirmation du service d’envoi ne garantit pas la livraison dans la boîte de réception.</p>
          <p>La mesure des visites peut aussi faire intervenir des données techniques de navigation traitées par l’hébergeur, selon les outils effectivement activés. Pour en savoir plus : <a className={ext} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Vercel</a>. Les bloqueurs et réglages de confidentialité de votre navigateur peuvent limiter ces mesures.</p>
        </Section>

        <Section title="Formulaire de soumission">
          <p>Avec votre consentement, le formulaire transmet vos réponses au serveur d’hébergement, puis au service Resend pour envoyer un courriel à l’équipe et une confirmation avec récapitulatif à votre adresse. Les réponses ne sont pas enregistrées dans une base de données du site, mais les courriels et les données d’envoi sont traités par les services de messagerie. En cas d’erreur, vos réponses restent dans le formulaire tant que vous gardez cette page ouverte; elles ne sont pas sauvegardées après fermeture ou rechargement.</p>
          <p>Votre nom, votre téléphone, votre courriel, votre ville et les détails du projet servent à traiter votre demande, vous contacter et préparer votre soumission. Aucun fichier n’est téléversé par ce formulaire. Vous pouvez répondre au courriel de confirmation pour joindre des photos ou plans utiles à votre projet. N’y incluez pas de renseignements sensibles inutiles.</p>
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
          <p>Vous pouvez adresser vos demandes à la direction aux coordonnées ci-dessous. Le retrait d’un consentement peut limiter un service nécessitant ces renseignements et n’écarte pas les obligations légales de conservation applicables. Le site ne comporte pas de mécanisme de retrait pour le chargement automatique de Google Maps.</p>
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
