import { HANDLE_CHANGE } from '../constants/ActionTypes'

export const collectUserInput = (event) => {
  return { type: HANDLE_CHANGE, event }
}
