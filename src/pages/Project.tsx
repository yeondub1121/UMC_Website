import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg, 

    #174242 17%,
    #1c5151 45%,
    #1f5c5c 60%,
    #236868 75%

  );
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Project: React.FC = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Project Page</ProjectTitle>
    </ProjectContainer>
  );
};

export default Project;
