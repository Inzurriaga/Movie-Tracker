import React from 'react';
import { MovieInfo, mapStateToProps, mapDispatchToProps } from './MovieInfo';
import { shallow } from 'enzyme';

describe('MovieInfo', () => {

  describe('MovieInfo Component', () => {
    let movieInfoCompenent;

    beforeEach(() => {
      movieInfoCompenent = shallow(<MovieInfo />)
    })

    it.skip('should match the snapshot', () => {

      expect(movieInfoCompenent).toMatchSnapshot()

    })

    it.skip('should have default properties', () => {

      expect(movieInfoCompenent.state()).toEqual({
        currentMovie: [],
        favoriteStatus: false,
      });

    })

  })


  describe('MovieInfo mapStateToProps', () => {
    it.skip('should return an object with MovieInfo information', () => {

    })
  })

})
