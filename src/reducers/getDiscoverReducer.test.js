import { getDiscoverReducer } from './getDiscover';
import { getDiscover } from '../actions/index';


describe('getDiscoverReducer', () => {

  it('should return the inital state', () => {
    const expected = [];

    const result = getDiscoverReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the state with a new array of movies', () => {

    const expected = [
      {
        adult: false,
        backdrop_path: "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
        genre_ids: [16, 10751, 12],
        id: 166428,
        title: "How to Train Your Dragon: The Hidden World",
      },
      {
        adult: false,
        backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
        genre_ids: [28, 12, 878],
        id: 299537,
        title: "Captain Marvel",
      }
    ];
    const action = getDiscover(expected);

    const initialState = [];
    const result = getDiscoverReducer(initialState, action);

    expect(result).toEqual(expected);
})

})
