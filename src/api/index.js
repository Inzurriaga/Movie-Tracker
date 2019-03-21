import { apiKey } from './apiKey'

const backEndUrl = 'http://localhost:3000/api/'

// Movies - DB Fetch Calls
const fetchMovies = async (url, urlEnd) => {
  let movieUrl = `${url}${apiKey}${urlEnd}`;
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
    const response = await fetch(`${backEndUrl}${url}`, settings(method, body))
    const user = await response.json()
    return user.data;
}

const getFetch = async (url) => {
  const response = await fetch(`${backEndUrl}${url}`)
  const user = await response.json()
  return user.data;
}



export { fetchMovies, postFetch, getFetch }
