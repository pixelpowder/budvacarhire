'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaGastroScene() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogGastro.title')}
      subtitle={t('blogGastro.subtitle')}
      description={t('blogGastro.description')}
      image="/img/blog-budva-gastro-scene.webp"
    >
      <h2>{t('blogGastro.h2Scene')}</h2>
      <p>{t('blogGastro.sceneP1')}</p>
      <p>{t('blogGastro.sceneP2')}</p>

      <h2>{t('blogGastro.h2Waterfront')}</h2>
      <p>{t('blogGastro.waterfrontP')}</p>

      <img src="/img/blog-budva-gastro-scene-inline.webp" alt={t('blogGastro.altInline')} loading="lazy" />

      <h2>{t('blogGastro.h2OldTown')}</h2>
      <p>{t('blogGastro.oldTownP')}</p>

      <h2>{t('blogGastro.h2Hilltop')}</h2>
      <p>{t('blogGastro.hilltopP')} <a href={localePath('/blog/sveti-stefan-viewpoints')}>{t('blogGastro.hilltopLink')}</a>.</p>

      <h2>{t('blogGastro.h2Seafood')}</h2>
      <p>{t('blogGastro.seafoodP')}</p>

      <h2>{t('blogGastro.h2Market')}</h2>
      <p>{t('blogGastro.marketP')}</p>

      <h2>{t('blogGastro.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogGastro.tipReserveLabel')}</strong> {t('blogGastro.tipReserveVal')}</li>
        <li><strong>{t('blogGastro.tipLunchLabel')}</strong> {t('blogGastro.tipLunchVal')}</li>
        <li><strong>{t('blogGastro.tipWineLabel')}</strong> {t('blogGastro.tipWineVal')}</li>
        <li><strong>{t('blogGastro.tipCashLabel')}</strong> {t('blogGastro.tipCashVal')}</li>
      </ul>

      <div className="route-info">
        <h3>{t('blogGastro.glanceTitle')}</h3>
        <div className="route-info__grid">
          <div className="route-info__item">
            <strong>{t('blogGastro.glanceMeal')}</strong>
            {t('blogGastro.glanceMealVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogGastro.glanceDish')}</strong>
            {t('blogGastro.glanceDishVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogGastro.glanceWine')}</strong>
            {t('blogGastro.glanceWineVal')}
          </div>
          <div className="route-info__item">
            <strong>{t('blogGastro.glanceBest')}</strong>
            {t('blogGastro.glanceBestVal')}
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
