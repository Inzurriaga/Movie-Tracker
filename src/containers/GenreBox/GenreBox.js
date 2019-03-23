import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"


export class GenreBox extends Component {
    componentDidMount = () => {

    }

    render = () => {
        const genreDisplay = this.props.genres.map((genre) => {
            return(<Link></Link>)
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