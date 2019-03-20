import React, { Component } from "react"
// import {} from "react-router-dom"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class SlideShow extends Component{
    constructor(){
        super();
        this.state = {
            slides: []
        }
    }
    componentDidMount = () => {
        const slides = this.props.movies.filter((movie, index) => {
            return index < 4
        })
        this.setState({slides})
    }
    render = () => {
        const slideDisplay = this.state.slides.map(slide => {
            let backgroundImage = {backgroundImage: `url( http://image.tmdb.org/t/p/original${slide.backdrop_path})`}
            return (<Link to={`/movies/${slide.id}`}>
                <div className="slide-image" style={backgroundImage}>
                    <h3>{slide.title}</h3>
                </div>
            </Link>)
        })
        return(
            <div>
                {
                    slideDisplay
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(SlideShow)

