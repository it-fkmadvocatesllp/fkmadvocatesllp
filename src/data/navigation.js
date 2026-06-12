export const practiceAreaLinks = [
  { label: 'Corporate & Commercial', to: '/practice-areas/corporate-commercial' },
  { label: 'Estate & Probate', to: '/practice-areas/estate-probate' },
  { label: 'Litigation', to: '/practice-areas/litigation' },
  { label: 'Real Estate', to: '/practice-areas/real-estate' },
];

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas', children: practiceAreaLinks },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Team', to: '/team' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export const footerLinks = {
  firm: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Consultation', to: '/consultation' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Legal Notice', to: '/legal' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
};
