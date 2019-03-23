// what gets sent
export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const user = (userInfo) => ({
  type: 'UPDATE_USER',
  userInfo
})


export const getGenres = (genre) => ({
  type: "GET_GENRES",
  genre
})

  
export const addFavorite = (favorite) => ({
  type: 'ADD_FAVORITES',
  favorite
})

export const initialFavorites = (favLogin) => ({
  type: 'LOGIN_FAVORITES',
  favLogin
})

export const removeFavorite = (favorite) => ({
  type: 'REMOVE_FAVORITE',
  favorite
})
