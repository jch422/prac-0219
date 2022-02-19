import React from 'react';
import styled from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkThemeToggler = ({ isDark, setIsDark }) => {
  const handleToggle = () => setIsDark((isDark) => !isDark);

  return <IconWrapper onClick={handleToggle}>{isDark ? <BsMoon size="20px" /> : <BsSun size="20px" />}</IconWrapper>;
};

export default DarkThemeToggler;

const IconWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  border-radius: 50%;
  padding: 5px;
  &:hover {
    background-color: #bdc3c7;
    cursor: pointer;
  }
`;
