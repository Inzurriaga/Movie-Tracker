import React from 'react';
import { SignIn, mapStateToProps, mapDispatchToProps } from './SignIn';
import { user, initialFavorites } from "../../actions/index"
import { shallow } from 'enzyme';

let show = false;
let mockHideModal = jest.fn()

describe('Sign In', () => {
  let signInComponent;

  describe('SignIn Component', () => {

    beforeEach(() => {
      signInComponent = shallow(<SignIn hideModal={mockHideModal}/>)
    })

    it('should match the snapshot', () => {
      expect(signInComponent).toMatchSnapshot()
    })

    it('should have default properties', () => {
      expect(signInComponent.state()).toEqual({
        name: '',
        email: '',
        password: '',
        newUser: true,
        error: ''
      });
    })

    it('should match the snapshot when newUser becomes false', () => {
      signInComponent.setState({
        newUser: true
      })
      expect(signInComponent.state("newUser")).toEqual(true);
      expect(signInComponent).toMatchSnapshot()
    })

    it('should change the state of newUser to false when handleSignSwitch is invoked then true when clicked again', () => {
      expect(signInComponent.state('newUser')).toEqual(true);
      signInComponent.instance().handleSignSwitch();
      expect(signInComponent.state('newUser')).toEqual(false);
      signInComponent.instance().handleSignSwitch();
      expect(signInComponent.state('newUser')).toEqual(true)
    })

    it('should change invoke the hideModal method when close is clicked', () => {
      const btn = signInComponent.find(".closeBtn")
      btn.simulate("click")
      expect(mockHideModal).toHaveBeenCalled()
    })

    it('should change the users value in state when inputs for sign in', () => {
      // test email sign in
      expect(signInComponent.state('email')).toEqual('');
      let eTarget = { target: { value: 'mkrog@gmail.com', classList: 'email'}}
      signInComponent.find('input.email').simulate("change", eTarget)
      expect(signInComponent.state('email')).toBe('mkrog@gmail.com');

      // test password sign in
      expect(signInComponent.state('password')).toEqual('');
      let pTarget = { target: { value: '123456', classList: 'password'}}
      signInComponent.find('input.password').simulate("change", pTarget)
      expect(signInComponent.state('password')).toBe('123456');
    })

    it('should change the users value in state when inputs for create account', () => {
      signInComponent.setState({newUser: false})

      // test name change create account
      expect(signInComponent.state('name')).toEqual('');
      let nTarget = { target: { value: 'mike', classList: 'name'}}
      signInComponent.find('input.name').simulate("change", nTarget)
      expect(signInComponent.state('name')).toBe('mike');
    })

    it('should invoke the function sign in when user submits form', () => {
      const form = signInComponent.find('form.SignForm');
      form.simulate('submit');
      expect(mockHideModal).toHaveBeenCalled()
    })

    it('should change invoke the function create account when user submits', () => {
      expect(signInComponent.state("error")).toEqual("")
      signInComponent.instance().createAccount()
      expect(signInComponent.state("error")).toEqual("")
    })
  })

  describe('SignIn mapStateToProps', () => {

    it('should return an object with users information', () => {
      const mockUser = {
        user: { id: 7, name: "a", password: "a", email: "a"},
        filter: []
      };
      const expected = {
        userInfo: {id: 7, name: "a", password: "a", email: "a"}
      };
      const result = mapStateToProps(mockUser)
      expect(result).toEqual(expected)
    })

  })


  describe('SignIn mapDispstchToProps', () => {

    it('should user dispatch been called with input argument', () => {
      const mockDispatch = jest.fn();
      const mockUser = { id: 7, name: "a", password: "a", email: "a"};
      const actionToDispatch = user(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.user(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should user dispatch been called with input argument', () => {
      const mockDispatch = jest.fn();
      const mockUser = {};
      const actionToDispatch = initialFavorites(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.initialFavorites(mockUser);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

})
