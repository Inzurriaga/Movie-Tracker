import { apiKey } from './apiKey'

export const fetchMovies = async (type, url) => {
  let movieUrl = `${url}${apiKey}`;
  try {
    const response = await fetch(movieUrl);
    const
  }
}
