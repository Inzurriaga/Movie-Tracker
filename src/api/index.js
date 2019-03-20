import { apiKey } from './apiKey'

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



export { fetchMovies, fetchMovieInfo }
