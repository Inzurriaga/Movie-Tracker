import React, { Component } from "react"
import { connect } from "react-redux"

export default class Movies extends Component {
    constructor(){
        super();
    }
    render() {
        console.log(this.props.genreInfo)
        const hello = this.props.genreInfo.results.map(movie => {
            return (
                <div>
                    {movie.title}
                </div>
            )
        })
        return(
            <div>
                {hello}
            </div>
        )
    }
}
