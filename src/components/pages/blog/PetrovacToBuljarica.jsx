'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PetrovacToBuljarica() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogPetrovac.title')}
      subtitle={t('blogPetrovac.subtitle')}
      description={t('blogPetrovac.description')}
      image="/img/blog-petrovac-to-buljarica.webp"
    >
      <h2>{t('blogPetrovac.h2Secret')}</h2>
      <p>{t('blogPetrovac.secretP1')}</p>
      <p>{t('blogPetrovac.secretP2')}</p>

      <h2>{t('blogPetrovac.h2Town')}</h2>
      <p>{t('blogPetrovac.townP')}</p>

      <img src="/img/blog-petrovac-to-buljarica-inline.webp" alt={t('blogPetrovac.altInline')} loading="lazy" />

      <h2>{t('blogPetrovac.h2Lucice')}</h2>
      <p>{t('blogPetrovac.luciceP')}</p>

      <h2>{t('blogPetrovac.h2Buljarica')}</h2>
      <p>{t('blogPetrovac.buljaricaP')}</p>

      <h2>{t('blogPetrovac.h2Drive')}</h2>
      <p>{t('blogPetrovac.driveP')} <a href={localePath('/blog/budva-riviera-beach-hop')}>{t('blogPetrovac.driveLink')}</a>.</p>

      <h2>{t('blogPetrovac.h2Eat')}</h2>
      <p>{t('blogPetrovac.eatP')}</p>

      <h2>{t('blogPetrovac.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogPetrovac.tipRoadLabel')}</strong> {t('blogPetrovac.tipRoadVal')}</li>
        <li><strong>{t('blogPetrovac.tipSwimLabel')}</strong> {t('blogPetrovac.tipSwimVal')}</li>
        <li><strong>{t('blogPetrovac.tipSupplyLabel')}</strong> {t('blogPetrovac.tipSupplyVal')}</li>
        <li><strong>{t('blogPetrovac.tipTimeLabel')}</strong> {t('blogPetrovac.tipTimeVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogPetrovac.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogPetrovac.glanceDistance')}</strong>
            {t('blogPetrovac.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPetrovac.glanceDrive')}</strong>
            {t('blogPetrovac.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPetrovac.glanceBest')}</strong>
            {t('blogPetrovac.glanceBestVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogPetrovac.glanceBeach')}</strong>
            {t('blogPetrovac.glanceBeachVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
