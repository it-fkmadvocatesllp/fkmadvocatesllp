export const practiceAreaLinks = [
  { label: 'Corporate & Commercial', to: '/practice-areas/commercial-corporate' },
  { label: 'Litigation & Dispute Resolution', to: '/practice-areas/civil-litigation' },
  { label: 'Estate & Probate', to: '/practice-areas/family-law' }, 
  { label: 'Real Estate & Conveyancing', to: '/practice-areas/property-real-estate' },
];

export const navItems = [
  { label: 'Your Team', to: '/team' },
  { label: 'Practice Areas', to: '/practice-areas', children: practiceAreaLinks },
  { label: 'Careers', to: '/careers' },
];

export const footerLinks = {
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Legal Notice', to: '/legal' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
};