import React from 'react';
import styled from 'styled-components';
import waitingImage from '../assets/waitingimage.svg'; 

const ProjectDisplay = styled.div`
  margin-top: 40px;
  text-align: center;
  width: 600px;
`;

const ProjectImage = styled.img`
  max-width: 600px;
  border-radius: 15px;
`;

/* const ProjectTitle = styled.h2`
  margin: 20px 0 10px;
  font-size: 22px;
`; */

/* const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`; */

const Project7: React.FC = () => (
  <ProjectDisplay>
    <ProjectImage src={waitingImage} alt="7기 프로젝트" />
  </ProjectDisplay>
);

export default Project7;
