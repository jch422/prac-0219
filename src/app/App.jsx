import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/navbar/Navbar.jsx';
import Sidebar from '../components/sidebar/Sidebar.jsx';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Container>
        <Sidebar />
        <Content></Content>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div``;
