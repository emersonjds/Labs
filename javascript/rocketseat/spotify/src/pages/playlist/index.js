import React from 'react';
import { Container, Header } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg/220px-Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg"
        alt="teste"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>ROCK</h1>
        <p>Numero de musicas</p>
        <button type="button">play</button>
      </div>
    </Header>
  </Container>
);

export default Playlist;
