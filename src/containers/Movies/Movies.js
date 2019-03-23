import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

export default class Movies extends Component {
    constructor(){
        super();
    }
    render() {
        const hello = this.props.genreInfo.results.map(movie => {
            return (
                <Link to={`/movies/${movie.id}`}>
                    {movie.title}
                </Link >
            )
        })
        return(
            <div>
                {hello}
            </div>
        )
    }
}
