import React, { Component } from "react"

import { addFavorite } from "../../actions"
import { fetchMovies, postFetch, getFetch } from '../../api'


class MovieInfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentMovie: []
      }
    }

    componentDidMount = async () => {
      const urlSingleMovie = `https://api.themoviedb.org/3/movie/${this.props.movieInfo.id}?`;
      const urlEnd = "&append_to_response=videos"
      try {
        const response = await fetchMovies(urlSingleMovie, urlEnd)
        this.setState({ currentMovie: response })
      } catch (error) {
        console.log(error.message)
      }
    }

    handleFavorite = (id) => {
      console.log('id', id);
    }


    // grabFavorites = async (id) => {
    //   const url = `users/${id}/favorites`
    //   let hello = await getFetch(url)
    //   console.log("fav", hello)
    // }

    addFavorite = async () => {
      const url = 'users/favorites/new'
      const favInfo = {movie_id: 8920, user_id: 7, title: "butt face", poster_path: "hwat", release_date: 2019, vote_average: 7.5, overview: "hello worle"}
      const response = await postFetch(url, 'POST', favInfo)
      this.props.addFavorite(response);

      console.log(response)
    }

    removeFavorite = async () => {

    }


    render = () => {
        const { id, title, overview, backdrop_path, poster_path, vote_average, release_date, videos } = this.state.currentMovie;

        const backgroundCover = { backgroundImage:`url(http://image.tmdb.org/t/p/original${backdrop_path})`};

        if(typeof id === 'number') {
          const videoKey = videos.results[0].key;
          return(
            <div className="MovieInfo" style={backgroundCover}>
              <section className="MovieInfo-Poster">
                <img src={`http://image.tmdb.org/t/p/original${poster_path}`} alt="Movie Poster" />
              </section>
              <section className="MovieInfo-Copy">
                <div className="Info-Title">
                  <h3>{title} <span>({release_date.substring(0,4)})</span></h3>
                </div>
                <div className="Info-Extras">
                  <span>{vote_average}</span>
                  <button onClick={() => this.handleFavorite(id)}><i className="far fa-star"></i></button>
                </div>
                <div className="Info-Copy">
                  <h5>Overview</h5>
                  <p>{overview}</p>
                </div>
                <div className="MovieInfo-Trailer">
                  <iframe src={`https://youtube.com/embed/${videoKey}`} title="trailer" height="200" width="300"></iframe>
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
  addFavorites: (favorites) => dispatch(addFavorite(favorites))
})

export default connect(mapStateToProps, mapDispstchToProps)(MovieInfo);
