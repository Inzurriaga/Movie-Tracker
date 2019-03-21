// what gets sent
export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const user = (userInfo) => ({
  type: 'UPDATE_USER',
  userInfo
})

export const addFavorite = (favorites) => ({
  type: 'ADD_FAVORITES',
  favorites
})
