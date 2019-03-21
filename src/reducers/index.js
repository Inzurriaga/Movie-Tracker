import { combineReducers } from 'redux';
import { getMovies } from './getMovies';
import { addUser } from "./addUser";

export const rootReducer = combineReducers({
  movies: getMovies,
  addUser: addUser
});
