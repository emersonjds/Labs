import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Container, Header, Songlist } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && (
            <p>
              {playlist.songs.length}
              {' '}
              Numero de musicas
            </p>
            )}
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
              {!playlist.songs ? (
                <tr>
                  <td colSpan={5}>Nenhuma musica cadastrada</td>
                </tr>
              ) : (
                playlist.songs.map(song => (
                  <tr key={song.id}>
                    <td>
                      <img src={PlusIcon} alt="plus" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.album}</td>
                    <td>3:26</td>
                  </tr>
                ))
              )}
            </tr>
          </tbody>
        </Songlist>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        {' '}
        <Loading />
        {' '}
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
