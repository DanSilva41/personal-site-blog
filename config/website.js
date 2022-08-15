const meta = {
  // Metadata
  siteTitle: 'Danilo Silva',
  siteDescription:
    'Danilo Silva - Creative software engineer who loves java and modern cloud technologies.',
  siteTitleAlt: 'Danilo Silva',
  siteShortName: 'Danilo Silva',
  siteUrl: 'https://danilosilva.tk', // No trailing slash!
};

const owner = {
  ownerName: 'Danilo Silva',
  ownerOccupation: 'Senior software engineer',
  ownerCompany: 'Jaya',
  ownerCompanySite: 'jaya.tech'
}

const social = {
  siteLogo: `src/static/favicon-developer.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  github: 'DanSilva41',
  linkedin: 'danilosilvap',
  twitter: 'dansilva41',
};

const website = {
  ...meta,
  ...social,
  ...owner,
  disqusShortName: 'danilosilva',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
