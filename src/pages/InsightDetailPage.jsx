import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getInsightBySlug } from '../data/insights';
import SEO from '../components/SEO';

const SITE_URL = 'https://fkmadvocatesllp.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const stripHtml = (html) => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const InsightDetailPage = () => {
  const { slug } = useParams();
  const article = getInsightBySlug(slug);

  if (!article) return <Navigate to="/insights" replace />;

  const canonicalUrl = `${SITE_URL}/insights/${article.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    image: DEFAULT_IMAGE,
    url: canonicalUrl,
    articleBody: stripHtml(article.content),
    author: {
      '@type': 'Organization',
      name: article.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FKM Advocates LLP',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_IMAGE,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <article>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/insights/${article.slug}`}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section 
        className="page-hero"
        style={{
          background: `linear-gradient(rgba(18, 18, 18, 0.4), rgba(18, 18, 18, 0.9)), url('/hero_image.jpeg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container reveal">
          <span className="kicker">{article.category}</span>
          <h1 className="section-title" style={{ maxWidth: '800px', margin: '0 auto' }}>{article.title}</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>{article.date} · {article.readTime}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            className="reveal"
            style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <Link to="/insights" className="btn btn--outline clickable" style={{ marginTop: '3rem' }}>
            ← Back to Insights
          </Link>
        </div>
      </section>
    </article>
  );
};

export default InsightDetailPage;
