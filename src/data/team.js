// src/data/team.js

export const teamFilters = {
  strategy: ['Corporate & Commercial', 'Estate & Probate', 'Litigation', 'Real Estate', 'Leadership', 'Administration'],
  role: ['Partner', 'Senior Associate', 'Associate', 'Counsel', 'Legal Admin'],
  office: ['Nairobi', 'Thika'],
};

// Helper function to generate clean initial placeholders for missing images
const getPlaceholderImage = (name) => 
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1E1B4B&color=fff&size=512&font-size=0.33`;

export const teamMembers = [
  {
    id: 1,
    slug: 'joseph-mwichigi',
    name: 'Joseph Mwichigi',
    title: 'Managing Partner',
    role: 'Partner',
    image: '/mwichigi.jpeg', 
    email: 'mwichigi@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/', 
    admissions: [
      'Advocate of the High Court of Kenya',
      'Member, Law Society of Kenya (LSK)'
    ],
    strategy: ['Leadership', 'Corporate & Commercial'],
    office: 'Nairobi',
    initials: 'JM',
    bio: [
      'Joseph Mwichigi is an advocate with profound experience in commercial law, litigation, employment law, and dispute resolution.',
      'He has consistently advised individuals, businesses, and institutional clients on complex legal matters requiring strategic, practical, and enforceable solutions.'
    ],
    practiceAreas: ['Commercial Law', 'Employment Law', 'Civil Litigation', 'Real Estate Law'],
    education: ['Bachelor of Laws (LL.B) – Kenyatta University', 'Postgraduate Diploma in Law – Kenya School of Law'],
  },
  {
    id: 2,
    slug: 'sandra',
    name: 'Sandra [Last Name]', // TODO: Update with actual last name
    title: 'Partner', 
    role: 'Partner',
    image: getPlaceholderImage('Sandra'), // Placeholder
    email: 'office@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Corporate & Commercial'], 
    office: 'Nairobi',
    initials: 'S',
    bio: [
      'Sandra is a highly skilled advocate specializing in corporate governance, commercial transactions, and strategic legal advisory.',
      'She brings a wealth of experience in navigating complex corporate structures and ensuring regulatory compliance for modern enterprises.'
    ],
    practiceAreas: ['Corporate Governance', 'Commercial Transactions'], 
    education: ['Postgraduate Diploma in Law – Kenya School of Law'],
  },
  {
    id: 3,
    slug: 'jane-waweru',
    name: 'Jane Waweru',
    title: 'Head of Dispute Resolution',
    role: 'Senior Associate',
    image: '/jane.jpeg', // NOTE: Ensure jane.jpeg is in your public/ folder, or change to getPlaceholderImage('Jane Waweru')
    email: 'office@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/in/wanjiru-waweru-24759b127/',
    admissions: [
      'Advocate of the High Court of Kenya',
      'Member, Law Society of Kenya (LSK)',
      'Member, Chartered Institute of Arbitrators (CIArb)'
    ],
    strategy: ['Litigation', 'Real Estate', 'Corporate & Commercial'],
    office: 'Nairobi',
    initials: 'JW',
    bio: [
      'Jane Waweru is a highly experienced Legal Counsel and Advocate with over 9 years of progressive expertise spanning alternative dispute resolution, property law, and regulatory compliance.',
      'As a Qualified Arbitrator and trained Mediator affiliated with the Chartered Institute of Arbitrators, Jane brings a multidisciplinary approach to resolving high-stakes commercial conflicts, leasehold negotiations, and real estate disputes without the need for protracted litigation.',
      'Prior to her current role, Jane held pivotal in-house management positions across the real estate, agribusiness, and infrastructure sectors. She has a proven track record of successfully managing complex land acquisitions, cross-border supply contracts, and comprehensive compliance audits.',
      'Beyond her dispute resolution practice, she is highly skilled in contract management, corporate governance, and employment law, consistently streamlining operational frameworks to mitigate organizational risk.'
    ],
    practiceAreas: ['Alternative Dispute Resolution', 'Real Estate & Conveyancing', 'Commercial Contracts', 'Employment & HR Compliance'],
    education: [
      'Postgraduate Diploma in Law – Kenya School of Law',
      'Bachelor of Laws (LL.B) – Catholic University of Eastern Africa',
      'Mediation Training – Mediation Training Institute (2019)'
    ],
  },
  {
    id: 4,
    slug: 'fred-nderitu',
    name: 'Fred Nderitu',
    title: 'Associate', 
    role: 'Associate',
    image: getPlaceholderImage('Fred Nderitu'), // Placeholder
    email: 'nderitu@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Litigation'], 
    office: 'Nairobi',
    initials: 'FN',
    bio: [
      'Fred Nderitu is an astute legal professional dedicated to delivering precise legal solutions in complex commercial and civil disputes.',
      'He represents clients across various judicial levels, bringing a detail-oriented and strategic approach to dispute resolution and risk mitigation.'
    ],
    practiceAreas: ['Civil Litigation', 'Commercial Law'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law'],
  },
  {
    id: 5,
    slug: 'angela-gachugu',
    name: 'Angela Gachugu',
    title: 'Associate', 
    role: 'Associate',
    image: getPlaceholderImage('Angela Gachugu'), // Placeholder
    email: 'office@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Corporate & Commercial'], 
    office: 'Nairobi',
    initials: 'AG',
    bio: [
      'Angela Gachugu brings a sharp, detail-oriented approach to corporate legal advisory, assisting businesses with compliance, contract management, and strategic growth.',
      'She works closely with commercial clients to structure agreements that protect their interests and facilitate seamless business operations.'
    ],
    practiceAreas: ['Corporate Law', 'Regulatory Compliance', 'Contract Management'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law'],
  },
  {
    id: 6,
    slug: 'naomi-wanjiru-wainaina',
    name: 'Naomi Wanjiru Wainaina',
    title: 'Legal Administrator',
    role: 'Legal Admin',
    image: '/wainaina.jpeg', 
    email: 'office@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/',
    admissions: [],
    strategy: ['Administration'],
    office: 'Nairobi',
    initials: 'NW',
    bio: [
      'Naomi Wanjiru Wainaina serves as the Legal Administrator at FKM Advocates LLP, ensuring smooth and highly efficient day-to-day operations across the firm.',
      'With a keen eye for organizational management, she oversees client relations, practice logistics, and internal firm compliance, allowing the legal team to remain relentlessly focused on securing client outcomes.'
    ],
    practiceAreas: ['Firm Operations', 'Client Relations', 'Administrative Management'],
    education: ['Professional Administration Credentials'],
  }
];

export const getTeamMemberBySlug = (slug) => teamMembers.find((m) => m.slug === slug);