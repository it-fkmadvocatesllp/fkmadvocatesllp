export const practiceAreas = [
  {
    slug: 'commercial-corporate',
    title: 'Commercial & Corporate Law',
    shortTitle: 'Commercial & Corporate',
    description:
      'Helping businesses navigate legal complexities with confidence.',
    approach:
      'Our commercial law team advises startups, SMEs, established corporations, and investors on a broad range of business matters. Whether launching a new venture or managing a growing enterprise, we provide practical legal solutions that support business success.',
    metrics: { matters: '150+', ticket: 'Startup – Enterprise', team: '4' },
    features: [
      'Company formation and registration',
      'Shareholder agreements',
      'Joint ventures',
      'Corporate governance',
      'Contract drafting and review',
      'Business acquisitions',
      'Regulatory compliance',
    ],
  },
  {
    slug: 'employment-labour',
    title: 'Employment & Labour Law',
    shortTitle: 'Employment & Labour',
    description:
      'We advise employers and employees on workplace legal issues.',
    approach:
      'Our objective is to help clients minimize risk while protecting their legal rights.',
    metrics: { matters: '100+', ticket: 'Employer – Employee', team: '3' },
    features: [
      'Employment contracts',
      'Workplace policies',
      'Unfair termination claims',
      'Disciplinary procedures',
      'Redundancy processes',
      'Employment disputes',
      'Labour relations compliance',
    ],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    shortTitle: 'Family Law',
    description:
      'Family matters require legal expertise and sensitivity.',
    approach:
      'We strive to resolve family disputes efficiently while protecting the best interests of all parties involved.',
    metrics: { matters: '80+', ticket: 'Individual – Family', team: '3' },
    features: [
      'Divorce proceedings',
      'Child custody disputes',
      'Child maintenance matters',
      'Adoption processes',
      'Succession planning',
      'Estate administration',
    ],
  },
  {
    slug: 'property-real-estate',
    title: 'Property & Real Estate Law',
    shortTitle: 'Property & Real Estate',
    description:
      'We help clients protect valuable real estate investments through thorough legal guidance.',
    approach:
      'Our property law team provides end-to-end legal support across residential and commercial real estate matters.',
    metrics: { matters: '120+', ticket: 'Residential – Commercial', team: '3' },
    features: [
      'Property transactions',
      'Due diligence investigations',
      'Land ownership disputes',
      'Lease agreements',
      'Conveyancing services',
      'Real estate development matters',
      'Property registration processes',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation & Dispute Resolution',
    shortTitle: 'Civil Litigation',
    description:
      'When disputes arise, effective representation matters.',
    approach:
      'We represent clients before Magistrates\' Courts, High Court, Court of Appeal, Tribunals, and Arbitration Panels, handling a full range of civil and commercial disputes.',
    metrics: { matters: '200+', ticket: 'Civil – Commercial', team: '5' },
    features: [
      'Contract disputes',
      'Debt recovery',
      'Commercial litigation',
      'Land disputes',
      'Professional negligence claims',
      'Civil claims and defenses',
    ],
  },
];

export const getPracticeAreaBySlug = (slug) =>
  practiceAreas.find((area) => area.slug === slug);
