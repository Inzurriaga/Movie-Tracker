import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import SlideShow from "../SlideShow/SlideShow";
import GenreBox from "../GenreBox/GenreBox"


class MainPage extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MainPage">
        <div className="left-option">
          {
            movies.length ?
            <SlideShow /> :
            <div>im loading</div>
          }
          <div className="bottom-option">
            <Link to="/blank" className="theater-box">Movies in theater</Link>
            <Link to="/blank" className="theater-box">Coming out Soon</Link>
          </div>
        </div>
        <div className="right-option">
          <GenreBox />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MainPage)
