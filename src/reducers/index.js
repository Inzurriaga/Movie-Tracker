import { combineReducers } from 'redux';
import { getDiscover } from './getDiscover';
import { getGenres } from './getGenres';
import { favorites } from './favorites';
import { user } from "./user";

export const rootReducer = combineReducers({
  movies: getDiscover,
  user: user,
  genres: getGenres,
  favorites: favorites,
});
