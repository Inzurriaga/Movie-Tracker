import React, { Component } from 'react';


class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      password: '',
      email: ''
    }
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log('in login');
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
        <form onSubmit={this.handleLogin}>
          <label>Sign In</label>
          <input onChange={this.userInput} type="text" className="name"/>
          <label> password</label>
          <input onChange={this.userInput} type="text" className="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn;
