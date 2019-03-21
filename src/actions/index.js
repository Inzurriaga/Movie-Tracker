// what gets sent
export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const addUser = (userInfo) => ({
  type: "UPDATE_USER",
  userInfo
})
