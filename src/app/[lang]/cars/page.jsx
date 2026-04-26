import { t, buildAlternates, OG_LOCALE } from '../../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.budvacarhire.com';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const descKey = 'fleetIndex.seoDesc';
  const descTranslated = t(lang, descKey);
  const description = descTranslated !== descKey
    ? descTranslated
    : 'Browse the Budva Car Hire fleet, seven cars sized for the 21 km of Riviera coast from Jaz to Petrovac.';
  const titleTranslated = t(lang, 'fleetIndex.title');
  const baseTitle = titleTranslated !== 'fleetIndex.title' ? titleTranslated : 'Our Budva Riviera Fleet';
  const title = `${baseTitle} | Budva Car Hire`;
  return {
    title,
    description,
    alternates: buildAlternates('cars', lang),
    openGraph: {
      title,
      description,
      url: `${SITE}/${lang}/cars`,
      type: 'website',
      locale: OG_LOCALE[lang] || 'en_US',
      images: [{ url: `${SITE}/img/fleet/renault-clio.jpg`, width: 1200, height: 800, alt: baseTitle }],
    },
  };
}

export default function LangFleetIndexRoute() {
  return <FleetIndex />;
}
