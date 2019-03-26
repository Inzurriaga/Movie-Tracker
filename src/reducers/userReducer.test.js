import { userReducer } from './user';
import { user, signOutUser } from '../actions/index';


describe('userReducer', () => {

  it('should return the inital state', () => {
    const expected = {};

    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the state with a new user', () => {
    const expected = {id: 7, name: "a", password: "a", email: "a"}
    const action = user({id: 7, name: "a", password: "a", email: "a"});

    const initialState = {};
    const result = userReducer(initialState, action);

    expect(result).toEqual(expected);
  })

  it('should return the state with an empty new user', () => {
    const expected = {}
    const action = signOutUser(expected);

    const initialState = {id: 7, name: "a", password: "a", email: "a"};
    const result = userReducer(initialState, action);

    expect(result).toEqual(expected);
  })

})
