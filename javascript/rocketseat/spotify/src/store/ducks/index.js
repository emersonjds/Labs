import { combineReducers } from 'redux';
import playlists from './playlist';
import playlistDetails from './playlistDetails';

export default combineReducers({
  playlists,
  playlistDetails,
});
