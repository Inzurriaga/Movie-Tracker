import { combineReducers } from 'redux';
import { getMovies } from './getMovies';

export const rootReducer = combineReducers({
  movies: getMovies,
});
