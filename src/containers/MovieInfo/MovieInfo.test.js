import React from 'react';
import { MovieInfo, mapStateToProps, mapDispatchToProps } from './MovieInfo';
import { addFavorite, removeFavorite } from "../../actions/index"
import { shallow } from 'enzyme';
import { fetchMovies } from "../../api/index"
jest.mock("../../api/index")



const mockFavorite = ['123','1234','2341','1235'];
const mockUser = {}
const mockId = '123';
const mockCurrentMovie = [{
  backdrop_path: "/ADJ6V8W96It4KElY2SPZvkKPBR.jpg",
  vote_average: 7.4,
  id: 458723,
  poster_path: "/ux2dU1jQ2ACIMShzB3yP93",
  overview: "Husband and wife Gabe and",
  tagline: "Watch yourself",
  title: "Us",
  backdrop_path: "/ADJ6V8W96It4KElY2SP",
  release_date: "2019-03-14",
  videos: { results: [{id: "5c2238fc0e0a264df2ef7cd4"}] }
}]
const mockhandleFavorite = jest.fn();

describe('MovieInfo', () => {
  describe('MovieInfo Component', () => {
    let movieInfoCompenent;

    let mockhandleAdd = jest.fn();
    beforeEach(() => {
      movieInfoCompenent = shallow(<MovieInfo user={mockUser}
                                              favorites={mockFavorite}
                                              movieID={mockId}
                                              removeFavorite={mockhandleFavorite}
                                              addFavorite={mockhandleAdd}
                                            />)

    })

    it('should have default properties', () => {
      expect(movieInfoCompenent.state()).toEqual({
        favoriteStatus: false,
      });
    })

    it('should match the snapshot if there is a currentMovie', () => {
      movieInfoCompenent.setState({
        currentMovie: mockCurrentMovie,
      })
      expect(movieInfoCompenent).toMatchSnapshot()
    })

    it('should match the snapshot and show favorite button if a user exists', () => {
      movieInfoCompenent.setState({
        currentMovie: mockCurrentMovie,
      })
      movieInfoCompenent.setProps({ user: {id: 7, name: "a", password: "a", email: "a"}})
      expect(movieInfoCompenent).toMatchSnapshot()
    })

    it.skip('should on removeFavorite spy has been invoked', async () => {
      movieInfoCompenent.instance().removeFavorite('123');
      expect(mockhandleFavorite).toHaveBeenCalled()
    })

    it.skip('should on addFavorite spy has been invoked', async () => {
      movieInfoCompenent.instance().addFavorite();
      expect(mockhandleAdd).toHaveBeenCalled()
    })

    it.skip('should on addFavorite spy has been invoked', async () => {
      movieInfoCompenent.instance().handleFavorite('123');
      expect(movieInfoCompenent.instance().removeFavorite).toHaveBeenCalledWith('123')
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
