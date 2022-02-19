import React from 'react';
import styled from 'styled-components';
import { MdDashboard } from 'react-icons/md';
import { HiChartBar, HiOutlinePresentationChartLine } from 'react-icons/hi';
import { BsPieChartFill } from 'react-icons/bs';

const Sidebar = () => {
  const menus = [
    {
      id: 1,
      icon: <MdDashboard size="20px" />,
      text: 'Dashboard',
    },
    {
      id: 2,
      icon: <HiChartBar size="20px" />,
      text: 'Cohort Comparison',
    },
    {
      id: 3,
      icon: <BsPieChartFill size="20px" />,
      text: 'Adverse Event Analysis',
    },
    {
      id: 4,
      icon: <HiOutlinePresentationChartLine size="20px" />,
      text: 'Pathway Analysis',
    },
  ];

  return (
    <Wrapper>
      <Menus>
        {menus.map((menu) => (
          <Menu key={menu.id}>
            {menu.icon}
            <span>{menu.text}</span>
          </Menu>
        ))}
      </Menus>
      <Footer>&copy; Healthcare. All rights reserved.</Footer>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  border-right: 1px solid rgba(52, 73, 94, 0.2);
  width: 280px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const Menus = styled.section``;

const Menu = styled.button`
  display: flex;
  width: 100%;
  background: none;
  border: none;
  padding: 20px 0px 20px 20px;
  color: #2b363c;
  & > span {
    font-size: 18px;
    margin-left: 20px;
  }
  &:hover,
  &:focus {
    background: rgba(52, 152, 219, 0.1);
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 10px;
  font-size: 12px;
  color: #34495e;
  margin-left: 50px;
`;
