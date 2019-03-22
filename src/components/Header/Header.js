import React, { Component} from 'react';
import SignIn from "../../containers/SignIn/SignIn";

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
    return (
      <div className="Header">
        <section className="Logo">
          <span>Logo</span>
        </section>
        <section className="Login-Section">
          <SignIn show={this.state.show} handleClose={this.hideModal}>

          <button type="button" onClick={this.showModal}>
            open
          </button>
          
          <SignIn />
        </section>

      </div>
    )
  }
}

export default Header;
