import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Title, List, PlayList,
} from './styles';
import { Creators as PlaylistActions } from '../../store/ducks/playlist';

import Loading from '../../components/Loading';

class Browse extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          tittle: PropTypes.string,
          thimbnail: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistRequest } = this.props;
    getPlaylistRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>
          Navegar
          {playlists.loading && <Loading />}
          {' '}
        </Title>
        <List>
          {playlists.data.map(playlist => (
            <PlayList key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </PlayList>
          ))}
        </List>
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
)(Browse);
