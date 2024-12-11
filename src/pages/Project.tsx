import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;

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
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid white;
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

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Project: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('기수');

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <ProjectContainer>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {selectedItem}
          <DropdownArrow />
        </DropdownButton>
        <DropdownMenu show={isDropdownOpen}>
          <DropdownItem onClick={() => handleSelect('6기')}>6기</DropdownItem>
          <DropdownItem onClick={() => handleSelect('7기')}>7기</DropdownItem>
        </DropdownMenu>
      </DropdownContainer>
    </ProjectContainer>
  );
};

export default Project;
