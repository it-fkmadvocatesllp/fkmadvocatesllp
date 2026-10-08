export const teamFilters = {
  strategy: ['Corporate & Commercial', 'Dispute Resolution', 'Real Estate & Conveyancing', 'Banking & Finance', 'Environmental Law'],
  role: ['Partner', 'Senior Associate', 'Associate', 'Legal Admin'],
  office: ['Nairobi'],
};

// Generic, professional silhouette icon for members without photos
const PERSON_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='512' height='512'%3E%3Crect width='24' height='24' fill='%23121212'/%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E";

export const teamMembers = [
  {
    id: 1,
    slug: 'joseph-mwichigi',
    name: 'Joseph Mwichigi',
    title: 'Managing Partner',
    role: 'Partner',
    image: '/mwichigi.jpeg', 
    email: 'office@fkmadvocatesllp.com',
    phone: '+254 142 919 709',
    linkedin: 'https://www.linkedin.com/', 
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Banking & Finance', 'Real Estate & Conveyancing', 'Corporate & Commercial'],
    office: 'Nairobi',
    bio: [
      'Joseph is the Managing Partner at FKM ADVOCATES LLP and heads the Banking & Finance and Conveyancing & Real Estate practice groups. With over 10 years of experience, he has advised local and international clients in banking and finance, construction, capital markets, conveyancing and real estate, mergers & acquisitions, and regulatory work, but is particularly well-regarded for his conveyancing expertise.',
      'He has a wealth of expertise in banking and finance, representing clients in high-value and complex transactions including loan financing and syndicated finance.',
      'Joseph is also widely consulted in real estate matters. He handles various development projects including advising on structuring transactions, purchase and sale of properties, due diligence, and commercial leases.'
    ],
    practiceAreas: ['Banking & Finance', 'Conveyancing & Real Estate', 'Mergers & Acquisitions', 'Construction Law'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law', 'Bachelor of Laws (LL.B) – Kenyatta University'],
  },
  {
    id: 2,
    slug: 'fredrick-nderitu',
    name: 'Fredrick Nderitu',
    title: 'Partner', 
    role: 'Partner',
    image: PERSON_PLACEHOLDER, 
    email: 'frednderitu@gmail.com',
    phone: '+254 723 361 792',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Dispute Resolution', 'Environmental Law'], 
    office: 'Nairobi',
    bio: [
      'A results-driven Advocate of the High Court of Kenya with over 10 years of experience in criminal law prosecution, complex litigation, and environmental law. Proven expertise in managing high-profile cases, conducting comprehensive legal research, and securing favourable outcomes through strategic courtroom representation.',
      'Skilled in risk mitigation, legal advisory, and ensuring compliance with regulatory frameworks, particularly in sustainability and renewable energy.',
      'Recognized for strong leadership in navigating intricate legal matters, fostering lasting client relationships, and delivering timely, impactful legal solutions. A trusted negotiator and legal strategist with a demonstrated ability to align legal initiatives with broader organizational objectives.'
    ],
    practiceAreas: ['Criminal Law Prosecution', 'Complex Litigation', 'Environmental & Natural Resources Law'], 
    education: ['Master of Laws (LL.M.), Environmental & Natural Resources Law – University of Nairobi (Ongoing)', 'Postgraduate Diploma in Law – Kenya School of Law', 'Bachelor of Laws (LL.B) – Catholic University of Eastern Africa'],
  },
  {
    id: 3,
    slug: 'jane-waweru',
    name: 'Jane Waweru',
    title: 'Senior Associate',
    role: 'Senior Associate',
    image: '/jane.jpeg', 
    email: 'shiwamuiru@gmail.com',
    phone: '+254 728 343 053',
    linkedin: 'https://www.linkedin.com/in/wanjiru-waweru-24759b127/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)', 'Member, Chartered Institute of Arbitrators (CIArb)'],
    strategy: ['Dispute Resolution', 'Real Estate & Conveyancing'],
    office: 'Nairobi',
    bio: [
      'Jane is a highly experienced Legal Counsel and Advocate with over 9 years of progressive expertise spanning alternative dispute resolution, property law, and regulatory compliance. As a Qualified Arbitrator and trained Mediator, Jane brings a multidisciplinary approach to resolving high-stakes commercial conflicts.',
      'Before her current role, Jane held pivotal in-house management positions across the real estate, agribusiness, and infrastructure sectors. She has a proven track record of successfully managing complex land acquisitions, cross-border supply contracts, and comprehensive compliance audits.',
      'Beyond her dispute resolution practice, she is highly skilled in contract management, corporate governance, and employment law, consistently streamlining operational frameworks to mitigate organizational risk.'
    ],
    practiceAreas: ['Alternative Dispute Resolution', 'Property & Land Use Law', 'Regulatory Compliance', 'Commercial Contracts'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law', 'Bachelor of Laws (LL.B) – Catholic University of Eastern Africa', 'Mediation Training – Mediation Training Institute (2019)'],
  },
  {
    id: 4,
    slug: 'angela-gachugu',
    name: 'Angela Gachugu',
    title: 'Associate', 
    role: 'Associate',
    image: PERSON_PLACEHOLDER, 
    email: 'angelagachugu023@gmail.com',
    phone: '+254 720 436 023',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)', 'Certified Professional Mediator (CPM-MTI)'],
    strategy: ['Dispute Resolution', 'Corporate & Commercial', 'Real Estate & Conveyancing'], 
    office: 'Nairobi',
    bio: [
      'Angela is a motivated legal practitioner with experience in diverse areas of law, including general dispute resolution in civil litigation matters involving personal injury, insurance, employment, environmental, family, and succession law.',
      'She has expertise in conveyancing/real estate, banking, finance and securities law, and commercial matters. She is also a Certified Professional Mediator with over 5 years of experience in family and succession matters.',
      'An enthusiastic communicator with strong attention to detail; an analytical thinker with strong research skills; a team player with well-developed negotiation and coordination skills.'
    ],
    practiceAreas: ['Civil Litigation', 'Family & Succession Law', 'Banking & Finance', 'Conveyancing'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law', 'Bachelor of Laws (LL.B) – University of Nairobi (2018)', 'Data Protection Course – Strathmore University (2023)', 'Mediation Refresher Training – FIDA Kenya'],
  },
  {
    id: 5,
    slug: 'sandra-cherotich',
    name: 'Sandra Cherotich',
    title: 'Senior Associate', 
    role: 'Senior Associate',
    image: PERSON_PLACEHOLDER, 
    email: 'office@fkmadvocatesllp.com',
    phone: '+254 142 919 709',
    linkedin: 'https://www.linkedin.com/',
    admissions: ['Advocate of the High Court of Kenya', 'Member, Law Society of Kenya (LSK)'],
    strategy: ['Banking & Finance', 'Real Estate & Conveyancing', 'Corporate & Commercial'], 
    office: 'Nairobi',
    bio: [
      'Sandra Cherotich is a Senior Associate in the Banking & Finance, Conveyancing & Real Estate Department and specialises in property law, banking, finance, fintech, joint ventures, company law, and general commercial transactions.',
      'She has advised clients in the banking and healthcare sectors on security documentation, commercial and residential leases, and licenses.',
      'Sandra was a key part of the team that advised a leading FinTech firm on its application for authorisation to provide payment services by the Central Bank of Kenya. She is a team player committed to learning, excellence, and ethics.'
    ],
    practiceAreas: ['Banking & Finance', 'FinTech', 'Joint Ventures', 'Property Law'],
    education: ['Postgraduate Diploma in Law – Kenya School of Law', 'Bachelor of Laws (LL.B) – Kenyatta University', 'Certificate of Secondary Education – Limuru Girls School'],
  }
];

export const getTeamMemberBySlug = (slug) => teamMembers.find((m) => m.slug === slug);