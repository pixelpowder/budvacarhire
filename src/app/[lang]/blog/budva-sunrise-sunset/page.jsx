import { t, buildAlternates } from '../../../metadata';
import BudvaSunriseSunset from '@/src/components/pages/blog/BudvaSunriseSunset';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSunrides.title') + ' | Budva Car Hire',
    description: t(lang, 'blogSunrides.description'),
    alternates: buildAlternates('blog/budva-sunrise-sunset'),
  };
}

export default function LangBudvaSunriseSunsetRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSunrides.title'),
    "description": t('en', 'blogSunrides.description'),
    "image": "https://www.budvacarhire.com/img/blog-budva-sunrise-sunset.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Hire", "url": "https://www.budvacarhire.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaSunriseSunset />
    </>
  );
}
