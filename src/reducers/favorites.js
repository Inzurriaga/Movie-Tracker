export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITES':
      console.log(action);
      return [...state, action.favorite]
    case 'LOGIN_FAVORITES':
      return action.favLogin
    default:
      return state
  }
}
