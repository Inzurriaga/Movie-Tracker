import React, { Component } from 'react';
import { connect } from 'react-redux';
import { user, initialFavorites } from '../../actions';
import { postFetch, getFetch } from '../../api';
import PropTypes from 'prop-types';


export class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      newUser: true,
      error: '',
    }
  }

  handleLogin = async (url, method, body) => {
    try {
      const response = await postFetch(url, method, body);
      const retrievedData = await response.json()
      if(response.ok){
        console.log("if im working", retrievedData)
        return retrievedData;
      }
    } catch (error) {
      console.log("im not working in the hanlde")
      this.setState({
        error: "not working"
      })
    }
  }

  signIn = async (event) => {
    console.log("sign in")
    event.preventDefault();
    this.setState({error: ''})
    const { password, email } = this.state
    const url = 'users'
    const retrievedData = await this.handleLogin(url, 'POST', { password, email })
    if(this.state.error !== "not working" ) {
      this.props.user(retrievedData.data);
      await this.fetchUserFavorite(this.props.userInfo.id);
      this.props.hideModal()
    }
  }

  fetchUserFavorite = async (id) => {
    console.log("id", id)
    const url = `users/${id}/favorites`
    const response = await getFetch(url)
    this.props.initialFavorites(response)
  }

  createAccount = async (event) => {
    event.preventDefault();
    const { name, password, email } = this.state
    const url = 'users/new'
    this.setState({error: ''})
    await this.handleLogin(url, 'POST', { name, password, email })
    if(this.state.error !== "not working" ) {
      console.log("create")
      this.signIn(event)
    }
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
      error: ''
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
          <button className={newUser ? btnInactive : btnActive} onClick={this.handleSignSwitch}>Sign In</button>
          <button className={newUser ? btnActive : btnInactive} onClick={this.handleSignSwitch}>Create Account</button>
        </section>
        <section className="Modal-Body">
        { !this.state.newUser ?
            <form onSubmit={this.createAccount} className="CreateForm">
              <label>Name</label>
              <input onChange={this.userInput} type="text" className="name"/>
              <label>Email</label>
              <input onChange={this.userInput} type="text" className="email"/>
              <label>Password</label>
              <input onChange={this.userInput} type="text" className="password"/>
              { this.state.error === "not working" && 
              <p>Email has already been used</p>
              }
              <button type="submit">Create Account</button>
            </form>
          :
          <form onSubmit={this.signIn} className="SignForm">
            <label>Email</label>
            <input onChange={this.userInput} type="text" className="email"/>
            <label>Password</label>
            <input onChange={this.userInput} type="text" className="password"/>
            { this.state.error === "not working" && 
              <p>Email and Password do not match</p>
            }
            <button type="submit">Sign In</button>
          </form>
        }
        </section>
      </div>
    )
  }
}


SignIn.propTypes = {
  className: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired,
  initialFavorites: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  user: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired
}



export const mapStateToProps = (state) => ({
  userInfo: state.user,
})

export const mapDispatchToProps = (dispatch) => ({
  user: (userInfo) => dispatch(user(userInfo)),
  initialFavorites: (favorites) => dispatch(initialFavorites(favorites)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
