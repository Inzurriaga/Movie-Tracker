import React from "react";
import { shallow, mount } from "enzyme"
import { SlideShow, mapStateToProps } from "./SlideShow"

const mockMovies = [{namne:"hello"},{name: "what"},{name: "yes"}]

describe("SlideShow", () => {
    describe("SlideShow", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(
                <SlideShow movies={mockMovies}/>
            )
        })

        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })

        it("should have a default state", () => {
            expect(wrapper.state()).toEqual({
                slides: [
                    { "namne": "hello"}, {"name": "what"},{ "name": "yes"}],
                slidesPosition: 0,
                autoSlides: 6
            })
        })

        it("should increase slidesPosition when invoke", () => {
            expect(wrapper.state("slidesPosition")).toEqual(0)
            wrapper.instance().changeSlidesPositionForward()
            expect(wrapper.state("slidesPosition")).toEqual(1)
        })

        it("should decrease slidesPosition when invoke", () => {
            wrapper.instance().changeSlidesPositionForward()
            expect(wrapper.state("slidesPosition")).toEqual(1)
            wrapper.instance().changeSlidesPositionBack()
            expect(wrapper.state("slidesPosition")).toEqual(0)
        })

    })

    describe("mapStateToProps", () => {
      
        it("should return a object", () => {
            const mockData = {
                movies: [],
                genres: []
            }
            const expected = {
                movies: []
            }
            const mockProps = mapStateToProps(mockData)
            expect(mockProps).toEqual(expected)
        })
    })
})
