import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { favorites } from './favorites';
import { user } from "./user";

export const rootReducer = combineReducers({
  movies: getMovies,
  user: user,
  favorites: favorites,
});
