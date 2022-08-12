import React from 'react';
import styled from 'styled-components';

import PageHeader from '@src/components/common/PageHeader';
import { Hidden } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from '@src/components/common/Flex';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const SkillsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  position: relative;
  .skill__icons {
    padding: 30px 0;
    @media ${props => props.theme.media.tablet} {
      padding: 10px 0;
    }

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
  .skills__word-clouds {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }

    p {
      position: absolute;
      color: ${props => props.theme.accentColor};
      z-index: -1;
      left: 0;
      right: 0;
      font-weight: 900;
      user-select: none;
    }
    z-index: -1;
  }
`;

const WordClouds = () => {
  return (
    <Parallax
      y={['-350px', '-150px']}
      slowerScrollRate={true}
      aria-hidden="true"
      className="skills__word-clouds"
    >
      <p style={{ top: 0, left: 0, fontSize: 25 }}>Spring</p>
      <p style={{ top: 130, left: -60, fontSize: 23 }}>Quarkus</p>
      <p style={{ top: 300, left: -20, fontSize: 18 }}>Maven</p>
      <p style={{ top: 350, left: 150, fontSize: 20 }}>Gradle</p>
      <p style={{ top: 120, left: '22%', fontSize: 13 }}>CI/CD</p>
      <p style={{ top: '30%', left: '35%', fontSize: 18 }}>DevOps</p>
      <p style={{ top: '35%', left: '55%', fontSize: 18 }}>AWS</p>
      <p style={{ top: 40, left: '75%', fontSize: 18 }}>SQL</p>
      <p style={{ top: 80, left: '95%', fontSize: 18 }}>NoSQL</p>
      <p style={{ top: 380, left: '85%', fontSize: 14 }}>CSS3</p>
      <p style={{ top: 320, left: '65%', fontSize: 18 }}>HTML5</p>
      <p style={{ top: 300, left: '35%', fontSize: 18 }}>React</p>
    </Parallax>
  );
};

const Skills = () => (
  <Hidden md xs sm>
    <SkillsWrapper>
      <ParallaxProvider>
        <PageHeader>My Skillsets</PageHeader>

        {/* <SkillPie percent={90} name={"JavaScript"} /> */}
        <Flex className="skill__icons" justify="space-around" align="center">
          <FontAwesomeIcon icon={['fab', 'java']} size="5x" />
          <FontAwesomeIcon icon={['fab', 'docker']} size="5x" />
          <FontAwesomeIcon icon={['fab', 'angular']} size="5x" />
          <Hidden md xs sm>
            <FontAwesomeIcon icon={['fab', 'js']} size="5x" />
          </Hidden>
          <FontAwesomeIcon icon={['fab', 'node']} size="5x" />
        </Flex>

        <Hidden md xs sm>
          <WordClouds />
        </Hidden>
      </ParallaxProvider>
    </SkillsWrapper>
  </Hidden>
);

export default Skills;
