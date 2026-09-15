import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getInsightBySlug } from '../data/insights';
import '../styles/pages/insight-detail.css';

const InsightDetailPage = () => {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug);

  if (!insight) return <Navigate to="/insights" replace />;

  const avatarUrl = insight.authorImage || `https://ui-avatars.com/api/?name=${insight.author || 'FKM'}&background=1E1B4B&color=fff`;

  // Safe sharing functions to prevent Clipboard API crashes
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(insight.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(insight.title)}`
  };

  return (
    <div className="insight-detail-page bg-light">
      <SEO
        title={`${insight.title} | FKM Advocates LLP`}
        description={insight.excerpt}
        canonical={`/insights/${insight.slug}`}
      />

      {/* DARK HERO - Protects the white navigation menu */}
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
          <span className="article-category" style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {insight.category || 'Legal Updates'}
          </span>
          <h1 className="stacked-headline text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '1rem', marginBottom: '2rem' }}>
            {insight.title}
          </h1>
          
          <div className="article-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted-on-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src={avatarUrl} alt="Author" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <span style={{ fontWeight: '600', color: '#fff' }}>{insight.author || 'FKM Advocates LLP'}</span>
            </div>
            <span>|</span>
            <span>{insight.date || 'August 2026'}</span>
          </div>
        </div>
      </section>

      {/* READING CONTAINER */}
      <article className="article-container reveal" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        
        <div className="article-body">
          {insight.content ? (
            Array.isArray(insight.content) ? (
              insight.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{insight.content}</p>
            )
          ) : (
            <p>Article content is currently being updated.</p>
          )}
        </div>

        {/* SAFE SHARE SECTION */}
        <div className="article-share">
          <span className="share-text">Share the article:</span>
          <div className="share-buttons">
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-btn share-facebook clickable">Facebook</a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-btn share-x clickable">X</a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-btn share-linkedin clickable">LinkedIn</a>
          </div>
        </div>

        <div className="article-disclaimer">
          <strong>Disclaimer:</strong> The information contained in this article is of a general nature and is not intended to address the circumstances of any particular individual or entity. While the information is accurate as at date hereof, there can be no guarantee that the information is accurate as of the date it is received or that it will continue to be accurate in the future.
        </div>

        <div className="article-footer-nav">
          <Link to="/insights" className="btn btn--outline clickable">&larr; Back to Insights</Link>
        </div>
      </article>
    </div>
  );
};

export default InsightDetailPage;