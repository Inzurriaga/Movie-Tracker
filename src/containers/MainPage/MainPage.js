import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import SlideShow from "../SlideShow/SlideShow";
import GenreBox from "../GenreBox/GenreBox"
import inTheaters from'../../images/theather.jpg';
import comingSoon from'../../images/comingSoon.jpg';

export class MainPage extends Component {

  render() {
    const { movies } = this.props;
    const theater={backgroundImage: `url(${inTheaters})`}
    const soon={backgroundImage: `url(${comingSoon})`}
    return (
      <div className="MainPage">
        <div className="left-option">
          {
            movies.length ?
            <SlideShow /> :
            <div>Loading</div>
          }
          <div className="bottom-option">
            <Link to="/InTheater" style={theater} className="theater-box">Movies in theater</Link>
            <Link to="/upcoming" style={soon} className="theater-box">Coming out Soon</Link>
          </div>
        </div>
        <div className="right-option">
          <GenreBox />
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  movies: PropTypes.array.isRequired,
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MainPage)
