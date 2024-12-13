import React, { useState } from 'react';
import styled from 'styled-components';
import exchangeImage from '../../assets/project/6th_1.svg';
import sixth2Image from '../../assets/project/6th_2.svg';
import cardifyImage from '../../assets/project/cardify.svg';
import kiokiImage from '../../assets/project/kioki.svg';
import kkjukImage from '../../assets/project/kkijuk.svg';
import letsgoImage from '../../assets/project/letsgo.svg';
import mediformeImage from '../../assets/project/mediforme.svg';
import stepperImage from '../../assets/project/stepper.svg';
import wesaveImage from '../../assets/project/wesave.svg';
import routeporterImage from '../../assets/project/routeporter.svg';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 10px; 
  margin-top: 30px;
  width: 45%; 
  justify-items: center; 
`;

const ProjectCard = styled.div`
  text-align: center;
  width: 350px; 
  max-width: 350px; 
  padding: 15px; 
`;

const ProjectImage = styled.img`
  width: 355px; 
  height: 210px; 
  object-fit: cover; 
  border-radius: 10px;
  margin: 0 auto; 
`;

const ProjectTitle = styled.h2`
  margin: 15px 0 10px;
  font-size: 18px; 
`;

const ProjectDescription = styled.p`
  font-size: 14px; 
  line-height: 1.5;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  background: ${(props) => (props.active ? '#174242' : '#1c5151')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #174242;
  }
`;

const Sixth_Project: React.FC<{ frontendFilter: string; backendFilter: string }> = ({
  frontendFilter,
  backendFilter,
}) => {
  const projects = [
    { id: 1, title: '교환하자', description: '당신의 교환학생 라이프를 레벨업 하다', image: exchangeImage, frontend: 'Android', backend: 'Spring' },
    { id: 2, title: '비거닝', description: '장벽을 넘는 비건의 시작', image: sixth2Image, frontend: 'iOS', backend: 'Node' },
    { id: 3, title: 'CARDIFY', description: '지능적인 플래시 카드 학습 서비스', image: cardifyImage, frontend: 'Web', backend: 'Spring' },
    { id: 4, title: 'Kioki(키오키)', description: '키오스크 이용도움 서비스', image: kiokiImage, frontend: 'Android', backend: 'Spring' },
    { id: 5, title: '끼적', description: '대학생을 위한 아카이빙 서비스', image: kkjukImage, frontend: 'Web', backend: 'Spring' },
    { id: 6, title: '가볼까', description: '여행 계획 서비스', image: letsgoImage, frontend: 'Web', backend: 'Node' },
    { id: 7, title: 'MEDIFORME', description: '다제약물 중재 관리 앱', image: mediformeImage, frontend: 'Android', backend: 'Spring' },
    { id: 8, title: 'STEPPER', description: '재활 루틴 서비스', image: stepperImage, frontend: 'Android', backend: 'Spring' },
    { id: 9, title: 'WeSave', description: '재난정보 공유 서비스', image: wesaveImage, frontend: 'Android', backend: 'Spring' },
    { id: 10, title: 'Route Porter', description: 'AI 여행지 추천 서비스', image: routeporterImage, frontend: 'Web', backend: 'Node' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 필터링된 프로젝트
  const filteredProjects = projects.filter(
    (project) =>
      (frontendFilter === '' || project.frontend === frontendFilter) &&
      (backendFilter === '' || project.backend === backendFilter)
  );

  // 현재 페이지에 해당하는 프로젝트를 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProjectGrid>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <PaginationContainer>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageClick(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationContainer>
    </>
  );
};

export default Sixth_Project;
