import React, { Component } from 'react';
import { connect } from 'react-redux'
import { user, initialFavorites } from '../../actions'
import { postFetch, getFetch } from '../../api'


class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      newUser: true,
    }
  }

  handleLogin = async (url, method, body) => {
    try {
      const response = await postFetch(url, method, body);
      this.props.user(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  signIn = async (event) => {
    event.preventDefault();
    const { password, email } = this.state
    const url = 'users'
    await this.handleLogin(url, 'POST', { password, email })
    await this.fetchUserFavorite(this.props.userInfo.id);
    this.props.hideModal()
  }

  fetchUserFavorite = async (id) => {
    const url = `users/${id}/favorites`
    const response = await getFetch(url)
    this.props.initialFavorites(response)
  }

  createAccount = (event) => {
    event.preventDefault();
    const { name, password, email } = this.state
    const url = 'users/new'
    this.handleLogin(url, 'POST', { name, password, email })
    this.signIn(event)
  }

  userInput = (event) => {
    const value = event.target.value
    const key = event.target.classList
    this.setState({
      [key]: value
    })
  }

  handleSignSwitch = () => {
    this.setState({
      newUser: !this.state.newUser,
    })
  }

  render(){
    const btnActive = 'btnChoice choice-active';
    const btnInactive = 'btnChoice choice-inactive';
    const { newUser } = this.state;
    return (
      <div className="SignIn-Content">
        <section className="Modal-Close">
          <button className="closeBtn" onClick={this.props.hideModal}>X</button>
        </section>
        <section className="Modal-Header">
          <button className={newUser ? btnInactive : btnActive} onClick={this.handleSignSwitch}>Create Account</button>
          <button className={newUser ? btnActive : btnInactive} onClick={this.handleSignSwitch}>Sign In</button>
        </section>
        <section className="Modal-Body">
        { this.state.newUser ?
            <form onSubmit={this.createAccount}>
              <label>Name</label>
              <input onChange={this.userInput} type="text" className="name"/>
              <label>Email</label>
              <input onChange={this.userInput} type="text" className="email"/>
              <label>Password</label>
              <input onChange={this.userInput} type="text" className="password"/>
              <button type="submit">Create Account</button>
            </form>
          :
          <form onSubmit={this.signIn}>
            <label>Email</label>
            <input onChange={this.userInput} type="text" className="email"/>
            <label>Password</label>
            <input onChange={this.userInput} type="text" className="password"/>
            <button type="submit">Sign In</button>
          </form>
        }
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  userInfo: state.user,
})

export const mapDispstchToProps = (dispatch) => ({
  user: (userInfo) => dispatch(user(userInfo)),
  initialFavorites: (favorites) => dispatch(initialFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispstchToProps)(SignIn);
