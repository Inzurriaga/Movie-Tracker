import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { getGenres } from './getGenres';
import { favorites } from './favorites';
import { user } from "./user";

export const rootReducer = combineReducers({
  movies: getMovies,
  user: user,
  genres: getGenres,
  favorites: favorites,
});
