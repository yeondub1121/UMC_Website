import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Project6 from "../components/Project6th";
import Project7 from "../components/Project7th";


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const ProjectContainer = styled.div<{ extendHeight: boolean }>`
  min-height: 100vh;
  height: ${(props) => (props.extendHeight ? "auto" : "100vh")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-bottom: 80px;
  background: linear-gradient(
    180deg,
    #174242 17%,
    #1c5151 45%,
    #1f5c5c 60%,
    #236868 75%
  );
  color: white;
  font-family: Arial, sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    padding-bottom: 40px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    padding-bottom: 20px;
  }
`;


const Header = styled.h1`
  font-family: SemiBold;
  font-size: 25px;
  color: white;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;


const ContentWrapper = styled.div`
  animation: ${fadeIn} 1.5s ease-out;
`;


const DropdownWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: -5px;
  justify-content: center; 

  @media (max-width: 768px) {
    gap: 10px; 
  }
`;


const DropdownButton = styled.button`
  background: transparent;
  border: 0.9px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-family: Regular;
  gap: 10px;
  height: 50px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 500px) {
    padding: 8px 15px; 
    font-size: 14px; 
    height: 40px; 
    border: 0.6px solid white;
    border-radius: 13px;
  }

  @media (max-width: 400px) {
    padding: 5px 10px; 
    font-size: 12px; 
    height: 35px; 
    border: 0.5px solid white;
    border-radius: 13px;
  }
`;


const DropdownArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
`;


const DropdownMenu = styled.ul<{ show: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  font-family: Regular;
  transform: translateX(-50%) ${(props) => (props.show ? "translateY(0)" : "translateY(-10px)")};
  background: black;
  border-radius: 15px;
  padding: 10px;
  list-style: none;
  margin: 0;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: translateX(0) ${(props) => (props.show ? "translateY(0)" : "translateY(-10px)")};
  }
`;


const DropdownItem = styled.li`
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Project: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedFrontend, setSelectedFrontend] = useState("");
  const [selectedBackend, setSelectedBackend] = useState("");
  const [batchDropdownOpen, setBatchDropdownOpen] = useState(false);
  const [frontendDropdownOpen, setFrontendDropdownOpen] = useState(false);
  const [backendDropdownOpen, setBackendDropdownOpen] = useState(false);
  const [extendHeight, setExtendHeight] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdownSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    dropdownSetter((prev) => !prev);
  };

  const handleSelectBatch = (item: string) => {
    setSelectedBatch(item === "전체" ? "" : item);
    setBatchDropdownOpen(false);
  };

  const handleSelectFrontend = (item: string) => {
    setSelectedFrontend(item === "전체" ? "" : item);
    setFrontendDropdownOpen(false);
  };

  const handleSelectBackend = (item: string) => {
    setSelectedBackend(item === "전체" ? "" : item);
    setBackendDropdownOpen(false);
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      setExtendHeight(contentHeight > viewportHeight - 80);
    }
  }, [selectedBatch, selectedFrontend, selectedBackend]);

  return (
    <>
      <ProjectContainer extendHeight={extendHeight}>
        <Header>UMC DemoDay Project</Header>

        <DropdownWrapper>
          {/* 기수 선택 드롭다운 */}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown(setBatchDropdownOpen)}>
              {selectedBatch || "기수"}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={batchDropdownOpen}>
              <DropdownItem onClick={() => handleSelectBatch("전체")}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectBatch("6기")}>6기</DropdownItem>
              <DropdownItem onClick={() => handleSelectBatch("7기")}>7기</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          {/* 프론트엔드 선택 드롭다운 */}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown(setFrontendDropdownOpen)}>
              {selectedFrontend || "Frontend"}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={frontendDropdownOpen}>
              <DropdownItem onClick={() => handleSelectFrontend("전체")}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend("Web")}>Web</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend("iOS")}>iOS</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend("Android")}>Android</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          {/* 백엔드 선택 드롭다운 */}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown(setBackendDropdownOpen)}>
              {selectedBackend || "Backend"}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={backendDropdownOpen}>
              <DropdownItem onClick={() => handleSelectBackend("전체")}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectBackend("Spring")}>SpringBoot</DropdownItem>
              <DropdownItem onClick={() => handleSelectBackend("Node")}>Node.js</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        </DropdownWrapper>

        <ContentWrapper key={`${selectedBatch}-${selectedFrontend}-${selectedBackend}`} ref={contentRef}>
          {/* 프로젝트 컴포넌트 */}
          {selectedBatch === "7기" ? (
            <Project7 />
          ) : (
            <Project6 frontendFilter={selectedFrontend} backendFilter={selectedBackend} />
          )}
        </ContentWrapper>
      </ProjectContainer>
    </>
  );
};

export default Project;
