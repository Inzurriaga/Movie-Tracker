import React from "react"
import { getDiscover, user, getGenres, addFavorite, initialFavorites, removeFavorite, signOutUser, signOutFavorites } from "./index"

describe("Actions", () => {
    it("should return a object with type get_discovery", () => {
        const mockdata = []

        const expected = {
            type: 'GET_DISCOVER',
            movies: []
        }
        const result = getDiscover(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type update_user", () => {
        const mockdata = {}

        const expected = {
            type:'UPDATE_USER',
            userInfo: {}
        }
        const result = user(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type get_discovery", () => {
        const mockdata = []

        const expected = {
            type: "GET_GENRES",
            genre: []
        }
        const result = getGenres(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type add_favorite", () => {
        const mockdata = []

        const expected = {
            type: 'ADD_FAVORITES',
            favorite: []
        }
        const result = addFavorite(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type login_favorite", () => {
        const mockdata = []

        const expected = {
            type: 'LOGIN_FAVORITES',
            favLogin: []
        }
        const result = initialFavorites(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type remove_favorite", () => {
        const mockdata = []

        const expected = {
            type: 'REMOVE_FAVORITE',
            favorite: []
        }
        const result = removeFavorite(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type sign_out", () => {
        const mockdata = {}

        const expected = {
            type: 'SIGN_OUT',
            signOut: {}
        }
        const result = signOutUser(mockdata)
        expect(result).toEqual(expected)
    })
    it("should return a object with type get_discovery", () => {
        const mockdata = []

        const expected = {
            type: 'SIGN_OUT_FAVORITES',
            favorites: []
        }
        const result = signOutFavorites(mockdata)
        expect(result).toEqual(expected)
    })
})