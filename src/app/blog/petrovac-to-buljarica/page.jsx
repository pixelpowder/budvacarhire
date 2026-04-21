import { t, buildAlternates } from '../../metadata';
import PetrovacToBuljarica from '@/src/components/pages/blog/PetrovacToBuljarica';

export async function generateMetadata() {
  const title = t('en', 'blogPetrovac.title') + ' | Budva Car Hire';
  const description = t('en', 'blogPetrovac.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/petrovac-to-buljarica'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PetrovacToBuljaricaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogPetrovac.title'),
    "description": t('en', 'blogPetrovac.description'),
    "image": "https://www.budvacarhire.com/img/blog-petrovac-to-buljarica.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PetrovacToBuljarica />
    </>
  );
}
