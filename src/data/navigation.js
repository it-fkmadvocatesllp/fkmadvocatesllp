// src/data/navigation.js

export const practiceAreaLinks = [
  { label: 'Corporate & Commercial', to: '/practice-areas/commercial-corporate' },
  { label: 'Litigation & Dispute Resolution', to: '/practice-areas/civil-litigation' },
  { label: 'Estate & Probate', to: '/practice-areas/family-law' }, // Assuming Family maps to Estate based on previous data
  { label: 'Real Estate & Conveyancing', to: '/practice-areas/property-real-estate' },
];

// Simplified to match the Adra-Advocates layout
export const navItems = [
  { label: 'Your Team', to: '/team' },
  { label: 'Practice Areas', to: '/practice-areas', children: practiceAreaLinks },
  { label: 'Careers', to: '/careers' },
  { label: 'Insights', to: '/insights' },
];

// Simplified Footer Links
export const footerLinks = {
  legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Legal Notice', to: '/legal' },
    { label: 'Cookie Policy', to: '/cookies' },
  ],
};