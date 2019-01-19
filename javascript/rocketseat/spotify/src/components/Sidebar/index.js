import React from 'react';
import { Container, NewPlaylist } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div />
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
