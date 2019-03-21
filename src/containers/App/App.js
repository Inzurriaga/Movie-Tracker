import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { getMovies } from '../../actions';
import { fetchMovies } from "../../api/index";
import MainPage from '../MainPage/MainPage.js'
import MovieInfo from "../MovieInfo/MovieInfo"
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

class App extends Component {

  componentDidMount = async () => {
    const urlDiscover = "https:api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&";
    try {
      const response = await fetchMovies(urlDiscover, "")
      console.log(response)
      this.props.getMovies( response.results )
      console.log('response');
    } catch(error) {
      console.log(error.message)
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={MainPage} />
        {
          this.props.movies.length &&
          <Route exact path="/movies/:id" render={({match}) => {
            const { id } = match.params
            const movieInfo = this.props.movies.find(movie => movie.id === parseInt(id))
            return <MovieInfo movieInfo={movieInfo}/>
          }} />
        }
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
