'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaSunriseSunset() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogSunrides.title')}
      subtitle={t('blogSunrides.subtitle')}
      description={t('blogSunrides.description')}
      image="/img/blog-budva-sunrise-sunset.webp"
    >
      <h2>{t('blogSunrides.h2Why')}</h2>
      <p>{t('blogSunrides.whyP1')}</p>
      <p>{t('blogSunrides.whyP2')}</p>

      <h2>{t('blogSunrides.h2Sunrise')}</h2>
      <h3>{t('blogSunrides.h3Mogren')}</h3>
      <p>{t('blogSunrides.mogrenP')}</p>
      <h3>{t('blogSunrides.h3Becici')}</h3>
      <p>{t('blogSunrides.beciciP')}</p>

      <img src="/img/blog-budva-sunrise-sunset-inline.webp" alt={t('blogSunrides.altInline')} loading="lazy" />

      <h2>{t('blogSunrides.h2Sunset')}</h2>
      <h3>{t('blogSunrides.h3Jaz')}</h3>
      <p>{t('blogSunrides.jazP')}</p>
      <h3>{t('blogSunrides.h3Fort')}</h3>
      <p>{t('blogSunrides.fortP')}</p>
      <h3>{t('blogSunrides.h3Stefan')}</h3>
      <p>{t('blogSunrides.stefanP')} <a href={localePath('/blog/budva-old-town-walking')}>{t('blogSunrides.stefanLink')}</a>.</p>

      <h2>{t('blogSunrides.h2Gear')}</h2>
      <ul>
        <li><strong>{t('blogSunrides.gearCameraLabel')}</strong> {t('blogSunrides.gearCameraVal')}</li>
        <li><strong>{t('blogSunrides.gearTripodLabel')}</strong> {t('blogSunrides.gearTripodVal')}</li>
        <li><strong>{t('blogSunrides.gearLayerLabel')}</strong> {t('blogSunrides.gearLayerVal')}</li>
        <li><strong>{t('blogSunrides.gearCoffeeLabel')}</strong> {t('blogSunrides.gearCoffeeVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogSunrides.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogSunrides.glanceSunrise')}</strong>
            {t('blogSunrides.glanceSunriseVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSunrides.glanceSunset')}</strong>
            {t('blogSunrides.glanceSunsetVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSunrides.glanceBestMonth')}</strong>
            {t('blogSunrides.glanceBestMonthVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogSunrides.glanceGear')}</strong>
            {t('blogSunrides.glanceGearVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
