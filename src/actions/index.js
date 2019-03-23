// what gets sent
export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const addUser = (userInfo) => ({
  type: "UPDATE_USER",
  userInfo
})

export const getGenres = (genre) => ({
  type: "GET_GENRES",
  genre
})
