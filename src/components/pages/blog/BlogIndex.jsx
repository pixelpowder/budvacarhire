'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid var(--gray-200, #e9ecef)',
  boxShadow: 'var(--shadow-sm)',
  transition: 'box-shadow 0.2s, transform 0.2s',
  display: 'flex',
  flexDirection: 'column',
};

const cardImageStyle = {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  display: 'block',
};

const cardBodyStyle = {
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

const cardTitleStyle = {
  fontSize: '18px',
  fontWeight: 800,
  color: 'var(--navy, #05203c)',
  lineHeight: 1.3,
  marginBottom: '10px',
};

const cardExcerptStyle = {
  fontSize: '15px',
  color: 'var(--gray-600, #6c757d)',
  lineHeight: 1.65,
  marginBottom: '20px',
  flex: 1,
};

const cardLinkStyle = {
  fontSize: '14px',
  fontWeight: 700,
  color: 'var(--blue, #0770e3)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const articles = [
  { key: 'oldtown', image: '/img/blog-budva-old-town-walking.webp', href: '/blog/budva-old-town-walking' },
  { key: 'stefan', image: '/img/blog-sveti-stefan-viewpoints.webp', href: '/blog/sveti-stefan-viewpoints' },
  { key: 'beaches', image: '/img/blog-budva-riviera-beach-hop.webp', href: '/blog/budva-riviera-beach-hop' },
  { key: 'skadar', image: '/img/blog-budva-to-skadar-day.webp', href: '/blog/budva-to-skadar-day' },
  { key: 'nightlife', image: '/img/blog-budva-nightlife-guide.webp', href: '/blog/budva-nightlife-guide' },
  { key: 'gastro', image: '/img/blog-budva-gastro-scene.webp', href: '/blog/budva-gastro-scene' },
  { key: 'petrovac', image: '/img/blog-petrovac-to-buljarica.webp', href: '/blog/petrovac-to-buljarica' },
  { key: 'rainy', image: '/img/blog-budva-rainy-day.webp', href: '/blog/budva-rainy-day' },
  { key: 'sunrides', image: '/img/blog-budva-sunrise-sunset.webp', href: '/blog/budva-sunrise-sunset' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-budva-old-town-walking.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{t('blogIndex.breadcrumbBlog')}</span>
          </nav>
          <h1 className="content-hero__title">{t('blogIndex.heroTitle')}</h1>
          <p className="content-hero__subtitle">{t('blogIndex.heroSubtitle')}</p>
        </div>
      </div>

      <div style={{
        maxWidth: '1220px',
        margin: '0 auto',
        padding: '48px 24px 80px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {articles.map((article) => {
            const title = t(`blogIndex.card_${article.key}_title`);
            const excerpt = t(`blogIndex.card_${article.key}_excerpt`);
            return (
              <a
                key={article.href}
                href={localePath(article.href)}
                style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={article.image}
                  alt={title}
                  style={cardImageStyle}
                  loading="lazy"
                />
                <div style={cardBodyStyle}>
                  <h2 style={cardTitleStyle}>{title}</h2>
                  <p style={cardExcerptStyle}>{excerpt}</p>
                  <span style={cardLinkStyle}>
                    {t('blogIndex.readGuide')} &rarr;
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
