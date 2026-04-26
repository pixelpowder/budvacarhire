'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Tivat() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("tivat.title")} subtitle={t("tivat.subtitle")} description={t("tivat.seoDesc")} image="/img/tivat-airport.webp">
      <h2>{t('tivatBody.h1')}</h2>
      <p>{t('tivatBody.p1')}</p>
      <img src="/img/tivat-airport.webp" alt={t('imageAlts.portoMontenegroMarina') || 'Porto Montenegro marina and waterfront'} loading="lazy" />
      <p>{t('tivatBody.p2')}</p>

      <h2>{t('tivatBody.portoTitle')}</h2>
      <p>{t('tivatBody.portoText')}</p>

      <h2>{t('tivatBody.beachesTitle')}</h2>
      <p>{t('tivatBody.beachesText')}</p>
      <ul>
        <li>{t('tivatBody.beach1')}</li>
        <li>{t('tivatBody.beach2')}</li>
      </ul>

      <h2>{t('tivatBody.culturalTitle')}</h2>
      <h3>{t('tivatBody.monasteryTitle')}</h3>
      <p>{t('tivatBody.monasteryText')}</p>
      <img src="/img/tivat-airport.webp" alt={t('imageAlts.tivatBayViews') || 'Tivat bay views'} loading="lazy" />
      <h3>{t('tivatBody.churchTitle')}</h3>
      <p>{t('tivatBody.churchText')}</p>
      <p>{t('tivatBody.museumText')}</p>
    </ContentPage>
  );
}
