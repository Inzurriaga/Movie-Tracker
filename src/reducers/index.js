import { combineReducers } from 'redux';
import { genresReducer } from './getGenres';
import { getDiscoverReducer } from './getDiscover';
import { favorites } from './favorites';
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  genres: genresReducer,
  movies: getDiscoverReducer,
  user: userReducer,
  favorites: favorites,
});
