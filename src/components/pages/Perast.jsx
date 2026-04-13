'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Perast() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("perast.title")} subtitle={t("perast.subtitle")} description={t("perast.seoDesc")} image="/img/kotor-nearby.webp">
      <h2>{t('perastBody.h1')}</h2>
      <p>{t('perastBody.p1')}</p>
      <p>{t('perastBody.p2')}</p>

      <img src="/img/kotor-nearby.webp" alt="Perast waterfront with islands" loading="lazy" />

      <h2>{t('perastBody.islandsTitle')}</h2>
      <h3>{t('perastBody.stGeorgeTitle')}</h3>
      <p>{t('perastBody.stGeorgeText')}</p>
      <h3>{t('perastBody.ladyOfRocksTitle')}</h3>
      <p>{t('perastBody.ladyOfRocksText')}</p>

      <h2>{t('perastBody.historicTitle')}</h2>
      <p>{t('perastBody.historicText')}</p>

      <h3>{t('perastBody.monasteryTitle')}</h3>
      <p>{t('perastBody.monasteryText')}{t('perastBody.monasteryLinkPre')}<a href={localePath('/montenegro')}>{t('perastBody.monasteryLinkText')}</a>{t('perastBody.monasteryLinkPost')}</p>
    </ContentPage>
  );
}
