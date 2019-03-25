import React, { Component } from "react"
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from "../../actions"
import { fetchMovies, postFetch, deleteFetch } from '../../api'


class MovieInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentMovie: [],
        favoriteStatus: false,
      }
    }

    componentDidMount = async () => {
      const urlSingleMovie = `https://api.themoviedb.org/3/movie/${this.props.movieID}?`;
      const urlEnd = "&append_to_response=videos"
      try {
        const response = await fetchMovies(urlSingleMovie, urlEnd)
        this.setState({ currentMovie: response })
      } catch (error) {
        console.log(error.message)
      }
    }

    handleFavorite = async (movieId) => {
      if(!this.props.favorites.includes(movieId)){
        this.addFavorite()
      } else {
        this.removeFavorite(movieId)
      }
    }

    addFavorite = async () => {
      const url = 'users/favorites/new'
      const { id, title, poster_path, release_date, vote_average, overview} = this.state.currentMovie;
      const favInfo = { movie_id: id, user_id: this.props.user.id, title, poster_path, release_date, vote_average, overview }
      await postFetch(url, 'POST', favInfo);
      this.props.addFavorite(id);
    }

    removeFavorite = async (movieId) => {
      const url = `users/${this.props.user.id}/favorites/${movieId}`
      const { id } = this.state.currentMovie;
      await deleteFetch(url);
      this.props.removeFavorite(id);
    }

    // need utilities file for multiple methods
    isEmpty = (obj) => {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return true;
      }
      return false;
    }

    render = () => {
        const { id, title, overview, backdrop_path, poster_path, vote_average, release_date, videos } = this.state.currentMovie;
        const score = vote_average * 10
        const backgroundCover = { backgroundImage:`url(http://image.tmdb.org/t/p/original${backdrop_path})`};
        let favoriteStatus = this.props.favorites.includes(id) ? 'Favorite_True' : 'Favorite_False';
        if(typeof id === 'number') {
          const videoKey = videos.results.length === 0  ? null : videos.results[0].key
          return(
            <div className="MovieInfo" style={backgroundCover}>
              <section className="MovieInfo-Poster">
                { this.isEmpty(this.props.user) &&
                  <button onClick={() => this.handleFavorite(id)} className={favoriteStatus}>
                    <i className="fas fa-star"></i>
                  </button>
                }
                <img src={`http://image.tmdb.org/t/p/original${poster_path}`} alt="Movie Poster" />
              </section>
              <section className="MovieInfo-Copy">
                <div className="Info-Title">
                  <h3>{title} <span>({release_date.substring(0,4)})</span></h3>
                </div>
                <div className="Info-Copy">
                  <h5>Overview - <span className="Info-Score">(Voter Average {score}%)</span></h5>
                  <p>{overview}</p>
                </div>
                <div className="MovieInfo-Trailer">
                {videoKey &&  <iframe src={`https://youtube.com/embed/${videoKey}`} title="trailer" height="200" width="300"></iframe>}
                </div>
              </section>
            </div>
          )
        } else {
          return(
            <div>Loading</div>
          )
        }
    }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favorites
})

export const mapDispstchToProps = (dispatch) => ({
  addFavorite: (favorite) => dispatch(addFavorite(favorite)),
  removeFavorite: (favorite) => dispatch(removeFavorite(favorite))
})

export default connect(mapStateToProps, mapDispstchToProps)(MovieInfo);
