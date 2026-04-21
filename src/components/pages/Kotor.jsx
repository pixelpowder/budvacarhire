'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
export default function Kotor() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage title={t("kotor.title")} subtitle={t("kotor.subtitle")} description={t("kotor.seoDesc")} image="/img/kotor-nearby.webp">
      <h2>{t('kotorBody.h1')}</h2>
      <p>{t('kotorBody.p1')}</p>
      <img src="/img/kotor-nearby.webp" alt="Bay of Kotor from above" loading="lazy" />
      <p>{t('kotorBody.p2')}</p>

      <h2>{t('kotorBody.landmarksTitle')}</h2>
      <h3>{t('kotorBody.stJohnTitle')}</h3>
      <p>{t('kotorBody.stJohnText')}</p>

      <h3>{t('kotorBody.cathedralTitle')}</h3>
      <p>{t('kotorBody.cathedralText')}</p>

      <h2>{t('kotorBody.dayTripsTitle')}</h2>
      <img src="/img/kotor-nearby.webp" alt="Kotor bay road" loading="lazy" />
      <p>{t('kotorBody.perastTrip')}</p>
      <p>{t('kotorBody.cetinjeTrip')}</p>
      <p>{t('kotorBody.royalCourtText')}{t('kotorBody.tivatLinkPre')} <a href={localePath('/tivat-airport')}>{t('kotorBody.tivatLinkText')}</a> {t('kotorBody.tivatLinkPost')}</p>
    </ContentPage>
  );
}
