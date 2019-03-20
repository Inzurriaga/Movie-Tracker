import React, { Component } from "react"

class MovieInfo extends Component {
    constructor(props) {
      super(props);
    }

    handleFavorite = (id) => {
      console.log('id', id);
    }

    render = () => {
        const { id, title, overview, backdrop_path, poster_path, vote_average, release_date } = this.props.movieInfo

        const backgroundCover = { backgroundImage:`url(http://image.tmdb.org/t/p/original${backdrop_path})`};

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
              </section>
            </div>
        )
    }
}

export default MovieInfo;
