import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://fkmadvocatesllp.com';
const LOGO_URL = `${SITE_URL}/og-image.jpg`;

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'FKM Advocates LLP',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 1200,
        height: 630,
      },
      foundingDate: '2014',
      description:
        'A Nairobi-based law firm focused on driving client success through precision counsel, strategic advocacy, and unwavering integrity across Kenya and East Africa.',
      email: 'office@fkmadvocatesllp.com',
      telephone: '+254726883765',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kenrail Towers, 3rd Floor, Southern Wing, Suite SW-3.3A, Mkungu Close, Off Parklands Rd',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi County',
        addressCountry: 'KE',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+254726883765',
          contactType: 'customer service',
          email: 'office@fkmadvocatesllp.com',
          areaServed: ['KE', 'East Africa'],
          availableLanguage: ['English', 'Swahili'],
        },
      ],
      sameAs: [],
    },

    {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#legalservice`,
      name: 'FKM Advocates LLP',
      url: SITE_URL,
      image: LOGO_URL,
      description:
        'FKM Advocates LLP provides comprehensive legal services including corporate & commercial law, litigation & dispute resolution, estate & probate, and real estate & conveyancing in Kenya.',
      foundingDate: '2014',
      priceRange: '$$',
      currenciesAccepted: 'KES',
      paymentAccepted: 'Cash, Bank Transfer, M-Pesa',
      telephone: '+254726883765',
      email: 'office@fkmadvocatesllp.com',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Legal Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Corporate & Commercial Law',
              url: `${SITE_URL}/practice-areas/corporate-commercial`,
              description:
                'Corporate formation, governance, contract negotiation, mergers & acquisitions, regulatory compliance, employment law, and intellectual property protection.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Litigation & Dispute Resolution',
              url: `${SITE_URL}/practice-areas/litigation`,
              description:
                'Commercial disputes, contract litigation, personal injury claims, property disputes, employment litigation, and alternative dispute resolution.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Estate & Probate',
              url: `${SITE_URL}/practice-areas/estate-probate`,
              description:
                'Will & testament drafting, trust administration, probate court proceedings, estate tax planning, guardianship matters, and asset protection.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Real Estate & Conveyancing',
              url: `${SITE_URL}/practice-areas/real-estate`,
              description:
                'Property acquisition & sales, lease agreements, title verification, land disputes, development agreements, and mortgage & financing.',
            },
          },
        ],
      },
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },

    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#nairobi`,
      name: 'FKM Advocates LLP — Nairobi',
      url: SITE_URL,
      image: LOGO_URL,
      telephone: '+254726883765',
      email: 'office@fkmadvocatesllp.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kenrail Towers, 3rd Floor, Southern Wing, Suite SW-3.3A, Mkungu Close, Off Parklands Rd',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi County',
        postalCode: '00100',
        addressCountry: 'KE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.2635,
        longitude: 36.8144,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },

    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#thika`,
      name: 'FKM Advocates LLP — Thika',
      url: SITE_URL,
      image: LOGO_URL,
      telephone: '+254726883765',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Thika Business Center, 5th Floor, Suite 5-07, Commercial Street',
        addressLocality: 'Thika',
        addressRegion: 'Kiambu County',
        addressCountry: 'KE',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

const StructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  </Helmet>
);

export default StructuredData;
