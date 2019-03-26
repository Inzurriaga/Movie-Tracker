import React from "react"
import { shallow } from "enzyme"
import { mapStateToProps, Movies } from "./Movies"

describe("Movies", () => {
    describe("Movies", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <Movies />
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
        it("should have a default state", () => {
            expect(wrapper.state()).toEqual({
                moviesToSave: [],
                movieGenreTitles: [],
                pageTitle: '',
              })
        })
        it("should change the state of moviesToSave when setAllMovies is invoke", () => {
            expect(wrapper.state("moviesToSave")).toEqual([])
            const mockdata = [{name: "batman"}, {name: "superman"}]
            wrapper.instance().setAllMovies(mockdata)
            expect(wrapper.state("moviesToSave")).toEqual(mockdata)
        })
        it("", () => {
            expect(wrapper.state("moviesToSave")).toEqual([])
            const mockdata = [{genre: "horror"}, {genre: "action"}]
            wrapper.instance().setAllGenres(mockdata)
            expect(wrapper.state("moviesToSave")).toEqual(mockdata)
        })
    })
    describe("mapStateToProps", () => {
        it("should return an object", () => {
            const mockdata = {
                movies: [],
                user: {},
                favorites: []
            }
            const expected = {
                favorites: []
            }
            const result = mapStateToProps(mockdata)
            expect(result).toEqual(expected)
        })
    })
})