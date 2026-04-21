import { t, buildAlternates } from '../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.budvacarhire.com';

export async function generateMetadata() {
  const title = 'Our Budva Riviera Fleet — 7 Cars From Tivat Airport Pickup | Budva Car Hire';
  const descTranslated = t('en', 'fleetIndex.seoDesc');
  const description = descTranslated !== 'fleetIndex.seoDesc'
    ? descTranslated
    : 'Browse the Budva Car Hire fleet — seven cars sized for the 21 km of Riviera coast from Jaz to Petrovac, with specs, fuel use and who each car suits.';
  return {
    title,
    description,
    alternates: buildAlternates('cars'),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars`,
      type: 'website',
      images: [{ url: `${SITE}/img/fleet/renault-clio.jpg`, width: 1200, height: 800, alt: 'Budva Car Hire fleet' }],
    },
  };
}

export default function FleetIndexRoute() {
  return <FleetIndex />;
}
