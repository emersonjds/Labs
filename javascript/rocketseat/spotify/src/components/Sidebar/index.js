import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlist';
import { Container, NewPlaylist, Nav } from './styles';
import Loading from '../Loading';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

// eslint-disable-next-line react/prefer-stateless-function
class SideBar extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          tittle: PropTypes.string,
        }),
      ),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { getPlaylistRequest } = this.props;
    getPlaylistRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/"> Navegar </Link>
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
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>

          <NewPlaylist>
            <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
            Nova Playlist
          </NewPlaylist>
        </div>
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
