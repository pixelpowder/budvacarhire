'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SvetiStefanViewpoints() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogStefan.title')}
      subtitle={t('blogStefan.subtitle')}
      description={t('blogStefan.description')}
      image="/img/blog-sveti-stefan-viewpoints.webp"
    >
      <h2>{t('blogStefan.h2Island')}</h2>
      <p>{t('blogStefan.islandP1')}</p>
      <p>{t('blogStefan.islandP2')}</p>

      <h2>{t('blogStefan.h2Drive')}</h2>
      <p>{t('blogStefan.driveP')}</p>

      <img src="/img/blog-sveti-stefan-viewpoints-inline.webp" alt={t('blogStefan.altInline')} loading="lazy" />

      <h2>{t('blogStefan.h2Spots')}</h2>
      <h3>{t('blogStefan.h3Panorama')}</h3>
      <p>{t('blogStefan.panoramaP')}</p>
      <h3>{t('blogStefan.h3Beach')}</h3>
      <p>{t('blogStefan.beachP')}</p>
      <h3>{t('blogStefan.h3Milocer')}</h3>
      <p>{t('blogStefan.milocerP')}</p>
      <h3>{t('blogStefan.h3Przno')}</h3>
      <p>{t('blogStefan.prznoP')}</p>

      <h2>{t('blogStefan.h2Light')}</h2>
      <p>{t('blogStefan.lightP')} <a href={localePath('/blog/budva-sunrise-sunset')}>{t('blogStefan.lightLink')}</a>.</p>

      <h2>{t('blogStefan.h2Parking')}</h2>
      <p>{t('blogStefan.parkingP')}</p>

      <div className="route-info">
        <h3>{t('blogStefan.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogStefan.glanceDistance')}</strong>
            {t('blogStefan.glanceDistanceVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogStefan.glanceDrive')}</strong>
            {t('blogStefan.glanceDriveVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogStefan.glanceBestLight')}</strong>
            {t('blogStefan.glanceBestLightVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogStefan.glanceParking')}</strong>
            {t('blogStefan.glanceParkingVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
