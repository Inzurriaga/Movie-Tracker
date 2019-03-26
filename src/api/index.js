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

const deleteSettings = () => ({
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'}
})

const postFetch = async (url, method, body) => {
  const response = await fetch(`${backEndUrl}${url}`, settings(method, body))
  return response;
}

const getFetch = async (url) => {
  const response = await fetch(`${backEndUrl}${url}`)
  if(!response.ok) {
    return 'User Already Exists'
    // throw Error(response.statusText)
  } else {
    const user = await response.json()
    return user.data;
  }
    // if(response.status === 'success') {}
}

const deleteFetch = async (url) => {
  const response = await fetch(`${backEndUrl}${url}`, deleteSettings())
  const retrievedData = await response.json()
  return retrievedData
}





export { fetchMovies, postFetch, getFetch, deleteFetch, settings, deleteSettings }
