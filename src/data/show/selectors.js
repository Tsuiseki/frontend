export const getShows = state => state.shows.list
export const getShow = (state, id) => getShows(state).find((show) => show._id === id)
export const getCreationState = state => state.shows.creationState
export const getEditState = state => state.shows.editState
