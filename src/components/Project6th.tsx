import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import exchangeImage from "../assets/project/6th_1.svg";
import sixth2Image from "../assets/project/6th_2.svg";
import cardifyImage from "../assets/project/cardify.svg";
import kiokiImage from "../assets/project/kioki.svg";
import kkjukImage from "../assets/project/kkijuk.svg";
import letsgoImage from "../assets/project/letsgo.svg";
import mediformeImage from "../assets/project/mediforme.svg";
import stepperImage from "../assets/project/stepper.svg";
import wesaveImage from "../assets/project/wesave.svg";
import routeporterImage from "../assets/project/routeporter.svg";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px auto;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const ProjectCard = styled(motion.div)`
  text-align: center;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  max-width: 350px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }

   @media (max-width: 375px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 395px) {
    max-width: 310px;
    padding: 10px;
  }

  @media (max-width: 345px) {
    max-width: 280px;
    padding: 10px;
  }
`;

const ProjectTitle = styled.h2`
  margin: 10px 0 5px;
  font-size: 1.2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #d0d0d0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const PageButton = styled.button<{ active: boolean }>`
  margin: 0 5px;
  padding: 8px 12px;
  background: ${(props) => (props.active ? "#174242" : "#1c5151")};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #174242;
  }

  @media (max-width: 768px) {
    padding: 5px 8px;
    font-size: 0.8rem;
  }
`;

const Project6: React.FC<{ frontendFilter: string; backendFilter: string }> = ({
  frontendFilter,
  backendFilter,
}) => {
  const projects = [
    { id: 1, title: "교환하자", description: "당신의 교환학생 라이프를 레벨업 하다", image: exchangeImage, frontend: "Android", backend: "Spring" },
    { id: 2, title: "비거닝", description: "장벽을 넘는 비건의 시작", image: sixth2Image, frontend: "iOS", backend: "Node" },
    { id: 3, title: "CARDIFY", description: "지능적인 플래시 카드 학습 서비스", image: cardifyImage, frontend: "Web", backend: "Spring" },
    { id: 4, title: "Kioki(키오키)", description: "키오스크 이용도움 서비스", image: kiokiImage, frontend: "Android", backend: "Spring" },
    { id: 5, title: "끼적", description: "대학생을 위한 아카이빙 서비스", image: kkjukImage, frontend: "Web", backend: "Spring" },
    { id: 6, title: "가볼까", description: "여행 계획 서비스", image: letsgoImage, frontend: "Web", backend: "Node" },
    { id: 7, title: "MEDIFORME", description: "다제약물 중재 관리 앱", image: mediformeImage, frontend: "Android", backend: "Spring" },
    { id: 8, title: "STEPPER", description: "재활 루틴 서비스", image: stepperImage, frontend: "Android", backend: "Spring" },
    { id: 9, title: "WeSave", description: "재난정보 공유 서비스", image: wesaveImage, frontend: "Android", backend: "Spring" },
    { id: 10, title: "Route Porter", description: "AI 여행지 추천 서비스", image: routeporterImage, frontend: "Web", backend: "Node" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProjects = projects.filter(
    (project) =>
      (frontendFilter === "" || project.frontend === frontendFilter) &&
      (backendFilter === "" || project.backend === backendFilter)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProjectGrid>
        <AnimatePresence mode="wait">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCard>
          ))}
        </AnimatePresence>
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

export default Project6;
