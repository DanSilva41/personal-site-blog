
import React from 'react';
import Layout from '@components/Layout/Layout';
import SEO from '@components/seo';

import About from '@components/About/About';
import Contact from '@components/Contact/Contact';
import Home from '@components/Home/Home';
import Skills from '@components/Skills/Skills';
import { useSiteMetadata } from '@hooks/use-site-metadata';
import Projects from '../components/Projects/Projects';

const IndexPage = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <SEO siteMetadata={siteMetadata} />

      <Home social={siteMetadata.social} owner={siteMetadata.owner} />
      <About owner={siteMetadata.owner} />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
