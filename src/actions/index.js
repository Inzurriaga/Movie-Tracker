// what gets sent
export const getDiscover = (movies) => ({
  type: 'GET_DISCOVER',
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

export const signOutUser = (signOut) => ({
  type: 'SIGN_OUT',
  signOut
})

export const signOutFavorites = (favorites) => ({
  type: 'SIGN_OUT_FAVORITES',
  favorites
})
