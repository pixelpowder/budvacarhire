'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaRivieraBeachHop() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogBeaches.title')}
      subtitle={t('blogBeaches.subtitle')}
      description={t('blogBeaches.description')}
      image="/img/blog-budva-riviera-beach-hop.webp"
    >
      <h2>{t('blogBeaches.h2Why')}</h2>
      <p>{t('blogBeaches.whyP1')}</p>
      <p>{t('blogBeaches.whyP2')}</p>

      <h2>{t('blogBeaches.h2Jaz')}</h2>
      <p>{t('blogBeaches.jazP')}</p>

      <h2>{t('blogBeaches.h2Mogren')}</h2>
      <p>{t('blogBeaches.mogrenP')}</p>

      <img src="/img/blog-budva-riviera-beach-hop-inline.webp" alt={t('blogBeaches.altInline')} loading="lazy" />

      <h2>{t('blogBeaches.h2Slovenska')}</h2>
      <p>{t('blogBeaches.slovenskaP')}</p>

      <h2>{t('blogBeaches.h2Becici')}</h2>
      <p>{t('blogBeaches.beciciP')} <a href={localePath('/blog/petrovac-to-buljarica')}>{t('blogBeaches.beciciLink')}</a>.</p>

      <h2>{t('blogBeaches.h2Kamenovo')}</h2>
      <p>{t('blogBeaches.kamenovoP')}</p>

      <h2>{t('blogBeaches.h2Packing')}</h2>
      <ul>
        <li><strong>{t('blogBeaches.packShoesLabel')}</strong> {t('blogBeaches.packShoesVal')}</li>
        <li><strong>{t('blogBeaches.packSunLabel')}</strong> {t('blogBeaches.packSunVal')}</li>
        <li><strong>{t('blogBeaches.packCashLabel')}</strong> {t('blogBeaches.packCashVal')}</li>
        <li><strong>{t('blogBeaches.packSnorkelLabel')}</strong> {t('blogBeaches.packSnorkelVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogBeaches.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogBeaches.glanceCoast')}</strong>
            {t('blogBeaches.glanceCoastVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBeaches.glanceBeaches')}</strong>
            {t('blogBeaches.glanceBeachesVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBeaches.glanceBest')}</strong>
            {t('blogBeaches.glanceBestVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogBeaches.glanceParking')}</strong>
            {t('blogBeaches.glanceParkingVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
