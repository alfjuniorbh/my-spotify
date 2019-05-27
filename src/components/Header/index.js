import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/2363796?v=4" alt="Avatar" />
      Junior Ferreira
    </User>
  </Container>
);

export default Header;
