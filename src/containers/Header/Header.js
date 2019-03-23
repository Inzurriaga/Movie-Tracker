import React, { Component} from 'react';
import SignIn from "../SignIn/SignIn";

class Header extends Component {
  constructor() {
    super();
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

  render() {

    const showHideClassName = this.state.show ? "Modal-Container modal-show" : "Modal-Container modal-hide";
    const userName = 'Sign In'
    return (
      <div className="Header">
        <nav className="Header-Nav">
          <div><h2>Home</h2></div>
          <div><h2>Movies</h2></div>
          <div><h2>Favorites</h2></div>
        </nav>
        <section className="LoginBtn">
          <h4 className="User-Info">{userName}</h4>
          <button type="button" onClick={this.showModal}>
            <i className="fas fa-user"></i>
          </button>
        </section>
        <section className={showHideClassName}>
          <SignIn className="SignIn" show={this.state.show} hideModal={this.hideModal} />
        </section>
      </div>
    )
  }
}

export default Header;
