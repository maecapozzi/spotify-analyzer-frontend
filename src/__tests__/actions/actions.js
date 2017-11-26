import * as actions from '../../actions'
import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to collect user input', () => {
    const event = 'despacito'
    const expectedAction = {
      type: types.HANDLE_CHANGE,
      event
    }
    expect(actions.collectUserInput(event)).toEqual(expectedAction)
  })
})
