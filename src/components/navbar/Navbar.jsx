import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import DarkThemeToggler from './DarkThemeToggler.jsx';

const Navbar = ({ isDark, setIsDark }) => {
  const [isTop, setIsTop] = useState(window.pageYOffset === 0);

  useEffect(() => {
    const handleScroll = () => setIsTop(window.pageYOffset === 0);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper isTop={isTop}>
      <Logo>Healthcare CLUE</Logo>
      <NavButton>Analysis</NavButton>
      <NavButton>Summary</NavButton>
      <NavButton>Cohort List</NavButton>
      <Search>
        <BsSearch />
        <span>Concept Search</span>
      </Search>
      <Download>Download</Download>
      <DarkThemeToggler isDark={isDark} setIsDark={setIsDark} />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  color: #405059;
  border-bottom: 1px solid rgba(52, 73, 94, 0.2);
  background: #fff;
  ${({ isTop }) =>
    !isTop &&
    `
    -webkit-box-shadow: 0px 0px 10px 1px rgba(52, 73, 94, 0.6);
    box-shadow: 0px 0px 10px 1px rgba(52, 73, 94, 0.6);
  `}
`;

const Logo = styled.div`
  margin-right: 40px;
  font-size: 20px;
`;

const NavButton = styled.button`
  padding: 0 10px;
  margin: 0 10px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-bottom: 2px solid transparent;
  color: #405059;
  &:hover,
  &:focus {
    border-bottom: 2px solid #7f8c8d;
    color: #10171a;
  }
`;

const Search = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  & > span {
    margin-left: 5px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Download = styled.div`
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
