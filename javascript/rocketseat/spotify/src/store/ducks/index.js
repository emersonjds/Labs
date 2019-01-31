import { combineReducers } from 'redux';
import playlists from './playlist';
import playlistDetails from './playlistDetails';
import error from './error';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
});
