import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { getGenres } from './getGenres';
import { user } from "./addUser";

export const rootReducer = combineReducers({
  movies: getMovies,
  user: user,
  genres: getGenres
});
