// src/data/insights.js

export const insightCategories = ['Articles', 'Press', 'Legal Updates'];

export const insights = [
  {
    slug: 'corporate-governance-kenya-2026',
    title: 'Corporate Governance Trends in Kenya: A 2026 Outlook',
    category: 'Articles',
    readTime: '8 min',
    date: 'August 10, 2026',
    author: 'FKM Corporate Team',
    authorImage: 'https://ui-avatars.com/api/?name=FKM&background=1E1B4B&color=fff',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'An overview of evolving corporate governance standards and regulatory expectations for Kenyan businesses.',
    content: [
      "Corporate governance in Kenya continues to evolve rapidly as regulators, institutional investors, and stakeholders demand greater transparency and accountability from boards and management teams.",
      "The Capital Markets Authority (CMA) and the Business Registration Service (BRS) have increasingly focused on the enforcement of beneficial ownership disclosures. Failure to maintain accurate and updated registers now carries significant compliance risks, including severe financial penalties and operational disruptions.",
      "Beyond statutory compliance, we are seeing a distinct shift towards the integration of Environmental, Social, and Governance (ESG) criteria into core corporate strategies. Boards are no longer just overseeing financial performance; they are actively liable for climate risk disclosures and ethical supply chain management.",
      "FKM Advocates LLP advises clients on aligning their governance frameworks with these shifting best practices. We work closely with boards of directors to audit their existing charters, streamline digital compliance reporting, and ensure their corporate structures maintain operational flexibility while mitigating regulatory exposure."
    ],
  },
  {
    slug: 'estate-planning-high-net-worth',
    title: 'Strategic Estate Planning for High-Net-Worth Families',
    category: 'Articles',
    readTime: '10 min',
    date: 'July 22, 2026',
    author: 'Joseph Mwichigi',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Strategic approaches to wealth preservation, trusts, and succession planning for Kenyan families.',
    content: [
      "Effective estate planning requires careful coordination of wills, trusts, and tax strategies tailored to each family's unique financial footprint and long-term objectives.",
      "In Kenya, high-net-worth families are increasingly turning to private family trusts and holding companies to preserve intergenerational wealth. Unlike a traditional will, which must go through the public and often lengthy probate process, a well-structured trust ensures that asset distribution remains private, immediate, and protected from external creditors.",
      "Furthermore, the recent shifts in Kenya's tax legislation necessitate a proactive approach to succession. Structuring asset transfers efficiently can prevent an estate from being heavily depleted by unforeseen tax liabilities upon the transition of ownership.",
      "Our estate practice helps families navigate these complex succession challenges. By initiating these conversations early, FKM Advocates LLP ensures that the transition of assets is seamless, legally bulletproof, and perfectly aligned with the founder's original vision."
    ],
  },
  {
    slug: 'fkm-expands-thika-office',
    title: 'FKM Advocates Expands Thika Office Operations',
    category: 'Press',
    readTime: '4 min',
    date: 'June 15, 2026',
    author: 'FKM Press Office',
    authorImage: 'https://ui-avatars.com/api/?name=PR&background=0A2540&color=fff',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'FKM Advocates LLP announces the physical expansion of its Thika branch to serve growing corporate demand.',
    content: [
      "FKM Advocates LLP is proud to announce the formal expansion of our Thika branch, located within the prestigious Thika Business Center.",
      "This strategic scaling allows us to better serve the surging demand for specialized commercial litigation, real estate conveyancing, and corporate advisory services within the broader Mount Kenya region. As Thika continues to cement itself as an industrial and real estate hub, businesses require agile, top-tier legal counsel without the friction of commuting to Nairobi.",
      "The expanded office will house a dedicated, full-time team of senior associates and legal researchers. Our Thika desk is fully integrated with our Nairobi HQ via our secure, cloud-based practice management infrastructure, ensuring seamless collaboration on complex client matters.",
      "We invite our existing clients and prospective corporate partners to visit the newly expanded space on the 5th Floor of the Thika Business Center."
    ],
  },
  {
    slug: 'new-land-registration-act',
    title: 'Navigating the Ardhisasa Era: What Property Owners Must Know',
    category: 'Legal Updates',
    readTime: '12 min',
    date: 'May 30, 2026',
    author: 'Real Estate Practice',
    authorImage: 'https://ui-avatars.com/api/?name=RE&background=1E1B4B&color=fff',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Key changes affecting property transactions, title registration, and digital compliance in Kenya.',
    content: [
      "The digitization of land records through the Ardhisasa platform has fundamentally shifted the landscape of property transactions and title registration in Kenya. While the system promises efficiency and the eradication of historical land fraud, the transition period requires meticulous compliance.",
      "Recent directives mandate that all land parcels within designated jurisdictions must be fully verified and migrated to the digital registry before any new transactions—including transfers, charges, or leases—can be registered. Property owners attempting to secure financing are finding their transactions stalled due to unverified legacy titles.",
      "Commercial developers and institutional property owners must proactively audit their existing portfolios. Waiting until a transaction is imminent to begin the verification process is a high-risk strategy that can lead to collapsed deals and financial penalties.",
      "FKM Advocates LLP provides comprehensive conveyancing audits. Our real estate team navigates the complexities of the Ministry of Lands, ensuring our clients' property rights are secured and their transactions proceed without statutory delays."
    ],
  },
];

export const getInsightBySlug = (slug) => insights.find((item) => item.slug === slug);