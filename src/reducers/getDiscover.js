export const getDiscoverReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_DISCOVER':
      return action.movies
    default:
      return state
  }
}
