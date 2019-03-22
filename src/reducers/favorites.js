export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITES':
      return [...state, action.favorite]
    case 'LOGIN_FAVORITES':
      return action.favLogin.map(id => id.movie_id)
    case 'REMOVE_FAVORITE':
      return state.filter(fav => fav !== action.favorite)
    default:
      return state
  }
}
