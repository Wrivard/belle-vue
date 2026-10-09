import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { createQuoteEmails } from '../src/templates';

const root = path.resolve(import.meta.dirname, '../../..');
const logo = await readFile(path.join(root, 'artifacts/belle-vue-website/public/images/logo-armoire-belle-vue-ameublement.png'));
const messages = createQuoteEmails({
  submissionId: '54a9dc56-16e7-47ed-9361-43ca5a8bf26c',
  projectType: 'Cuisine sur mesure', workType: 'Rénovation',
  details: 'Réaménager notre cuisine avec un îlot convivial, des tiroirs accessibles et du rangement adapté à notre quotidien.\nFinition claire et comptoir facile d’entretien.',
  budget: '20 000 $ à 40 000 $', timeline: 'Dans 3 à 6 mois',
  name: 'Client Exemple', phone: '(418) 555-0100', email: 'client@example.com',
  city: 'Saguenay', consent: true, website: '',
}, 'bonjour@kua.quebec', 'owner@example.com', 'BV-EXEMPLE');
const directory = path.join(root, 'exports/resend');
await mkdir(directory, { recursive: true });
for (const [index, filename] of ['avis-proprietaire.html', 'confirmation-client.html'].entries()) {
  const selfContained = messages[index].html.replace(
    'https://armoirebellevue.com/images/logo-armoire-belle-vue-ameublement.png',
    `data:image/png;base64,${logo.toString('base64')}`,
  );
  await writeFile(path.join(directory, filename), selfContained);
  process.stdout.write(`Preview: exports/resend/${filename}\n`);
}
