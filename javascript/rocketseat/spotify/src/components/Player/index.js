import React from 'react';
import { Container, Current } from './styles';

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91OKWPQcuEL._SL1500_.jpg"
        alt="Teste"
      />
      <div>
        <span> Times Like This</span>
        <small>Teste</small>
      </div>
    </Current>
  </Container>
);

export default Player;
