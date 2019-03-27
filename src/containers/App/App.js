import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { getDiscover, getGenres } from '../../actions';
import { fetchMovies } from "../../api/index";
import MainPage from '../MainPage/MainPage'
import MovieInfo from "../MovieInfo/MovieInfo"
import Header from '../../containers/Header/Header'
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
      urlMovies: "https:api.themoviedb.org/3/discover/movie?",
      error: ""
    }
  }

  componentDidMount = async () => {
    const { moviesCat, urlMovies } = this.state;
    try {
        const unresolvedAllMovies = moviesCat.map( async (movie) => {
        const singleCategory = await fetchMovies(urlMovies, movie)
        return singleCategory
      })
      const allMovies = await Promise.all(unresolvedAllMovies)
      this.props.getDiscover(allMovies[0].results)
      this.setGenres(allMovies)
    } catch(error) {
      this.setState({
        error: error.results.message})
    }
  }

  setGenres = (response) => {
    const genres = response.filter((genre, index) => index > 0 )
    this.props.getGenres(genres)
    console.log(this.props.genres);
  }

  isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          {
            this.props.genres.length &&
            <Route exact path="/movies/:title/:id" render={({match}) => {
              const { id, title } = match.params
              const genre = this.props.genres.find((genre, index) => index === parseInt(id))
              return <Movies id="genres" title={title} genreInfo={genre}/>
            }} />
          }
          <Route exact path="/movies/allMovies" render={() => {
            return <Movies key="allMovies" title="All Movies" id="allMovies" />
          }} />
          <Route exact path="/favorites" render={() => {
            if(this.isEmpty(this.props.user)){
              return <Movies key="favorites" title="Favorites" id="favorites" />
            }else{
              return <Redirect to="/" />
            }
          }} />
          <Route exact path="/InTheater" render={() => {
            return <Movies key="favorites" id="inTheater" />
          }} />
           <Route exact path="/upcoming" render={() => {
            return <Movies key="upcoming" id="upcoming" />
          }} />
          {
            this.props.movies.length &&
            <Route exact path="/movies/:id" render={({match}) => {
              const { id } = match.params
              return <MovieInfo movieID={id}/>
            }} />
          }
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
  getDiscover: PropTypes.func,
  getGenres: PropTypes.func
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  genres: state.genres,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  getDiscover: (movies) => dispatch(getDiscover(movies)),
  getGenres: (genre) => dispatch(getGenres(genre)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
