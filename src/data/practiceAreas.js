export const practiceAreas = [
  {
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    shortTitle: 'Dispute Resolution',
    description:
      'Strategic representation in complex, high-stakes contentious matters.',
    approach:
      'Disputes are an inevitable part of life and business. Our dispute resolution practice group actively pursues all avenues of resolution to advise clients on a wide range of contentious matters. We represent clients before courts and tribunals, focusing on banking litigation, complex commercial disputes, constitutional law, public procurement, and property disputes.',
    metrics: { matters: '200+', ticket: 'Civil – Commercial', team: '5' },
    features: [
      'Commercial and civil litigation',
      'Banking and finance litigation',
      'Mediation and Arbitration (ADR)',
      'Constitutional law and election petitions',
      'Public procurement disputes',
      'Criminal law and due process representation',
    ],
  },
  {
    slug: 'corporate-mergers-acquisitions',
    title: 'Corporate, Mergers & Acquisitions',
    shortTitle: 'Corporate & M&A',
    description:
      'Powerful legal planning and compliance tools for business growth and restructuring.',
    approach:
      'Acquisitions are a powerful tool for business growth but require careful legal planning. At FKM, we advise investors, corporations, and entrepreneurs on mergers and acquisitions (M&A), corporate restructuring, and acquisition transactions in Kenya, providing end-to-end legal support for long-term success.',
    metrics: { matters: '150+', ticket: 'SME – Enterprise', team: '4' },
    features: [
      'Mergers and acquisitions (M&A)',
      'Corporate restructuring and joint ventures',
      'Business formation and corporate governance',
      'Drafting and negotiating commercial contracts',
      'Debt recovery and general commercial matters',
      'Regulatory compliance and due diligence',
    ],
  },
  {
    slug: 'banking-finance-insolvency',
    title: 'Banking, Finance & Insolvency',
    shortTitle: 'Banking & Finance',
    description:
      'Underpinning the movement of capital and enabling corporate growth.',
    approach:
      'Banking and finance intersect with various industries and underpin the movement of capital across markets. Our practice area is highly regarded for its expertise in advising on both contentious and non-contentious matters. We advise the full array of stakeholders in borrowing and lending in a legally sound and commercially viable way.',
    metrics: { matters: '120+', ticket: 'Institutional – Corporate', team: '3' },
    features: [
      'Loan financing transactions',
      'Syndicated finance structuring',
      'Asset debentures and security documentation',
      'Banking regulatory compliance',
      'Insolvency and restructuring',
      'FinTech advisory and licensing',
    ],
  },
  {
    slug: 'real-estate-construction',
    title: 'Real Estate & Construction',
    shortTitle: 'Real Estate',
    description:
      'Expert legal guidance for secure property transactions and infrastructure development.',
    approach:
      'Kenya’s real estate and construction sector is growing rapidly in complexity. We offer comprehensive services tailored to investors, developers, and property owners. Whether buying, selling, leasing, or developing, we provide accurate guidance to help clients mitigate risk and adopt tax-efficient structures that enhance investment returns.',
    metrics: { matters: '180+', ticket: 'Commercial – Residential', team: '4' },
    features: [
      'Conveyancing and land transactions',
      'Property due diligence and verification',
      'Commercial and residential leases',
      'Real estate financing and structuring',
      'Property-related dispute resolution',
      'Construction claims and contracts',
    ],
  },
  {
    slug: 'tax-regulatory-compliance',
    title: 'Tax & Regulatory Compliance',
    shortTitle: 'Tax Law',
    description:
      'Bespoke legal and tax support tailored towards individuals and corporations.',
    approach:
      'Virtually all major transactions have significant tax dimensions. FKM has a depth and breadth of tax law skills that few can match. We devise timely, effective, and innovative solutions across the full range of international and domestic tax issues, providing bespoke support on high-value tax disputes and compliance.',
    metrics: { matters: '90+', ticket: 'Corporate – Individual', team: '3' },
    features: [
      'Real estate and transfer tax',
      'Energy, infrastructure, and VAT tax',
      'Corporate restructuring and transfer pricing',
      'Private equity and funds tax',
      'Tax dispute resolution and litigation',
      'General regulatory compliance',
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property & Technology',
    shortTitle: 'Intellectual Property',
    description:
      'Protecting the foundation of innovation, reputation, and commercial success.',
    approach:
      'Intellectual Property must be respected in a thriving market economy. We provide comprehensive legal solutions for the protection, registration, commercialization, and enforcement of IP rights in Kenya and cross-border markets. We take a strategic approach ensuring our clients’ ideas, brands, and creations are effectively leveraged for growth.',
    metrics: { matters: '100+', ticket: 'Startups – Enterprise', team: '2' },
    features: [
      'Trademark and copyright registration',
      'IP protection and enforcement',
      'Technology-related legal advisory',
      'Brand value enhancement',
      'Cross-border IP commercialization',
    ],
  },
  {
    slug: 'employment-labour',
    title: 'Employment & Labour Law',
    shortTitle: 'Employment Law',
    description:
      'Protecting your most valuable commodity through sound labor relations.',
    approach:
      'Our goal is to help organizations achieve excellent labor relations. We advise on all aspects of the employment relationship, including minimum requirements under the Employment Act, policy drafting, and termination procedures. We also resolve a wide range of disputes, from redundancies to collective actions led by unions.',
    metrics: { matters: '130+', ticket: 'Employer – Executive', team: '3' },
    features: [
      'Employment contracts and workplace policies',
      'Termination and redundancy procedures',
      'Restraint of trade and confidentiality clauses',
      'Union disputes and collective actions',
      'Equal employment and remuneration practice',
      'Disciplinary process advisory',
    ],
  },
  {
    slug: 'projects-infrastructure',
    title: 'Projects, Infrastructure & Environment',
    shortTitle: 'Projects & Infrastructure',
    description:
      'Bold and creative legal solutions for infrastructure, energy, and mining sectors.',
    approach:
      'With the ever-growing demand for robust infrastructure and energy solutions, we combine deep sector knowledge with technical legal precision. We guide projects from concept and feasibility through structuring, procurement, financial close, construction, operation, and exit. We also advise on environmental compliance and public law.',
    metrics: { matters: '40+', ticket: 'Government – Enterprise', team: '3' },
    features: [
      'Project structuring and feasibility',
      'Procurement and financial close',
      'Energy and mining sector advisory',
      'Construction and operation agreements',
      'Environmental compliance and litigation',
      'Human rights and public interest law',
    ],
  },
  {
    slug: 'family-succession',
    title: 'Family, Succession & Inheritance Law',
    shortTitle: 'Family & Succession',
    description:
      'Navigating sensitive personal matters with discretion and legal rigor.',
    approach:
      'We understand that family and succession matters require both legal expertise and deep sensitivity. We offer strategic advisory and representation aimed at resolving family disputes efficiently, preserving intergenerational wealth, and protecting the best interests of all parties involved.',
    metrics: { matters: '100+', ticket: 'Private Client – HNWI', team: '3' },
    features: [
      'Wills, probate, and estate administration',
      'Succession planning and wealth preservation',
      'Marriage and divorce proceedings',
      'Child custody and maintenance',
      'Private family trusts',
    ],
  },
];

export const getPracticeAreaBySlug = (slug) =>
  practiceAreas.find((area) => area.slug === slug);