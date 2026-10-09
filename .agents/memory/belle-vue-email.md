---
name: Envoi des soumissions Belle-Vue
description: Exigences du propriétaire pour l’hébergement et les courriels transactionnels.
---

Le site sera publié sur Vercel. Le propriétaire y configurera `RESEND_API_KEY`, `RESEND_FROM_EMAIL` et `RECIPIENT_EMAIL`. Toujours utiliser `bonjour@kua.quebec` comme adresse d’envoi.

**Why:** Le propriétaire a demandé Resend avec cet expéditeur imposé, plutôt qu’une intégration liée uniquement à l’environnement Replit.

**How to apply:** Garder les secrets côté serveur et les instructions de publication compatibles Vercel. Ne pas remplacer le destinataire réel par l’adresse donnée en exemple. Préserver deux courriels aux couleurs Belle-Vue : prise en charge avec récapitulatif au client, et récapitulatif au propriétaire.

Resend n’accepte pas les pièces jointes dans son endpoint batch. L’envoi de plusieurs courriels avec photos requiert donc des requêtes individuelles avec des clés d’idempotence distinctes : si la confirmation échoue après l’avis au propriétaire, le réessai doit éviter de renvoyer cet avis.

**Why:** Un échec partiel est possible alors que les deux courriels d’une demande doivent être confirmés avant d’annoncer sa prise en charge.

**How to apply:** Garder le batch pour les demandes sans photos et vérifier séparément l’accusé de réception des deux courriels si des images sont jointes.
