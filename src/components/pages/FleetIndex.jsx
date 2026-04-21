'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { Users, Fuel, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function FleetIndex() {
  const { t, localePath } = useTranslation();

  const intro1 = t('fleetIndex.intro1',
    `Seven cars sized for the Budva Riviera — the 21 km stretch of coast that runs from Jaz Beach in the north to Petrovac in the south, with Sveti Stefan, Bečići and Rafailovići strung between. The fleet is picked around what renters here actually drive: a Fiat 500 for the tight lanes behind Mogren where the summer pedestrian zone squeezes everything wider than 1.7 m, a Peugeot 208 for the drivers who treat the Sveti Stefan hairpins as part of the holiday, a Renault Clio for the couple doing Jaz-to-Petrovac every day of the week, a Toyota Yaris Hybrid for the renter who wants a fortnight on half the fuel bill, a Kia Stonic for days that head inland to Skadar Lake or the Crmnica wineries, and VW Golf / Peugeot 308 pair for four-up trips that include the 80 km cross-border push to Dubrovnik.`);

  const intro2 = t('fleetIndex.intro2',
    `Two things matter more on the Budva Riviera than most arriving renters expect. First, Budva Old Town (Stari Grad) is fully pedestrianised — you cannot drive in. Park at the perimeter: the metered Slovenska street bays (€1–2/h in summer, free November to April), the Slovenska Plaža lot, or the covered TQ Plaza underground for peak-weekend overnight. Second, the coast road south — the M2 / E80 — is the spine of everything: Sveti Stefan is 12 km south, Petrovac 17 km, the Croatian border at Debeli Brijeg about 80 km / 90 min north. Size the car for the far end of your itinerary, not the first parking space.`);

  const intro3 = t('fleetIndex.intro3',
    `If you\u2019re not sure which car fits your week, two rules work for most Riviera-based trips. One, if your days will be spent shuttling between beaches, lounger-and-cool-bag loadouts matter more than camping kit — a Clio or Yaris handles this without drama and without a premium. Two, if Sveti Stefan viewpoints, the Lovćen switchback above Kotor or a Dubrovnik day trip via Debeli Brijeg are on the list, spend the extra for an auto mid-size — a 308 or Golf DSG changes the day entirely once the hairpins start stacking. All seven cars below cover the full coast; the difference is how you arrive at the end of it.`);

  return (
    <ContentPage
      title={t('fleetIndex.title', 'Our Budva Riviera Fleet')}
      subtitle={t('fleetIndex.subtitle', 'Seven cars picked for the 21 km of coast between Jaz and Petrovac — from a €26/day Peugeot 208 to a family-size 308 diesel auto.')}
      image="/img/fleet/renault-clio.jpg"
      heroPosition="center"
      description={t('fleetIndex.seoDesc', 'Browse the Budva Car Hire fleet — specs, fuel use, boot size, and what each car suits on Budva Riviera beaches and the M2 coastal road.')}
    >
      <p>{intro1}</p>
      <p>{intro2}</p>
      <p>{intro3}</p>

      <div className="fleet-index-grid">
        {config.cars.map((car) => {
          const tk = (sub, fallback) => {
            const val = t(`cars.${car.slug}.${sub}`);
            return val && val !== `cars.${car.slug}.${sub}` ? val : fallback;
          };
          const name = tk('name', car.name);
          const tagline = tk('tagline', car.tagline);
          const category = tk('category', car.category);
          const consumption = car.details?.consumption;

          return (
            <a
              key={car.slug}
              href={localePath(`/cars/${car.slug}`)}
              className="fleet-index-card"
            >
              <div className="fleet-index-card__img" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="fleet-index-card__tag">{category}</span>
              </div>
              <div className="fleet-index-card__body">
                <h3 className="fleet-index-card__name">{name}</h3>
                <p className="fleet-index-card__tagline">{tagline}</p>
                <div className="fleet-index-card__specs">
                  <span><Users size={14} /> {car.seats}</span>
                  <span><Settings size={14} /> {car.transmission.slice(0,4)}</span>
                  <span><Fuel size={14} /> {car.fuel}</span>
                  <span><Briefcase size={14} /> {car.luggage}</span>
                </div>
                {consumption && (
                  <div className="fleet-index-card__extra">
                    {consumption}
                  </div>
                )}
                <div className="fleet-index-card__footer">
                  <span className="fleet-index-card__arrow">
                    {t('cars.readGuide', 'Read guide')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
