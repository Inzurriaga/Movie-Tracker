import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies } from '../../api'


export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      moviesToSave: [],
      movieGenreTitles: []
    }
  }

  componentDidMount = () => {
    if(this.props.id === "allMovies") {
      this.fetchGenresCategories()
    } else if (this.props.id === "inTheater"){
      this.fetchInTheater()
    } else if ( this.props.id === "upcoming"){
      this.fetchUpComing()
    }else if (this.props.id === "genres") {
      this.setAllMovies(this.props.genreInfo.results)
    } else if (this.props.id === "favorites") {
      this.fetchFavoriteMovies(this.props.favorites)
    }
  }

  fetchInTheater = async () => {
    const url = "https:api.themoviedb.org/3/discover/movie?"
    const endurl = "&with_release_type=2|3"
    const unresolvedTheater = await fetchMovies(url, endurl)
    this.setState({
      moviesToSave: unresolvedTheater.results
    })
  }

  fetchUpComing = async () => {
    const url = "http://api.themoviedb.org/3/movie/upcoming?"
    const unresolvedTheater = await fetchMovies(url, '')
    this.setState({
      moviesToSave: unresolvedTheater.results
    })
  }

  fetchGenresCategories = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?'
    try {
      const unresolvedTitles = await fetchMovies(url, '')
      const allGenres = await this.fetchAllGenres(unresolvedTitles.genres)
      const resolvedTitles = this.cleanGenreTitles(unresolvedTitles.genres)
      this.setState({
        movieGenreTitles: resolvedTitles
      })
      console.log(this.state);
    } catch (error) {
      console.log(error.message);
    }
  }

  cleanGenreTitles = (unresolvedTitles) => {
    return unresolvedTitles.map(title => {
      return title.name
    })
  }

  fetchAllGenres = async (genreArr) => {
    const url = "https:api.themoviedb.org/3/discover/movie?";
    let genreTitles = []
    try {
      const unresolvedGenres = genreArr.map( async (genre) => {
        const backEndUrl = `&with_genres=${genre.id}`;
        const singleGenre = await fetchMovies(url, backEndUrl)
        return singleGenre.results;
      })
      const allGenres = await Promise.all(unresolvedGenres)
      this.setAllGenres(allGenres)
    } catch(error) {
      console.log(error.message)
    }
  }

  setAllGenres = (allGenres) => {
    this.setState({
      moviesToSave: allGenres,
    })
  }

  setAllMovies = (allMovies) => {
    this.setState({
      moviesToSave: allMovies
    })
  }

  fetchFavoriteMovies = async (favArr) => {
    try {
      const unresolvedFavorites = favArr.map( async (movieId) => {
        let favUrl = `https://api.themoviedb.org/3/movie/${movieId}?`;
        const singleFavorite = await fetchMovies(favUrl, '')
        return singleFavorite
      })
      const allFavoriteMovies = await Promise.all(unresolvedFavorites)
      this.setFavorites(allFavoriteMovies)
    } catch(error) {
      console.log(error.message)
    }
  }

  setFavorites = (favoritesMovies) => {
    this.setState({
      moviesToSave: favoritesMovies
    })
  }

  render() {
      const { moviesToSave, movieGenreTitles } = this.state;
      let moviesToRender = null;

      if(!(this.props.id === "allMovies")) {
        moviesToRender = moviesToSave.map(movie => {
            return (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            )
        })
      } else if (this.props.id === "allMovies"){
        moviesToRender = moviesToSave.map((row, index) => {
          return (
            <div>
              {movieGenreTitles[index]}
              {row.map(movie => {
                      return (
                          <Link key={movie.id} to={`/movies/${movie.id}`}>
                              {movie.title}
                          </Link>
                      )
          })}
            </div>
          )
        })
      }

      return (
          <div>
            {moviesToRender}
          </div>
      )
  }
}

export const mapStateToProps = (state) => ({
  favorites: state.favorites
})





export default connect(mapStateToProps)(Movies);
