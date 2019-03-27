import React from 'react';
import { MovieInfo, mapStateToProps, mapDispatchToProps } from './MovieInfo';
import { addFavorite, removeFavorite } from "../../actions/index"
import { shallow } from 'enzyme';

const mockFavorite = [123,1234,2341,1235];
const mockUser = {}

describe('MovieInfo', () => {
  describe('MovieInfo Component', () => {
    let movieInfoCompenent;
    beforeEach(() => {
      movieInfoCompenent = shallow(<MovieInfo user={mockUser} favorites={mockFavorite}                                          movieID={123}/>)
    })

    it('should match the snapshot', () => {
      expect(movieInfoCompenent).toMatchSnapshot()
    })

    it('should have default properties', () => {
      expect(movieInfoCompenent.state()).toEqual({
        currentMovie: [],
        favoriteStatus: false,
      });
    })

    it('should match the snapshot and show favorite button if user exists', () => {

      expect(movieInfoCompenent).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {
    it('should return a object', () => {
      const mockState = {
        user: {},
        favorites: [{},{},{}],
        movies: []
      };
      const expected = {
        user: {},
        favorites: [{},{},{}]
      };
       const result = mapStateToProps(mockState);
       expect(result).toEqual(expected)
    })
  })

  describe('mapDispstchToProps', () => {
    it('should addFavorite been called with input argument', () => {
      const mockDispatch = jest.fn();
      const mockFavorite = 123;
      const actionToDispatch = addFavorite(mockFavorite);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addFavorite(mockFavorite);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
    it('should removeFavorite been called with input argument ', () => {
      const mockDispatch = jest.fn();
      const mockFavorite = 123;
      const actionToDispatch = removeFavorite(mockFavorite);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.removeFavorite(mockFavorite);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})
