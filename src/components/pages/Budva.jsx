'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Budva() {
  const { t } = useTranslation();
  return (
    <ContentPage title={t("budva.title")} subtitle={t("budva.subtitle")} description={t("budva.seoDesc")} image="/img/budva-old-town.webp">
      <h2>{t('budvaBody.h1')}</h2>
      <p>{t('budvaBody.p1')}</p>

      <img src="/img/budva-old-town.webp" alt={t('budvaBody.imgAlt1') || 'Budva Old Town peninsula'} loading="lazy" />
      <p>{t('budvaBody.p2')}</p>

      <h2>{t('budvaBody.beachesTitle')}</h2>
      <p>{t('budvaBody.beachesIntro')}</p>
      <ul>
        <li><strong>{t('budvaBody.mogrenLabel') || 'Mogren I & II:'}</strong> {t('budvaBody.mogren')}</li>
        <li><strong>{t('budvaBody.jazLabel') || 'Jaz Beach:'}</strong> {t('budvaBody.jaz')}</li>
        <li><strong>{t('budvaBody.svetiStefanLabel') || 'Sveti Stefan Beach:'}</strong> {t('budvaBody.svetiStefan')}</li>
        <li><strong>{t('budvaBody.beciciLabel') || 'Bečići:'}</strong> {t('budvaBody.becici')}</li>
      </ul>

      <h2>{t('budvaBody.oldTownTitle')}</h2>
      <p>{t('budvaBody.oldTownText')}</p>

      <h2>{t('budvaBody.dayTripsTitle')}</h2>
      <p>{t('budvaBody.svetiStefanTrip')}</p>
      <img src="/img/sveti-stefan.webp" alt={t('budvaBody.imgAlt2') || 'Sveti Stefan island'} loading="lazy" />
      <p>{t('budvaBody.kotorTrip')}</p>
      <p>{t('budvaBody.lovcenTrip')}</p>

      <h2>{t('budvaBody.gettingAroundTitle')}</h2>
      <p>{t('budvaBody.gettingAroundText')}</p>
    </ContentPage>
  );
}
