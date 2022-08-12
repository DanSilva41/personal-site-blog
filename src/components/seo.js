import React from 'react';
import Helmet from 'react-helmet';

function SEO({ siteMetadata, title, description, slug, isBlogPost}) {
  const { title: defaultTitle, description: defaultDescription, siteBanner, siteUrl, twitter } = siteMetadata;

  if (siteUrl === '') {
    console.error('Please set a siteUrl in your site metadata!');
    return null;
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${siteBanner}`,
    url: `${siteUrl}${slug || ''}`,
    twitter
  }

  if (isBlogPost) {
    seo.title = `${seo.title} | Danilo Silva`;
    if (slug)
      seo.image = `${siteUrl}${slug}/social-banner-img.jpg`;
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="url" content={seo.url} />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <link rel="canonical" href={seo.url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={'@'+ seo.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

export default SEO;
