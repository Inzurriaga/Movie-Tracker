import React, { Component } from 'react';
import { postFetch } from '../../api'


class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      email: ''
    }
  }

  handleLogin = async (url, body) => {
    try {
      const response = await postFetch(url, 'POST', body);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  signIn = (event) => {
    event.preventDefault();
    const { password, email } = this.state
    const url = 'users'
    this.handleLogin(url, { password, email })
  }


  createAccount = (event) => {
    event.preventDefault();
    const { name, password, email } = this.state
    const url = 'users/new'
    this.handleLogin(url, { name, password, email })
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

export default SignIn;
