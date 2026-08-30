export const teamFilters = {
  strategy: ['Corporate & Commercial', 'Estate & Probate', 'Litigation', 'Real Estate', 'Leadership'],
  role: ['Partner', 'Senior Associate', 'Associate', 'Counsel'],
  office: ['Nairobi', 'Thika'],
};

export const teamMembers = [
  {
    id: 1,
    slug: 'joseph-mwichigi',
    name: 'Joseph Mwichigi',
    title: 'Managing Partner',
    role: 'Partner',
    // ADDED MISSING FIELDS FOR THE UI:
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop', // Replace with actual image path in public/ folder
    email: 'mwichigi@fkmadvocatesllp.com',
    linkedin: 'https://www.linkedin.com/', 
    admissions: [
      'Advocate of the High Court of Kenya',
      'Member, Law Society of Kenya (LSK)'
    ],
    strategy: ['Leadership', 'Corporate & Commercial'],
    office: 'Nairobi',
    initials: 'JM',
    // CHANGED BIO FROM STRING TO ARRAY:
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
  // Add other team members here following this exact format...
];

export const getTeamMemberBySlug = (slug) => teamMembers.find((m) => m.slug === slug);