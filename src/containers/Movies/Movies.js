import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Movies extends Component {
    render() {
        const moviesToDisplay = this.props.genreInfo.results.map(movie => {
            return (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            )
        })
        return(
            <div>
                {moviesToDisplay}
            </div>
        )
    }
}
