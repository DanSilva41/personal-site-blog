import React from 'react';
import { graphql } from 'gatsby';

import SEO from '@components/seo';
import Layout from '@components/Layout/Layout';

import BlogLayout from '@components/Blog/BlogLayout';
import SocialShareSection from '@components/Blog/SocialShareSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BlogDateAndReadTime } from '@components/Blog/BlogCard';
import { DiscussionEmbed } from 'disqus-react';

import { siteUrl, disqusShortName } from '../../config/website';
import { useSiteMetadata } from '@hooks/use-site-metadata';

const BlogPost = ({ data, pageContext }) => {
  const { title, date } = data.markdownRemark.frontmatter;
  const { timeToRead, html, excerpt, id } = data.markdownRemark;

  const baseSlugUrl = siteUrl + pageContext.slug;
  const disqusConfig = {
    identifier: id,
    title: title,
    url: baseSlugUrl,
  };

  const githubLink = `https://github.com/anuraghazra/anuraghazra.github.io/tree/develop/content${pageContext.slug}/index.md`;
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <SEO
        isBlogPost
        title={title}
        description={excerpt}
        slug={pageContext.slug}
        siteMetadata={siteMetadata}
      />

      <BlogLayout
        sharerSection={
          <div>
            <hr style={{ margin: '10px 0' }} />
            <h4>Share on</h4>
            <SocialShareSection baseSlugUrl={baseSlugUrl} title={title} />
          </div>
        }
        isBlogPost
      >
        <BlogDateAndReadTime date={date} readtime={timeToRead} />
        <h1>{title}</h1>
        <article
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </BlogLayout>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      timeToRead
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "en")
        title
      }
    }
  }
`;

export default BlogPost;
