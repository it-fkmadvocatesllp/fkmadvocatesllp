export const practiceAreas = [
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    shortTitle: 'Corporate',
    description:
      'Comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations. Strategic counsel to navigate corporate law complexities.',
    metrics: { matters: '150+', ticket: 'SME – Enterprise', team: '4' },
    features: [
      'Corporate Formation & Governance',
      'Contract Negotiation & Drafting',
      'Mergers & Acquisitions',
      'Regulatory Compliance',
      'Employment Law',
      'Intellectual Property Protection',
    ],
    approach:
      'We partner with founders and management teams, enabling them to retain operational control while benefiting from our legal expertise and strategic vision.',
  },
  {
    slug: 'estate-probate',
    title: 'Estate & Probate',
    shortTitle: 'Estate',
    description:
      'Protecting your legacy and ensuring your wishes are carried out with precision and care. We handle sensitive matters with professionalism and discretion.',
    metrics: { matters: '80+', ticket: 'Individual – Family', team: '3' },
    features: [
      'Will & Testament Drafting',
      'Trust Administration',
      'Probate Court Proceedings',
      'Estate Tax Planning',
      'Guardianship Matters',
      'Asset Protection Strategies',
    ],
    approach:
      'Our methodical approach focuses on preserving family wealth and ensuring smooth succession across generations.',
  },
  {
    slug: 'litigation',
    title: 'Litigation & Dispute Resolution',
    shortTitle: 'Litigation',
    description:
      'Aggressive representation in court with a track record of successful outcomes. We stand as your firm advocate in complex legal disputes.',
    metrics: { matters: '200+', ticket: 'Civil – Commercial', team: '5' },
    features: [
      'Commercial Disputes',
      'Contract Litigation',
      'Personal Injury Claims',
      'Property Disputes',
      'Employment Litigation',
      'Alternative Dispute Resolution',
    ],
    approach:
      'We adopt rigorous case analysis and flexible litigation strategies, maintaining long-term relationships built on trust and results.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Conveyancing',
    shortTitle: 'Real Estate',
    description:
      'Navigate complex property transactions and real estate matters with confidence. From acquisition to development, we cover all legal aspects.',
    metrics: { matters: '120+', ticket: 'Residential – Commercial', team: '3' },
    features: [
      'Property Acquisition & Sales',
      'Lease Agreements',
      'Title Verification',
      'Land Disputes',
      'Development Agreements',
      'Mortgage & Financing',
    ],
    approach:
      'We design tailored legal structures for each transaction, aligned with your investment goals and regulatory requirements.',
  },
];

export const getPracticeAreaBySlug = (slug) =>
  practiceAreas.find((area) => area.slug === slug);
