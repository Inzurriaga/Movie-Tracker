import React, { Component } from "react"

class MovieInfo extends Component {
    render = () => {
        return(
            <div>
                {this.props.movieInfo.title}
            </div>
        )
    }
}

export default MovieInfo;