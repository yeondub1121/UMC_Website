import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Sixth_Project from '../components/project/6th_Project';
import Seventh_Project from '../components/project/7th_Project';

const ProjectContainer = styled.div<{ extendHeight: boolean }>`
  min-height: 100vh;
  height: ${(props) => (props.extendHeight ? 'auto' : '100vh')};
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
`;

const Header = styled.h1`
  font-size: 25px;
  color: white;
  margin: 0;
  margin-bottom: 20px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: -5px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px; 

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;


const DropdownArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: black;
  border-radius: 15px;
  padding: 10px;
  list-style: none;
  margin: 0;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1000;
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
`;


const Project: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedFrontend, setSelectedFrontend] = useState('');
  const [selectedBackend, setSelectedBackend] = useState('');
  const [batchDropdownOpen, setBatchDropdownOpen] = useState(false);
  const [frontendDropdownOpen, setFrontendDropdownOpen] = useState(false);
  const [backendDropdownOpen, setBackendDropdownOpen] = useState(false);
  const [extendHeight, setExtendHeight] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdownSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
    dropdownSetter((prev) => !prev);
  };

  const handleSelectBatch = (item: string) => {
    setSelectedBatch(item === '전체' ? '' : item);
    setBatchDropdownOpen(false); 
  };

  const handleSelectFrontend = (item: string) => {
    setSelectedFrontend(item === '전체' ? '' : item);
    setFrontendDropdownOpen(false); 
  };

  const handleSelectBackend = (item: string) => {
    setSelectedBackend(item === '전체' ? '' : item);
    setBackendDropdownOpen(false); 
  };

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (contentHeight > viewportHeight - 80) {
        setExtendHeight(true);
      } else {
        setExtendHeight(false);
      }
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
              {selectedBatch || '기수'}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={batchDropdownOpen}>
              <DropdownItem onClick={() => handleSelectBatch('전체')}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectBatch('6기')}>6기</DropdownItem>
              <DropdownItem onClick={() => handleSelectBatch('7기')}>7기</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          {/* 프론트엔드 선택 드롭다운 */}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown(setFrontendDropdownOpen)}>
              {selectedFrontend || 'Frontend'}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={frontendDropdownOpen}>
              <DropdownItem onClick={() => handleSelectFrontend('전체')}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend('Web')}>Web</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend('iOS')}>iOS</DropdownItem>
              <DropdownItem onClick={() => handleSelectFrontend('Android')}>Android</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>

          {/* 백엔드 선택 드롭다운 */}
          <DropdownContainer>
            <DropdownButton onClick={() => toggleDropdown(setBackendDropdownOpen)}>
              {selectedBackend || 'Backend'}
              <DropdownArrow />
            </DropdownButton>
            <DropdownMenu show={backendDropdownOpen}>
              <DropdownItem onClick={() => handleSelectBackend('전체')}>전체</DropdownItem>
              <DropdownItem onClick={() => handleSelectBackend('Spring')}>SpringBoot</DropdownItem>
              <DropdownItem onClick={() => handleSelectBackend('Node')}>Node.js</DropdownItem>
            </DropdownMenu>
          </DropdownContainer>
        </DropdownWrapper>

        <div ref={contentRef}>
          {/* 7기 선택 시에만 Seventh_Project 렌더링 */}
          {selectedBatch === '7기' ? (
            <Seventh_Project />
          ) : (
            <Sixth_Project frontendFilter={selectedFrontend} backendFilter={selectedBackend} />
          )}
        </div>
      </ProjectContainer>
    </>
  );
};

export default Project;

