'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaRainyDay() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('blogRainy.title')}
      subtitle={t('blogRainy.subtitle')}
      description={t('blogRainy.description')}
      image="/img/blog-budva-rainy-day.webp"
    >
      <h2>{t('blogRainy.h2Rain')}</h2>
      <p>{t('blogRainy.rainP1')}</p>
      <p>{t('blogRainy.rainP2')}</p>

      <h2>{t('blogRainy.h2Museums')}</h2>
      <p>{t('blogRainy.museumsP')}</p>

      <img src="/img/blog-budva-rainy-day-inline.webp" alt={t('blogRainy.altInline')} loading="lazy" />

      <h2>{t('blogRainy.h2Coffee')}</h2>
      <p>{t('blogRainy.coffeeP')}</p>

      <h2>{t('blogRainy.h2Drives')}</h2>
      <p>{t('blogRainy.drivesP')} <a href={localePath('/blog/budva-to-skadar-day')}>{t('blogRainy.drivesLink')}</a>.</p>

      <h2>{t('blogRainy.h2Spa')}</h2>
      <p>{t('blogRainy.spaP')}</p>

      <h2>{t('blogRainy.h2Shopping')}</h2>
      <p>{t('blogRainy.shoppingP')}</p>

      <h2>{t('blogRainy.h2Tips')}</h2>
      <ul>
        <li><strong>{t('blogRainy.tipJacketLabel')}</strong> {t('blogRainy.tipJacketVal')}</li>
        <li><strong>{t('blogRainy.tipDriveLabel')}</strong> {t('blogRainy.tipDriveVal')}</li>
        <li><strong>{t('blogRainy.tipTimingLabel')}</strong> {t('blogRainy.tipTimingVal')}</li>
        <li><strong>{t('blogRainy.tipMoodLabel')}</strong> {t('blogRainy.tipMoodVal')}</li>
      </ul>
    </ContentPage>
  );
}
