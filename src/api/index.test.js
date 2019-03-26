import React from "react"
import  { fetchMovies, postFetch, getFetch, deleteFetch, settings, deleteSettings } from "./index"

const mockApiKey = "a98rq3p4oirh98ie43"
const mockData = [
    {
      results: [
        {
          adult: false,
          backdrop_path: "/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg",
          id: 166428,
          title: "How to Train Your Dragon: The Hidden World",
          vote_average: 7.7,
        }
      ],
      total_pages: 320,
    }
  ]

describe("api", async () => {
    it("should take expected url", () => {
        const mockUrl = "http://www.Movies.com/movie?";
        const mockUrlEnd = "&get_upcoming"
        const mockFinalUrl = "http://www.Movies.com/movie?api_key=ed07b14687da633eafa43d7e054d26d2&get_upcoming"
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve()
        }))
        fetchMovies(mockUrl, mockUrlEnd)
        expect(fetch).toHaveBeenCalledWith(mockFinalUrl)
    })
    it("should return an array when fetchMovies is invoke", async () => {
        const mockUrl = "http://www.Movies.com/movie?";
        const mockUrlEnd = "&get_upcoming"
        const mockFinalUrl = "http://www.Movies.com/movie?api_key=ed07b14687da633eafa43d7e054d26d2&get_upcoming"
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(mockData)
        }))
        const results = await fetchMovies(mockUrl, mockUrlEnd)
        expect(results).toEqual(mockData)
    })
    it("should return a object from settings", () => {
        const mockMethod= "POST";
        const mockBody = {name: "batman", id: 123}
        const result = {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(mockBody)
        }
        const response = settings(mockMethod, mockBody)
        expect(response).toEqual(result)
    })
    it("should return a object from deletesetting", () => {
      const result = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      }
      const response = deleteSettings()
      expect(response).toEqual(result)
    })
    it("postFetch should take expected url", async () => {
      const mockUrl = "users"
      const mockMethod = "POST"
      const mockBody = {password: "password", email: "gabe@gabe.com" }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve()
      }))
      postFetch(mockUrl, mockMethod, mockBody)
      const resulturl = "http://localhost:3000/api/users";
      const resultOption = {"body": "{\"password\":\"password\",\"email\":\"gabe@gabe.com\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"}
      expect(fetch).toHaveBeenCalledWith( resulturl, resultOption)
    })
    it("should return the user object if the fetch is resolved", async () => {
      const mockUrl = "users"
      const mockMethod = "POST"
      const mockbody = {data: {id: 7, name: "a", password: "a", email: "a"}}
      const mockBody = {password: "password", email: "gabe@gabe.com" }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockbody)
      }))
      const expected = {id: 7, name: "a", password: "a", email: "a"}
      const response = await postFetch(mockUrl, mockMethod, mockBody)
      expect(response).toEqual(expected)
    })
})