import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, NewPlaylist, Nav } from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlist';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

// eslint-disable-next-line react/prefer-stateless-function
class SideBar extends Component {
  componentDidMount() {
    this.props.getPlaylistRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="www.googe.com"> Navegar </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Biblioteca</span>
            </li>
            <li>
              <a href="www.googe.com"> Seu Daily Mix </a>
            </li>
            <li>
              <a href="www.googe.com"> Tocados Recentemente </a>
            </li>
            <li>
              <a href="www.googe.com"> Musicas </a>
            </li>
            <li>
              <a href="www.googe.com"> Albuns </a>
            </li>
            <li>
              <a href="www.googe.com"> Artistas </a>
            </li>
            <li>
              <a href="www.googe.com"> Estações </a>
            </li>
            <li>
              <a href="www.googe.com"> Arquivos Locais </a>
            </li>
            <li>
              <a href="www.googe.com"> Videos </a>
            </li>
            <li>
              <a href="www.googe.com"> Podcasts </a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
            </li>
            {this.props.playlists.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
