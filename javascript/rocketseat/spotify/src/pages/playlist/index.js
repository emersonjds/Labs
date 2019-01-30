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
    return (
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
    )
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
