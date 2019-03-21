import React, { Component } from 'react';
import { connect } from 'react-redux'
import { user } from '../../actions'
import { postFetch, getFetch, addfave } from '../../api'


class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
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
    const userFavorites = await this.fetchFavorites(this.props.userInfo.id);
    console.log(userFavorites);
  }

  fetchFavorites = async (id) => {
    const url = `users/${id}/favorites`
    let response = await getFetch(url)
    return response;
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

  render(){

    return (
      <div className="SignIn">
        <form onSubmit={this.createAccount}>
          <label>Name</label>
          <input onChange={this.userInput} type="text" className="name"/>
          <label>Email</label>
          <input onChange={this.userInput} type="text" className="email"/>
          <label>Password</label>
          <input onChange={this.userInput} type="text" className="password"/>
          <button type="submit">Create Account</button>
        </form>
        <br/><br/><br/><br/>
        <form onSubmit={this.signIn}>
          <label>Email</label>
          <input onChange={this.userInput} type="text" className="email"/>
          <label>Password</label>
          <input onChange={this.userInput} type="text" className="password"/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  userInfo: state.user
})

export const mapDispstchToProps = (dispatch) => ({
  user: (userInfo) => dispatch(user(userInfo))
})

export default connect(mapStateToProps, mapDispstchToProps)(SignIn);
