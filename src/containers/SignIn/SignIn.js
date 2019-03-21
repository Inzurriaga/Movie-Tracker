import React, { Component } from 'react';
import { connect } from "react-redux"
import { addUser } from "../../actions"
import { postFetch, getFetch } from '../../api'


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
      this.props.addUser(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  signIn = async (event) => {
    event.preventDefault();
    const { password, email } = this.state
    const url = 'users'
    await this.handleLogin(url, 'POST', { password, email })
    await this.addfave()
    this.grabFavorites(this.props.userInfo.id)
  }


  createAccount = (event) => {
    event.preventDefault();
    const { name, password, email } = this.state
    const url = 'users/new'
    this.handleLogin(url, 'POST', { name, password, email })
    this.signIn(event)
  }

  addfave = async () => {
    const info = {movie_id: 8920, user_id: 5, title: "butt face", poster_path: "hwat", release_date: 2019, vote_average: 7.5, overview: "hello worle"}
    const url = 'users/favorites/new'
    let hello = await this.handleLogin(url, "post", info)
    console.log(hello)
  }

  grabFavorites = async (id) => {
    const url = `users/${id}/favorites`
    let hello = await getFetch(url)
    console.log("fav", hello)
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
    addUser: (userInfo) => dispatch(addUser(userInfo))
})

export default connect(mapStateToProps, mapDispstchToProps)(SignIn);
