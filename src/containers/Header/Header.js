import React, { Component} from 'react';
import SignIn from "../SignIn/SignIn";
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOutUser, signOutFavorites } from '../../actions';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  signOut = () => {
    this.props.signOutUser();
    this.props.signOutFavorites();
  }

  // need utilities file for multiple methods
  isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
  }

  render() {
    console.log(this.props.user);
    const showHideClassName = this.state.show ? "Modal-Container modal-show" : "Modal-Container modal-hide";
    return (
      <div className="Header">
        <nav className="Header-Nav">
          <Link key="Home" to="/"><h2>Home</h2></Link>
          <Link key="All_Movies" to="/movies/allMovies"><h2>All Genres</h2></Link>
          {
            this.isEmpty(this.props.user) && <Link key="Favorites" to="/favorites"><h2>Favorites</h2></Link>
          }
        </nav>
        <section className="LoginBtn">
        { !this.isEmpty(this.props.user) &&
          <div className="User-Info-Box">
            <h4 className="User-Info">Sign In</h4>
            <button type="button" onClick={this.showModal}>
              <i className="fas fa-user"></i>
            </button>
          </div>
        }
        { this.isEmpty(this.props.user) &&
          <div className="User-Info-Box">
            <h4 className="User-Info">Welcome {this.props.user.name}</h4>
            <NavLink to="/" type="button" onClick={this.signOut}>
              <i className="fas fa-sign-out-alt"></i>
            </NavLink>
          </div>
        }
        </section>
        <section className={showHideClassName}>
          <SignIn className="SignIn" show={this.state.show} hideModal={this.hideModal} />
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites,
})

export const mapDispatchToProps = (dispatch) => ({
  signOutUser: (signOut) => dispatch(signOutUser(signOut)),
  signOutFavorites: (favorites) => dispatch(signOutFavorites(favorites))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
