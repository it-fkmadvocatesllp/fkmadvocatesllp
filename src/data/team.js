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
    email: 'naomi@fkmadvocatesllp.com', // Placeholder
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
];

export const getTeamMemberBySlug = (slug) => teamMembers.find((m) => m.slug === slug);