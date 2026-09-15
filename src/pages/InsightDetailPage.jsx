import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getInsightBySlug } from '../data/insights';
import '../styles/pages/insight-detail.css';

const InsightDetailPage = () => {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug);

  if (!insight) return <Navigate to="/" replace />;

  // Generates a dummy avatar based on author name if an image isn't provided
  const avatarUrl = insight.authorImage || `https://ui-avatars.com/api/?name=${insight.author || 'FKM'}&background=1E1B4B&color=fff`;

  return (
    <div className="insight-detail-page bg-light">
      <SEO
        title={`${insight.title} | FKM Advocates LLP`}
        description={insight.excerpt || `Read about ${insight.title}`}
        canonical={`/insights/${insight.slug}`}
      />

      <article className="article-container">
        {/* EDITORIAL HEADER */}
        <header className="article-header">
          <span className="article-category">{insight.category || 'Legal Updates'}</span>
          <h1 className="article-title">{insight.title}</h1>
          
          <div className="article-meta">
            <div className="article-meta__author">
              <img src={avatarUrl} alt="Author avatar" className="author-avatar" />
              <span className="author-name">{insight.author || 'FKM Advocates LLP'}</span>
            </div>
            <span className="meta-divider">|</span>
            <span className="article-date">{insight.date || 'August 2026'}</span>
          </div>
        </header>

        {/* ARTICLE CONTENT */}
        <div className="article-body">
          {insight.content ? (
            // Handles both array mapping and raw strings so it doesn't crash
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

        {/* SHARE SECTION */}
        <div className="article-share">
          <span className="share-text">Share the article:</span>
          <div className="share-buttons">
            <button className="share-btn share-facebook clickable">Facebook</button>
            <button className="share-btn share-x clickable">X</button>
            <button className="share-btn share-linkedin clickable">LinkedIn</button>
          </div>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="article-disclaimer">
          <strong>Disclaimer:</strong> The information contained in this article is of a general nature and is not intended to address the circumstances of any particular individual or entity. While the information is accurate as at date hereof, there can be no guarantee that the information is accurate as of the date it is received or that it will continue to be accurate in the future. No one should act upon such information without appropriate professional advice after a thorough examination of the particular situation.
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="article-footer-nav">
          <Link to="/" className="btn btn--outline clickable">&larr; Back to Home</Link>
        </div>
      </article>
    </div>
  );
};

export default InsightDetailPage;