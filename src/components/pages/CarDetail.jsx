'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};

import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Droplet, Package,
} from 'lucide-react';

// Per-car inline Budva-Riviera photo. Chosen to fit each car's character.
const INLINE_PHOTOS = {
  'peugeot-208':   { src: '/img/fleet-inline/road-mountains.jpg', alt: 'Road curving through Montenegro mountains', caption: 'Sveti Stefan hairpins — the 208 feels most at home on the sharpest corners of the Budva Riviera.' },
  'renault-clio':  { src: '/img/fleet-inline/coastal-road.jpg',   alt: 'Montenegro Adriatic coast road',            caption: 'The coast road south of Budva — exactly the route the default Riviera rental was built for.' },
  'fiat-500':      { src: '/img/fleet-inline/seashore-hills.jpg', alt: 'Coastal road on the seashore near hills',   caption: 'The Mogren-to-Rafailovići coastline — short hops between riviera viewpoints is where the 500 belongs.' },
  'peugeot-308':   { src: '/img/fleet-inline/mountain-highway.jpg', alt: 'Montenegro E80 highway',                   caption: 'The E80 south toward Bar — the 308\u2019s natural habitat: cruise set, boot full, diesel humming.' },
  'kia-stonic':    { src: '/img/fleet-inline/rocky-road.jpg',     alt: 'Empty asphalt road between rocks and shrubs', caption: 'The spur from Virpazar toward the Crmnica wine villages — Stonic ride height earns its keep here.' },
  'vw-golf':       { src: '/img/fleet-inline/forest-road.jpg',    alt: 'Scenic mountain road with tall trees',      caption: 'Tree-lined inland stretches above the Riviera — DSG plus diesel takes the thinking out of gear changes.' },
  'toyota-yaris':  { src: '/img/fleet-inline/aerial-mountains.jpg', alt: 'Aerial view of Montenegro mountains',      caption: 'A fortnight loop of Budva Riviera at Yaris Hybrid economy costs under €80 in fuel — quietly remarkable.' },
  _default:        { src: '/img/fleet-inline/sunset-montenegro.jpg', alt: 'Montenegro mountain landscape at sunset', caption: 'Budva Riviera threads coast, olive grove and viewpoint in a single day.' },
};

// 3 related image-link cards at the end of each detail page, local Budva destinations + blog.
const RELATED = {
  'peugeot-208': [
    { href: '/budva',                                 img: '/img/budva-old-town.webp',                          title: 'Budva' },
    { href: '/blog/sveti-stefan-viewpoints',          img: '/img/blog-sveti-stefan-viewpoints.webp',            title: 'Sveti Stefan viewpoints' },
    { href: '/blog/budva-riviera-beach-hop',          img: '/img/blog-budva-riviera-beach-hop.webp',            title: 'Beach-hop the Riviera' },
  ],
  'renault-clio': [
    { href: '/budva',                                 img: '/img/budva-old-town.webp',                          title: 'Budva' },
    { href: '/blog/budva-riviera-beach-hop',          img: '/img/blog-budva-riviera-beach-hop.webp',            title: 'Beach-hop the Riviera' },
    { href: '/tivat-airport',                         img: '/img/tivat-airport.webp',                           title: 'Tivat Airport' },
  ],
  'fiat-500': [
    { href: '/budva',                                 img: '/img/budva-old-town.webp',                          title: 'Budva Old Town' },
    { href: '/blog/budva-old-town-walking',           img: '/img/blog-budva-old-town-walking.webp',             title: 'Budva Old Town walking' },
    { href: '/blog/budva-sunrise-sunset',             img: '/img/blog-budva-sunrise-sunset.webp',               title: 'Budva sunrise & sunset' },
  ],
  'peugeot-308': [
    { href: '/dubrovnik-airport',                     img: '/img/dubrovnik-nearby.webp',                        title: 'Dubrovnik Airport' },
    { href: '/kotor',                                  img: '/img/kotor-nearby.webp',                            title: 'Kotor' },
    { href: '/blog/petrovac-to-buljarica',            img: '/img/blog-petrovac-to-buljarica.webp',              title: 'Petrovac to Buljarica' },
  ],
  'kia-stonic': [
    { href: '/blog/budva-to-skadar-day',              img: '/img/blog-budva-to-skadar-day.webp',                title: 'Budva to Skadar day trip' },
    { href: '/blog/petrovac-to-buljarica',            img: '/img/blog-petrovac-to-buljarica.webp',              title: 'Petrovac to Buljarica' },
    { href: '/perast',                                img: '/img/perast-village.webp',                          title: 'Perast' },
  ],
  'vw-golf': [
    { href: '/dubrovnik-airport',                     img: '/img/dubrovnik-nearby.webp',                        title: 'Dubrovnik Airport' },
    { href: '/blog/budva-to-skadar-day',              img: '/img/blog-budva-to-skadar-day.webp',                title: 'Budva to Skadar day trip' },
    { href: '/kotor',                                  img: '/img/kotor-nearby.webp',                            title: 'Kotor' },
  ],
  'toyota-yaris': [
    { href: '/budva',                                 img: '/img/budva-old-town.webp',                          title: 'Budva' },
    { href: '/blog/budva-riviera-beach-hop',          img: '/img/blog-budva-riviera-beach-hop.webp',            title: 'Beach-hop the Riviera' },
    { href: '/blog/budva-rainy-day',                  img: '/img/blog-budva-rainy-day.webp',                    title: 'Budva on a rainy day' },
  ],
};

// One inline article link per car, paraIndex is which paragraph to search first.
const ARTICLE_LINKS = {
  'peugeot-208':   { paraIndex: 1, candidates: ['Sveti Stefan hairpin', 'hairpins', 'Pržno'],       href: '/blog/sveti-stefan-viewpoints' },
  'renault-clio':  { paraIndex: 3, candidates: ['Budva\u2013Kotor', 'Petrovac', 'riviera'],         href: '/blog/budva-riviera-beach-hop' },
  'fiat-500':      { paraIndex: 1, candidates: ['Mogren', 'Stari Grad', 'Old Town'],                 href: '/blog/budva-old-town-walking' },
  'peugeot-308':   { paraIndex: 3, candidates: ['Dubrovnik', 'cross-border', 'Debeli Brijeg'],      href: '/dubrovnik-airport' },
  'kia-stonic':    { paraIndex: 1, candidates: ['Skadar', 'Crmnica', 'Virpazar'],                   href: '/blog/budva-to-skadar-day' },
  'vw-golf':       { paraIndex: 1, candidates: ['Debeli Brijeg', 'Dubrovnik', 'Cetinje'],           href: '/dubrovnik-airport' },
  'toyota-yaris':  { paraIndex: 1, candidates: ['Bečići', 'Sveti Stefan', 'Budva'],                 href: '/blog/budva-riviera-beach-hop' },
};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),         value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),           value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),     value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),       value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),         value: mpg || details.consumption },
  ].filter(r => r.value);
  const detailRow = [];

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{tf('cars.overviewTitle', 'At a glance')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{tf('cars.whoForTitle', `Who is the ${car.name} for?`)}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{tf('cars.regionalTitle', 'Best regional use')}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{tf('cars.articleTitle', `The ${car.name} on Budva Riviera roads`)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Budva Riviera roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inline.alt} loading="lazy" />
                      <figcaption>{inline.caption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{tf('cars.featuresTitle', 'Inside the car')}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{card.title}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {tf('cars.checkAvailability', 'Check availability & live pricing')} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {tf('cars.nextBtn', `Next in fleet: ${next.name}`)} →
        </a>
      </div>
    </ContentPage>
  );
}
