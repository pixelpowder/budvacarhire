'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaToSkadarDay() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSkadar.title')}
      subtitle={t('blogSkadar.subtitle')}
      description={t('blogSkadar.description')}
      image="/img/blog-budva-to-skadar-day.webp"
    >
      <h2>{t('blogSkadar.h2Why')}</h2>
      <p>{t('blogSkadar.whyP1')}</p>
      <p>{t('blogSkadar.whyP2')}</p>

      <h2>{t('blogSkadar.h2Route')}</h2>
      <p>{t('blogSkadar.routeP')}</p>

      <img src="/img/blog-budva-to-skadar-day-inline.webp" alt={t('blogSkadar.altInline')} loading="lazy" />

      <h2>{t('blogSkadar.h2Rijeka')}</h2>
      <p>{t('blogSkadar.rijekaP')}</p>

      <h2>{t('blogSkadar.h2Lake')}</h2>
      <p>{t('blogSkadar.lakeP')}</p>

      <h2>{t('blogSkadar.h2Boat')}</h2>
      <p>{t('blogSkadar.boatP')} <a href={localePath('/blog/budva-rainy-day')}>{t('blogSkadar.boatLink')}</a>.</p>

      <h2>{t('blogSkadar.h2Wine')}</h2>
      <p>{t('blogSkadar.wineP')}</p>

      <h2>{t('blogSkadar.h2Itinerary')}</h2>
      <ul>
        <li><strong>{t('blogSkadar.itinMorningLabel')}</strong> {t('blogSkadar.itinMorningVal')}</li>
        <li><strong>{t('blogSkadar.itinMiddayLabel')}</strong> {t('blogSkadar.itinMiddayVal')}</li>
        <li><strong>{t('blogSkadar.itinAfternoonLabel')}</strong> {t('blogSkadar.itinAfternoonVal')}</li>
        <li><strong>{t('blogSkadar.itinReturnLabel')}</strong> {t('blogSkadar.itinReturnVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSkadar.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceDistance')}</strong>
            {t('blogSkadar.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceDrive')}</strong>
            {t('blogSkadar.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceBest')}</strong>
            {t('blogSkadar.glanceBestVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSkadar.glanceBoat')}</strong>
            {t('blogSkadar.glanceBoatVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
