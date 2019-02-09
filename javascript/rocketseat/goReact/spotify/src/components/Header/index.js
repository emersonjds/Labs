import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/12503997?v=4" alt="avatar" />
      Emerson Silva
    </User>
  </Container>
);

export default Header;
