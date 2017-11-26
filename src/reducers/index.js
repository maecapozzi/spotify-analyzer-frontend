import { HANDLE_CHANGE } from '../constants/ActionTypes'

const initialState = {
  value: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return Object.assign({}, state, {
        value: action.event
      })
    default: return state
  }
}

export default reducer
