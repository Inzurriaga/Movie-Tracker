import React, { Component } from "react"
import { ReactComponent as Arrow } from "../../images/arrow.svg"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"

export class SlideShow extends Component{
    constructor(){
        super();
        this.state = {
            slides: [],
            slidesPosition: 0,
            autoSlides: () => {}
        }
    }

    componentDidMount = () => {
        const slides = this.props.movies.filter((movie, index) => {
            return index < 4
        })
        const autoSlides = setInterval(this.changeSlidesPositionForward, 6000)
        this.setState({slides, autoSlides})
    }

    changeSlidesPositionForward = () => {
        const { slidesPosition, slides } = this.state
        const autoSlides = setInterval(this.changeSlidesPositionForward, 6000)
        let position = slidesPosition
        if(position < slides.length - 1) {
            position++
            clearInterval(this.state.autoSlides)
            this.setState({ slidesPosition: position, autoSlides })
        } else{
            clearInterval(this.state.autoSlides)
            this.setState({ slidesPosition: 0, autoSlides})
        }
    }

    changeSlidesPositionBack = () => {
        const { slidesPosition } = this.state
        const autoSlides = setInterval(this.changeSlidesPositionForward, 6000)
        let position = slidesPosition
        if( slidesPosition === 0 ){
            clearInterval(this.state.autoSlides)
            this.setState({ slidesPosition: 3, autoSlides})
        }else{
            position--
            clearInterval(this.state.autoSlides)
            this.setState({ slidesPosition: position, autoSlides })
        }
    }

    render = () => {
        const slideDisplay = this.state.slides.map((slide, index) => {
            let backgroundImage = {backgroundImage: `url( http://image.tmdb.org/t/p/original${slide.backdrop_path})`}
            if(index === this.state.slidesPosition) {
                return (
                    <Link className="slide" key={slide.id} to={`/movies/${slide.id}`}>
                        <div className="slide-image" style={backgroundImage} id={slide.id}>
                            <h3>{slide.title}</h3>
                        </div>
                    </Link>
                    )
            }else{
                return null;
            }
        })
        return(
            <div className="slideshow-section">
                <div className="slide-container">
                    {slideDisplay}
                    <Arrow className="arrow-one" onClick={this.changeSlidesPositionForward}/>
                    <Arrow className="arrow-two" onClick={this.changeSlidesPositionBack}/>
                </div>
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(this.state.autoSlides)
    }
}

SlideShow.propTypes = {
    movies: PropTypes.array.isRequired,
}

export const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps)(SlideShow)
