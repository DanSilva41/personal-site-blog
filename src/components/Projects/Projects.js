import React from 'react';
import styled from 'styled-components';

import PageHeader from '@common/PageHeader';

import SmallProjects from './SmallProjects';


const ProjectsWrapper = styled.section`
  ${props => props.theme.spacing.sectionBottom};
  margin-top: 250px;

  @media ${props => props.theme.media.fablet} {
    margin-top: 50px;
  }
`;
const Projects = () => {
  return (
    <ProjectsWrapper id="projects" style={{ marginBottom: 100 }}>
      <PageHeader>Side Projects</PageHeader>
      <SmallProjects />
    </ProjectsWrapper>
  );
};

export default Projects;
