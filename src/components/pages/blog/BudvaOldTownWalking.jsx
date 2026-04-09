'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaOldTownWalking() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogOldtown.title')}
      subtitle={t('blogOldtown.subtitle')}
      description={t('blogOldtown.description')}
      image="/img/blog-budva-old-town-walking.webp"
    >
      <h2>{t('blogOldtown.h2Layers')}</h2>
      <p>{t('blogOldtown.layersP1')}</p>
      <p>{t('blogOldtown.layersP2')}</p>

      <h2>{t('blogOldtown.h2Gates')}</h2>
      <p>{t('blogOldtown.gatesP')}</p>

      <img src="/img/blog-budva-old-town-walking-inline.webp" alt={t('blogOldtown.altInline')} loading="lazy" />

      <h2>{t('blogOldtown.h2Churches')}</h2>
      <h3>{t('blogOldtown.h3Trinity')}</h3>
      <p>{t('blogOldtown.trinityP')}</p>
      <h3>{t('blogOldtown.h3John')}</h3>
      <p>{t('blogOldtown.johnP')}</p>
      <h3>{t('blogOldtown.h3Mary')}</h3>
      <p>{t('blogOldtown.maryP')}</p>

      <h2>{t('blogOldtown.h2Citadel')}</h2>
      <p>{t('blogOldtown.citadelP')}</p>

      <h2>{t('blogOldtown.h2Walk')}</h2>
      <p>{t('blogOldtown.walkP')} <a href={localePath('/blog/budva-gastro-scene')}>{t('blogOldtown.walkLink')}</a>.</p>

      <h2>{t('blogOldtown.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogOldtown.tipTimeLabel')}</strong> {t('blogOldtown.tipTimeVal')}</li>
        <li><strong>{t('blogOldtown.tipShoesLabel')}</strong> {t('blogOldtown.tipShoesVal')}</li>
        <li><strong>{t('blogOldtown.tipPhotoLabel')}</strong> {t('blogOldtown.tipPhotoVal')}</li>
        <li><strong>{t('blogOldtown.tipSeasonLabel')}</strong> {t('blogOldtown.tipSeasonVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogOldtown.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceArea')}</strong>
            {t('blogOldtown.glanceAreaVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceDuration')}</strong>
            {t('blogOldtown.glanceDurationVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceCitadel')}</strong>
            {t('blogOldtown.glanceCitadelVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogOldtown.glanceBest')}</strong>
            {t('blogOldtown.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
