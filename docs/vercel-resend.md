# Mise en ligne Belle-Vue sur Vercel et Resend

## Configuration Vercel

Importer **le dépôt complet dans un seul projet Vercel**, avec **Root Directory à la racine du dépôt** (laisser vide / `.`), et non `artifacts/belle-vue-website`. Le fichier `vercel.json` à la racine construit le site, sert les pages pré-rendues et déploie la fonction Node `/api/quote`. Le serveur Express et la base de données Replit ne sont pas nécessaires à cet envoi sur Vercel.

Si Vercel propose plusieurs applications détectées, ne pas importer chaque application séparément : `belle-vue-website` est le site public, `api-server` sert à la prévisualisation Replit, et `mockup-sandbox` contient les maquettes de conception. Ces deux derniers outils ne nécessitent pas de projet Vercel.

Ne pas sélectionner le preset SPA Vite avec un fallback global vers `index.html` : `/soumission` et `/politique-cookies` ont chacun leur HTML et leurs métadonnées. Le routage configuré préserve aussi `robots.txt`, `sitemap.xml`, les images et les assets. Les URL inconnues renvoient la page 404.

Ajouter ces variables **côté serveur** dans Vercel → Project Settings → Environment Variables :

| Variable | Valeur |
| --- | --- |
| `RESEND_API_KEY` | Clé du compte Resend autorisée à envoyer depuis `kua.quebec` |
| `RESEND_FROM_EMAIL` | `bonjour@kua.quebec` (adresse imposée par le propriétaire) |
| `RECIPIENT_EMAIL` | L’adresse réelle du propriétaire qui doit recevoir les soumissions |

Ne pas ajouter de préfixe `VITE_` : la clé ne doit jamais apparaître dans le navigateur. Aucune clé n’est incluse dans ce dépôt. Une adresse destinataire manquante n’est pas remplacée par un exemple.

Configurer les variables pour les environnements souhaités, puis déployer/re-déployer après leur ajout. Pour les essais Preview, utiliser une adresse destinataire de test autorisée et ne pas envoyer de faux projets à un client réel.

Relier `armoirebellevue.com` au projet Vercel, vérifier HTTPS et utiliser la version sans `www` comme domaine principal. Configurer la redirection de `www` vers le domaine principal dans Vercel si `www` est également raccordé. Le logo des courriels utilise `https://armoirebellevue.com/images/logo-armoire-belle-vue-ameublement.png` : cette adresse doit être publique après la mise en ligne.

## Configuration Resend

1. Vérifier **`kua.quebec`** dans Resend → Domains, avec les enregistrements DNS demandés par Resend (SPF/DKIM; DMARC recommandé).
2. Créer une clé d’envoi limitée au domaine approprié sur https://resend.com/api-keys.
3. Mettre cette clé uniquement dans `RESEND_API_KEY` dans Vercel.
4. Vérifier que `RECIPIENT_EMAIL` est une boîte surveillée. Les réponses du client vont à cette adresse; les réponses du propriétaire à l’avis reçu vont au courriel du client.

Le nom affiché est **Armoire Belle-Vue**, mais les deux messages partent toujours de **bonjour@kua.quebec**. Aucun changement des coordonnées publiques du site n’est nécessaire. La boîte `bonjour@kua.quebec` n’a pas à recevoir ces réponses.

## Deux courriels

- **Avis au propriétaire** : coordonnées, projet, construction neuve/rénovation, description, budget, échéancier, ville, consentement et référence. Bouton « Répondre au client ».
- **Confirmation au client** : confirmation de prise en charge, même récapitulatif et référence, invitation à répondre pour ajouter des précisions, photos ou plans. Aucun délai de réponse ni montant n’est promis.

Templates : `lib/quote-mail/src/templates.ts`. HTML compatible courriel (tableaux, styles inline, logo sur fond noir, accent rouge `#D71920`) et version texte. L’envoi utilise l’API REST Resend, sans connecteur Replit à transporter vers Vercel.

## Fiabilité et confidentialité

- POST JSON uniquement, schéma strict, consentement obligatoire, tailles et choix contrôlés côté serveur.
- Champ piège et contrôle d’origine. **Ces protections ne remplacent pas un contrôle anti-bot distribué.**
- Limite de cinq tentatives/minute/IP par processus; cette limite est **locale**, pas partagée entre instances serverless.
- Avant ouverture publique, ajouter dans **Vercel Firewall** une règle distribuée de limitation pour `POST /api/quote` (par exemple cinq demandes/minute/IP), et ajuster selon les besoins. Cela protège contre les abus envoyant des confirmations à des adresses tierces.
- Les deux courriels sont envoyés dans un batch avec une clé d’idempotence. Les tentatives identiques réutilisent le même identifiant tant que la page reste ouverte, évitant les doublons pendant la fenêtre Resend de 24 heures. Ne pas recharger la page pour réessayer après une erreur.
- Un état de réussite ne s’affiche que si Resend accuse réception des **deux** messages. Cet accusé ne garantit pas la livraison en boîte de réception; consulter les statuts/bounces dans Resend.
- En cas d’erreur, aucune réussite fictive ni ouverture `mailto` automatique. Le formulaire reste rempli et permet de réessayer. Les réponses ne sont pas persistées après rechargement/fermeture de la page.
- Aucune réponse, clé ou adresse client n’est écrite dans les logs applicatifs. Pas de stockage du projet dans une base de données. Les services d’hébergement/envoi et les boîtes des destinataires traitent cependant ces données.
- Pas de pièces jointes téléversées : répondre au courriel de confirmation pour joindre photos ou plans.

## Vérification après déploiement

Avec des adresses de test autorisées : envoyer une demande, constater les deux messages (logo/couleurs, toutes les réponses, Reply-To), tester une erreur et vérifier l’absence de doublon lors d’une nouvelle tentative identique. Vérifier les statuts d’envoi dans Resend; ne pas assimiler une réponse HTTP 200 à une livraison garantie.

Vérifier les pages SEO et soumettre `https://armoirebellevue.com/sitemap.xml` à Google Search Console une fois le domaine final en ligne.

## Documentation utilisée

- https://resend.com/docs/api-reference/emails/send-batch-emails
- https://resend.com/docs/dashboard/emails/idempotency-keys
- https://resend.com/docs/dashboard/domains/introduction
- https://vercel.com/docs/functions/runtimes/node-js
