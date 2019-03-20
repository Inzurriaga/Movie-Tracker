import React, { Component } from 'react';
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import MainPage from '../MainPage/MainPage.js'
import MovieInfo from "../MovieInfo/MovieInfo"
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/movies/:id" render={({match}) => {
          const { id } = match.params
          const movieInfo = this.props.movies.find(movie => movie.id === parseInt(id))
          return <MovieInfo movieInfo={movieInfo}/>
        }} />
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(App)
