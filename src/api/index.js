import { apiKey } from './apiKey'

const backEndUrl = 'http://localhost:3000/api/'

// Movies - DB Fetch Calls
const fetchMovies = async (url, type) => {
  let movieUrl = `${url}${apiKey}`;
    const response = await fetch(movieUrl);
    const movies = await response.json()
    return movies
}

const fetchMovieInfo = async (url, id) => {
  let movieUrl = `${url}?${apiKey}&append_to_response=videos`;
    const response = await fetch(movieUrl);
    const movies = await response.json()
    return movies
}

// Users - Backend Fetch Calls
const settings = (method, body) => ({
  method,
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(body)
})

const postFetch = async (url, method, body) => {
  try {
    const response = await fetch(`${backEndUrl}${url}`, settings(method, body))
    const user = await response.json()
    return user.data;
  } catch (error) {
    console.log(error.message);
  }
}



export { fetchMovies, fetchMovieInfo, postFetch }
