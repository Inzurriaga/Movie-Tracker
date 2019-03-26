import { combineReducers } from 'redux';
import { getDiscover } from './getDiscover';
import { genresReducer } from './getGenres';
import { favorites } from './favorites';
import { user } from "./user";

export const rootReducer = combineReducers({
  movies: getDiscover,
  user: user,
  genres: genresReducer,
  favorites: favorites,
});
