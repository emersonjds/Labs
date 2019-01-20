import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/components';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  </Fragment>
);

export default App;
