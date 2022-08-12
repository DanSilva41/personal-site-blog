import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';
import { graphql, useStaticQuery } from "gatsby";

const About = ({ owner }) => {
  const recommendations = useStaticQuery(
    graphql`
      query {
        allRecommendationsJson {
          edges {
            node {
              author
              authorLink
              description
            }
          }
        }
      }
    `
  ).allRecommendationsJson.edges.map(q => q.node);

  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="main.jpg" />
        </div>
        <p>
          Hi, I'm {owner.name}, {owner.occupation} with Java expertise from
          Brazil.
          <br />
          Currently, I'm working at{' '}
          <a className="about__link" href={"//" + owner.companySite} target="_blank" rel="noreferrer">
            {owner.company}
          </a>{' '}
          <br /><br />
          With experience in defining, building, implementing and testing applications, delivering complex back-end and web products using various programming languages ​​and technologies.
          <br />
          Well suited to good practices and agile methodologies, I try to progressively learn new technologies, frameworks and concepts, with the aim of making products in their best version.
        </p>
      </AboutInfo>


      <Flex justify="space-between" className="quotes__wrapper">
        {recommendations.map((r, index) => (
          <Quote author={r.author} authorLink={r.authorLink} key={index}>
            <p>“{r.description}“</p>
          </Quote>
        ))}
      </Flex>
    </AboutWrapper>
  );
};

export default About;
