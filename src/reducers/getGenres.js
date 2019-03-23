export const getGenres = (state = [], action) => {
    switch(action.type) {
        case 'GET_GENRES':
            return action.genre
        default:
            return state
    }
}