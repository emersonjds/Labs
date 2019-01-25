import React from 'react';
import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

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

    <Songlist cellpadding={0} cellspacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="timer" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="plus" />
          </td>
          <td>Papercut</td>
          <td>Linkin Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
);

export default Playlist;
