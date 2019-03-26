import React from 'react';
import { SignIn, mapStateToProps } from './SignIn';
import { shallow } from 'enzyme';


describe('Sign In', () => {
  let signInComponent;

  describe('SignIn Component', () => {

    beforeEach(() => {
      signInComponent = shallow(<SignIn />)
    })

    it.skip('should match the snapshot', () => {

      expect(signInComponent).toMatchSnapshot()

    })

    it.skip('should have default properties', () => {
      expect(signInComponent.state()).toEqual({
        name: '',
        email: '',
        password: '',
        newUser: true,
      });

    })

  })


  describe('SignIn mapStateToProps', () => {

    it('should return an object with genres information', () => {

    })

  })

})
