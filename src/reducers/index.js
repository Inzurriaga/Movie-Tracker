import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { user } from "./addUser";

export const rootReducer = combineReducers({
  movies: getMovies,
  user: user
});
