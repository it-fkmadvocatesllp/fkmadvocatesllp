export const insightCategories = ['Articles', 'Press', 'Legal Updates'];

export const insights = [
  {
    slug: 'corporate-governance-kenya-2025',
    title: 'Corporate Governance Trends in Kenya 2025',
    category: 'Articles',
    readTime: '8 min',
    date: '2025-03-15',
    author: 'FKM Advocates LLP',
    excerpt:
      'An overview of evolving corporate governance standards and regulatory expectations for Kenyan businesses.',
    content: `
      <p>Corporate governance in Kenya continues to evolve as regulators and investors demand greater transparency and accountability from boards and management teams.</p>
      <p>FKM Advocates LLP advises clients on aligning governance frameworks with best practices while maintaining operational flexibility.</p>
      <h3>Key trends</h3>
      <ul>
        <li>Enhanced board diversity requirements</li>
        <li>Strengthened whistleblower protections</li>
        <li>ESG reporting integration</li>
        <li>Digital compliance tools adoption</li>
      </ul>
    `,
  },
  {
    slug: 'estate-planning-high-net-worth',
    title: 'Estate Planning for High-Net-Worth Families',
    category: 'Articles',
    readTime: '10 min',
    date: '2025-02-20',
    author: 'FKM Advocates LLP',
    excerpt:
      'Strategic approaches to wealth preservation and succession planning for Kenyan families.',
    content: `
      <p>Effective estate planning requires careful coordination of wills, trusts, and tax strategies tailored to each family's unique circumstances.</p>
      <p>Our estate practice helps families navigate complex succession challenges while minimizing disputes and tax exposure.</p>
    `,
  },
  {
    slug: 'fkm-expands-thika-office',
    title: 'FKM Advocates Expands Thika Office',
    category: 'Press',
    readTime: '5 min',
    date: '2025-01-10',
    author: 'FKM Advocates LLP',
    excerpt:
      'FKM Advocates LLP announces expansion of its Thika branch to serve growing client demand in the region.',
    content: `
      <p>FKM Advocates LLP has expanded its presence in Thika with additional capacity at the Thika Business Center, strengthening access to legal services for businesses and individuals in the region.</p>
    `,
  },
  {
    slug: 'new-land-registration-act',
    title: 'Updates to Land Registration Act: What Property Owners Should Know',
    category: 'Legal Updates',
    readTime: '12 min',
    date: '2024-11-05',
    author: 'FKM Advocates LLP',
    excerpt:
      'Key changes affecting property transactions and title registration in Kenya.',
    content: `
      <p>Recent amendments to land registration legislation introduce new requirements for property transfers and title verification.</p>
      <p>Property owners and developers should review existing portfolios and pending transactions for compliance implications.</p>
    `,
  },
];

export const getInsightBySlug = (slug) => insights.find((item) => item.slug === slug);
