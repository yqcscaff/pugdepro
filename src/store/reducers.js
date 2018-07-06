import { combineReducers } from 'redux';
import movielist from './movielist';
import overview from './overview';

export default combineReducers({
  movielist: movielist.reducer,
  overview: overview.reducer
});