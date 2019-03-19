import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMovies } from '../../actions';


class MainPage extends Component {
  constructor(){
    super()

  }
  // api key 3033b069b2d0b32039c7d85cfe10cfd3

  // Genres
  // https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=3033b069b2d0b32039c7d85cfe10cfd3

  // Discover
  // https:api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=3033b069b2d0b32039c7d85cfe10cfd3

  // Get Images
  // http://image.tmdb.org/t/p/original/{Extension}

  // Discover
  componentDidMount() {
    const url = "https:api.themoviedb.org/3/discover/movie?page=1&include_video=true&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=3033b069b2d0b32039c7d85cfe10cfd3";
    fetch(url)
      .then(response => response.json())
      .then(movies => this.props.getMovies( movies.results ))
      .catch(error => error.message)
  }

  render() {
    const { movies } = this.props;

    const movieResults = movies.map(movie => {
      return (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="movie" />
          <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie" />
        </div>
      )
    })

    console.log('movies', movies);

    return (
      <div className="MainPage">{movieResults}</div>
    );
  }
}



export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies)),
})


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
