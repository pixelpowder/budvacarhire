import { t, buildAlternates, OG_LOCALE } from './metadata';
import HomeClient from '@/src/HomeClient';

const SITE_URL = 'https://www.budvacarhire.com';
const SITE_NAME = 'Budva Car Hire';

export async function generateMetadata() {
  const title = 'Budva Car Hire — Budva Riviera & Tivat Airport Pickup';
  const description = t('en', 'home.seoDesc');
  return {
    title,
    description,
    alternates: buildAlternates(''),
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: SITE_NAME,
      type: 'website',
      locale: OG_LOCALE.en,
      alternateLocale: ['de_DE', 'fr_FR', 'it_IT', 'ru_RU', 'sr_ME'],
      images: [{ url: `${SITE_URL}/hero-bg.jpg`, width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}

export default function HomePage() {
  return <HomeClient />;
}
