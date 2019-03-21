import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import SlideShow from "../SlideShow/SlideShow";


class MainPage extends Component {
  // Genres

  // Discover
  // https:api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=3033b069b2d0b32039c7d85cfe10cfd3

  // Get Images
  // http://image.tmdb.org/t/p/original/{Extension}

  // Discover


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
            <Link className="theater-box">Movies in theater</Link>
            <Link className="theater-box">Coming out Soon</Link>
          </div>
        </div>
        <div className="right-option">
          <Link className="genre-box">Comedy</Link>
          <Link className="genre-box">Horror</Link>
          <Link className="genre-box">Action</Link>
        </div>
        
      </div>
    );
  }
}



export const mapStateToProps = (state) => ({
  movies: state.movies,
})


export default connect(mapStateToProps)(MainPage)
