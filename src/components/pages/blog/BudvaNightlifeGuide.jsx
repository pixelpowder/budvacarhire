'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaNightlifeGuide() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogNightlife.title')}
      subtitle={t('blogNightlife.subtitle')}
      description={t('blogNightlife.description')}
      image="/img/blog-budva-nightlife-guide.webp"
    >
      <h2>{t('blogNightlife.h2Scene')}</h2>
      <p>{t('blogNightlife.sceneP1')}</p>
      <p>{t('blogNightlife.sceneP2')}</p>

      <h2>{t('blogNightlife.h2Strip')}</h2>
      <p>{t('blogNightlife.stripP')}</p>

      <img src="/img/blog-budva-nightlife-guide-inline.webp" alt={t('blogNightlife.altInline')} loading="lazy" />

      <h2>{t('blogNightlife.h2TopHill')}</h2>
      <p>{t('blogNightlife.topHillP')}</p>

      <h2>{t('blogNightlife.h2OldTown')}</h2>
      <p>{t('blogNightlife.oldTownP')}</p>

      <h2>{t('blogNightlife.h2Slovenska')}</h2>
      <p>{t('blogNightlife.slovenskaP')} <a href={localePath('/blog/budva-gastro-scene')}>{t('blogNightlife.slovenskaLink')}</a>.</p>

      <h2>{t('blogNightlife.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogNightlife.tipParkLabel')}</strong> {t('blogNightlife.tipParkVal')}</li>
        <li><strong>{t('blogNightlife.tipDressLabel')}</strong> {t('blogNightlife.tipDressVal')}</li>
        <li><strong>{t('blogNightlife.tipCashLabel')}</strong> {t('blogNightlife.tipCashVal')}</li>
        <li><strong>{t('blogNightlife.tipPeakLabel')}</strong> {t('blogNightlife.tipPeakVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogNightlife.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogNightlife.glancePeak')}</strong>
            {t('blogNightlife.glancePeakVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNightlife.glanceVenue')}</strong>
            {t('blogNightlife.glanceVenueVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNightlife.glanceSeason')}</strong>
            {t('blogNightlife.glanceSeasonVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogNightlife.glanceDrink')}</strong>
            {t('blogNightlife.glanceDrinkVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
