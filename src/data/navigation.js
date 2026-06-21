export const practiceAreaLinks = [
  { label: 'Commercial & Corporate Law', to: '/practice-areas/commercial-corporate' },
  { label: 'Employment & Labour Law', to: '/practice-areas/employment-labour' },
  { label: 'Family Law', to: '/practice-areas/family-law' },
  { label: 'Property & Real Estate Law', to: '/practice-areas/property-real-estate' },
  { label: 'Civil Litigation & Dispute Resolution', to: '/practice-areas/civil-litigation' },
];

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas', children: practiceAreaLinks },
  { label: 'Our Process', to: '/our-process' },
  { label: 'Team', to: '/team' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export const footerLinks = {
  firm: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Our Process', to: '/our-process' },
    { label: 'Consultation', to: '/consultation' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Legal Notice', to: '/legal' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
};
