export const user = (state = {}, action) => {
  switch(action.type){
    case 'UPDATE_USER':
        return action.userInfo;
    case 'SIGN_OUT':
        return state = {}
    default:
        return state;
  }
}
