import { Link, useParams, Navigate } from 'react-router-dom';
import { getInsightBySlug } from '../data/insights';

const InsightDetailPage = () => {
  const { slug } = useParams();
  const article = getInsightBySlug(slug);

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <article>
      <section className="page-hero">
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
