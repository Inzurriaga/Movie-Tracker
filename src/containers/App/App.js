import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { getMovies, getGenres } from '../../actions';
import { fetchMovies } from "../../api/index";
import MainPage from '../MainPage/MainPage'
import MovieInfo from "../MovieInfo/MovieInfo"
import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'
import Movies from "../Movies/Movies"

export class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesCat: [
        "&sort_by=popularity.desc",
        "&with_genres=28",
        "&with_genres=27",
        "&with_genres=35"
      ],
      urlMovies: "https:api.themoviedb.org/3/discover/movie?"
    } 
  }
  componentDidMount = async () => {
    const { moviesCat, urlMovies } = this.state;
    try {
      const allCategories = moviesCat.map( async (movie) => {
        const singleCategory = await fetchMovies(urlMovies, movie)
        return singleCategory
      })
      let response = await Promise.all(allCategories)
      this.props.getMovies(response[0].results)
      this.movies(response)
    } catch(error) {
      console.log("hell", error.message)
    }
  }

  movies = (response) => {
    let hello = response.filter((genre, index) => index > 0 )
    console.log(hello)
    this.props.getGenres(hello)
  }


  render() {
    console.log(this.props.movies)
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={MainPage} />
        {
          this.props.movies.length &&
          <Route exact path="/movies/:id" render={({match}) => {
            const { id } = match.params
            return <MovieInfo movieID={id}/>
          }} />
        }
        {
          this.props.genres.length &&
          <Route exact path="/movies/genre/:id" render={({match}) => {
            const { id } = match.params
            const genre = this.props.genres.find((genre, index) => index === parseInt(id))
            return <Movies genreInfo={genre}/>
          }} />
        }
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies)),
  getGenres: (genre) => dispatch(getGenres(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
