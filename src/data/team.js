// src/data/team.js

export const teamFilters = {
  strategy: ['Corporate & Commercial', 'Estate & Probate', 'Litigation', 'Real Estate', 'Leadership', 'Administration'],
  role: ['Partner', 'Senior Associate', 'Associate', 'Counsel', 'Legal Admin'],
  office: ['Nairobi', 'Thika'],
};

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
      'Joseph Mwichigi is an advocate with experience in commercial law, litigation, employment law, and dispute resolution.',
      'He has advised individuals, businesses, and institutions on complex legal matters requiring strategic and practical solutions.'
    ],
    practiceAreas: [
      'Commercial Law',
      'Employment Law',
      'Civil Litigation',
      'Real Estate Law',
    ],
    education: [
      'Bachelor of Laws (LL.B) – Kenyatta University',
      'Postgraduate Diploma in Law – Kenya School of Law',
    ],
  },
  {
    id: 2,
    slug: 'naomi-wanjiru-wainaina',
    name: 'Naomi Wanjiru Wainaina',
    title: 'Legal Administrator',
    role: 'Legal Admin',
    // Make sure to add her image to the public/ folder with this exact name:
    image: '/wainaina.jpeg', 
    email: 'office@fkmadvocatesllp.com', // Placeholder
    linkedin: 'https://www.linkedin.com/', // Placeholder
    admissions: [
      'Professional affiliations will be updated here.' // Placeholder
    ],
    strategy: ['Administration'],
    office: 'Nairobi', // Placeholder
    initials: 'NW',
    bio: [
      'Naomi Wanjiru Wainaina serves as the Legal Administrator at FKM Advocates LLP, ensuring smooth and efficient day-to-day operations across the firm.',
      '[More detailed biography information will be updated here once provided.]'
    ],
    practiceAreas: [
      'Firm Operations',
      'Client Relations',
      'Administrative Management'
    ],
    education: [
      '[Degree Name] – [University Name]', // Placeholder
    ],
  }
  {
    id: 3,
    slug: 'jane-waweru',
    name: 'Jane Waweru',
    title: 'Dispute Resolution', // You can adjust this title as needed
    role: 'Senior Associate', // Matches the filter categories
    image: '/jane.jpeg', // Make sure to save her optimized image as 'jane.jpeg' in the public/ folder
    email: 'office@fkmadvocatesllp.com', // Professional firm email format
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
    practiceAreas: [
      'Alternative Dispute Resolution',
      'Real Estate & Conveyancing',
      'Commercial Contracts',
      'Employment & HR Compliance'
    ],
    education: [
      'Postgraduate Diploma in Law – Kenya School of Law',
      'Bachelor of Laws (LL.B) – Catholic University of Eastern Africa',
      'Mediation Training – Mediation Training Institute (2019)'
    ],
  },
];

export const getTeamMemberBySlug = (slug) => teamMembers.find((m) => m.slug === slug);