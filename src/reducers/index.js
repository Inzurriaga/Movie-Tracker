import { combineReducers } from 'redux';
import { getDiscoverReducer } from './getDiscover';
import { getGenres } from './getGenres';
import { favorites } from './favorites';
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  movies: getDiscoverReducer,
  user: userReducer,
  genres: getGenres,
  favorites: favorites,
});
