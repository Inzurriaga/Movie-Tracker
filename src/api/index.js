import { apiKey } from './apiKey'

export const fetchMovies = async (url, type) => {
  let movieUrl = `${url}${apiKey}`;
    const response = await fetch(movieUrl);
    const movies = await response.json()
    return movies
}
