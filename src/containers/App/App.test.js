import React from 'react';
import { shallow } from "enzyme"
import { App, mapDispatchToProps, mapStateToProps  } from './App';
import { fetchMovies } from "../../api/index"
import { getDiscover, getGenres } from '../../actions';
jest.mock("../../api/index")

const mockGenres = [{namne:"hello"},{name: "what"},{name: "yes"}]
const mockMovies = [{namne:"hello"},{name: "what"},{name: "yes"}]
const mockUrl = "https:api.themoviedb.org/3/discover/movie?"

describe('app', () => {
    describe("app", () => {
        let wrapper; 
        beforeEach(() => {
            wrapper = shallow(
                <App genres={mockGenres}
                    movies={mockMovies}/>
            )
        })
        it("should have a snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        });
        it("should have a default state", () => {
            expect(wrapper.state()).toEqual({
                moviesCat: [
                  "&sort_by=popularity.desc",
                  "&with_genres=28",
                  "&with_genres=27",
                  "&with_genres=35"
                ],
                urlMovies: "https:api.themoviedb.org/3/discover/movie?",
                error: ""
              })
        });
        it("should invoke the fetch call on component did mount", () => {

        });
        it("fetch call takes expoect url", () => {
            wrapper.instance().componentDidMount()
            expect(fetchMovies).toHaveBeenCalledWith(mockUrl, "&with_genres=28")
        })

    })
    describe("mapStateToProps", () => {
        it("should return a object", () => {
            const mockData = {
                movies: [],
                genres: [],
                category: []
            }
            const expected = {
                movies: [],
                genres: []
            }
            const mockprops = mapStateToProps(mockData)
            expect(mockprops).toEqual(expected)
        })
    })
    describe("mapDispatchToProps", () => {
        it("should call dispach for getDiscover", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getDiscover(mockMovies)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getDiscover(mockMovies)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });
        it("should call dispach for getGenres", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getGenres(mockMovies)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getGenres(mockMovies)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
});
