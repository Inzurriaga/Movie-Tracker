import React from "react"
import { getGenres } from "../actions/index"
import { genresReducer } from "./getGenres"
describe("getGenres", () => {
    it("should have a default", () => {
        const expected = [];
        const result = genresReducer(undefined, {})
        expect(result).toEqual(expected)
    })
    it("should svae the genre to state", () => {
        const expected = [{name: "batman"}];
        const action = getGenres([{name: "batman"}])
        const state = []
        const result = genresReducer(state, action)
        expect(result).toEqual(expected)
    })
})