import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { signOutUser, signOutFavorites } from '../../actions/index';

let mockPropsUser = {};
let mockSignOutUser = jest.fn()
let mockSignOutFavorites = jest.fn()

describe('Header', () => {

  describe('Header Component', () => {
    let headerComponenet;

    beforeEach(() => {
      headerComponenet = shallow(<Header user={mockPropsUser}
                                         signOutUser={mockSignOutUser}
                                         signOutFavorites={mockSignOutFavorites}
                                  />)
    })

    it('should match the snapshot', () => {
      expect(headerComponenet).toMatchSnapshot()
    })

    it('should have default properties', () => {
      expect(headerComponenet.state()).toEqual({
        show: false
      })
    })

    it('should change its show state when showModal is clicked', () => {
      headerComponenet.setState({
        show: false
      })
      expect(headerComponenet.state("show")).toEqual(false);
      headerComponenet.instance().showModal();
      expect(headerComponenet.state("show")).toEqual(true);
      expect(headerComponenet).toMatchSnapshot()
    })

    it('should change its show state when hideModal is clicked', () => {
      headerComponenet.setState({
        show: true
      })
      expect(headerComponenet.state("show")).toEqual(true);
      headerComponenet.instance().hideModal();
      expect(headerComponenet.state("show")).toEqual(false);
      expect(headerComponenet).toMatchSnapshot()
    })

    it('should change render and show a welcome user when a user has logged in', () => {
      // expect(mockPropsUser).toEqual({})
      headerComponenet.setProps({ user: {id: 7, name: "a", password: "a", email: "a"}})
      expect(headerComponenet).toMatchSnapshot()
    })

    it('should change render and show a welcome user when a user has logged in', () => {
      headerComponenet.instance().signOut()

      expect(mockSignOutUser).toHaveBeenCalled()
      expect(mockSignOutFavorites).toHaveBeenCalled()
    })


  })

  describe('Header mapStateToProps', () => {

    it('should return an object of default states', () => {
      const mockState = {
        user: {id: 7, name: "a", password: "a", email: "a"},
        favorites: [{page: 1, total_pages: 1176, total_results: 23512}],
        filter: []
      }
      const expected = {
        user: {id: 7, name: "a", password: "a", email: "a"},
        favorites: [{page: 1, total_pages: 1176, total_results: 23512}],
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })

  })

  describe('Header mapDispatchToProps', () => {

    it('should call dispatch for signOutUser using a function from mapDispatchToProps', () => {
      const mockDispatchUser = jest.fn();
      const mockUser = {id: 7, name: "a", password: "a", email: "a"};

      const actionToDispatch = signOutUser(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatchUser);
      mappedProps.signOutUser(mockUser);
      expect(mockDispatchUser).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch for signOutFavorites using a function from mapDispatchToProps', () => {
      const mockDispatchFavorites = jest.fn();
      const mockFavorites = [{page: 1, total_pages: 1176, total_results: 23512}];

      const actionToDispatch = signOutFavorites(mockFavorites)
      const mappedProps = mapDispatchToProps(mockDispatchFavorites);
      mappedProps.signOutFavorites(mockFavorites);
      expect(mockDispatchFavorites).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})
