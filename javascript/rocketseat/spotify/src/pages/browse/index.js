import React from 'react';
import {
  Container, Title, List, PlayList,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <PlayList to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg/220px-Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg"
          alt="teste"
        />
        <strong>Teste</strong>
        <p>Lorem Ipsom</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg/220px-Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg"
          alt="teste"
        />
        <strong>Teste</strong>
        <p>Lorem Ipsom</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg/220px-Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg"
          alt="teste"
        />
        <strong>Teste</strong>
        <p>Lorem Ipsom</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg/220px-Radio_Music_Society_%28Esperanza_Spalding_album%29_cover.jpg"
          alt="teste"
        />
        <strong>Teste</strong>
        <p>Lorem Ipsom</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
