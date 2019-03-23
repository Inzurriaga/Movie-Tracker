export const user = (state = {}, action) => {
  switch(action.type){
    case 'UPDATE_USER':
        return action.userInfo;
    default:
        return state;
  }
}
