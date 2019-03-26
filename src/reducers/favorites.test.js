import React from "react"
import { favorites } from "./favorites"
import {addFavorite, initialFavorites, removeFavorite, signOutFavorites } from "../actions/index"

describe("favorite", () => {
    it("should have default state", () => {
        const expected = [];
        const result = favorites(undefined, {})
        expect(result).toEqual(expected)
    })
    it("should add to the state", () => {
        const expected = [{id: 123}];
        const action = addFavorite({id: 123})
        const state = []
        const result = favorites(state, action)
        expect(result).toEqual(expected)
    })
    it("should refactor the favorite state from fetch", () => {
        const expected = [123];
        const action = initialFavorites([{movie_id: 123}])
        const state = []
        const result = favorites(state, action)
        expect(result).toEqual(expected)
    })
    it("should remove to the state", () => {
        const expected = [];
        const action = removeFavorite(123)
        const state = [123]
        const result = favorites(state, action)
        expect(result).toEqual(expected)
    })
    it("should clear to the state", () => {
        const expected = [];
        const action = signOutFavorites()
        const state = [123]
        const result = favorites(state, action)
        expect(result).toEqual(expected)
    })
})