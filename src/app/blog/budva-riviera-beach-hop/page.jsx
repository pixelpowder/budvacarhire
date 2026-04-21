import { t, buildAlternates } from '../../metadata';
import BudvaRivieraBeachHop from '@/src/components/pages/blog/BudvaRivieraBeachHop';

export async function generateMetadata() {
  const title = t('en', 'blogBeaches.title') + ' | Budva Car Hire';
  const description = t('en', 'blogBeaches.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/budva-riviera-beach-hop'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BudvaRivieraBeachHopRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogBeaches.title'),
    "description": t('en', 'blogBeaches.description'),
    "image": "https://www.budvacarhire.com/img/blog-budva-riviera-beach-hop.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRivieraBeachHop />
    </>
  );
}
