import { t, buildAlternates } from '../../metadata';
import BudvaToSkadarDay from '@/src/components/pages/blog/BudvaToSkadarDay';

export async function generateMetadata() {
  const title = t('en', 'blogSkadar.title') + ' | Budva Car Hire';
  const description = t('en', 'blogSkadar.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/budva-to-skadar-day'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BudvaToSkadarDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSkadar.title'),
    "description": t('en', 'blogSkadar.description'),
    "image": "https://www.budvacarhire.com/img/blog-budva-to-skadar-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaToSkadarDay />
    </>
  );
}
