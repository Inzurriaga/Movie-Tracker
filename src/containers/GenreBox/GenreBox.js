import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"


export class GenreBox extends Component {
    constructor() {
        super();
        this.state = {
            genre: ["Action", "Horror", "Comedy"]
        }
    }
    componentDidMount = () => {

    }

    render = () => {
        const genreDisplay = this.props.genres.map((genre, index) => {
            let backgroundImage = {backgroundImage: `url( http://image.tmdb.org/t/p/original${genre.results[0].backdrop_path})`}
            return(
                 <Link to={`/Movies/genre/${index}`} style={backgroundImage} className="genre-box">{this.state.genre[index]}</Link>
                 )
        })
        return(
            <div>
                {genreDisplay}
            </div>)
    }
}


export const mapStateToProps = (state) => ({
    genres: state.genres
})

export default connect(mapStateToProps)(GenreBox)