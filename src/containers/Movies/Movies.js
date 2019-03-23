import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies, postFetch, deleteFetch } from '../../api'


export class Movies extends Component {
  constructor() {
    super();
    this.state = {
      moviesToSave: []
    }
  }

  componentDidMount = async () => {
    console.log(this.props);
    if(this.props.id === "allMovies") {
      const url = '';
      const urlEnd = '';
      const allMovies = await this.fetchMoviesForPage()
      this.setState({
        moviesToSave: allMovies
      })
    } else if (this.props.id === "genres") {
      this.setState({
        moviesToSave: this.props.genreInfo.results
      })
    } else if (this.props.id === "favorites") {
      console.log('favs', this.props);
      const url = '';
      const urlEnd = '';
      const favoritesMovies = await this.fetchMoviesForPage(this.props.favorites)
      this.setState({
        moviesToSave: favoritesMovies
      })
    }
  }

  fetchMoviesForPage = async (fetch, ) => {
    try {
      const response = await fetchMovies()
      return response
    } catch (error) {
      console.log(error.message);
    }



  }

  render() {
      const moviesToRender = this.state.moviesToSave.map(movie => {
          return (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                  {movie.title}
              </Link>
          )
      })

      return(
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
