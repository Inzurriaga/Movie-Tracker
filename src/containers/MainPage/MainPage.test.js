import React from "react"
import { shallow } from "enzyme"
import { MainPage, mapStateToProps } from "./MainPage";

const mockMovies = [{namne:"hello"},{name: "what"},{name: "yes"}]

describe("MainPage", () => {
    describe("MainPage", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(
                <MainPage movies={mockMovies}/>
            )
        })

        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })

    })

    describe("mapStateToProps", () => {

        it("should return an object", () => {
            const mockData = {
                movies: [],
                genres: [],
                category: []
            }
            const expected = {
                movies: []
            }
            const mockprops = mapStateToProps(mockData)
            expect(mockprops).toEqual(expected)
        })
        
    })
})
