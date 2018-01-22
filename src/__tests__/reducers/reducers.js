import reducer from '../../reducers'
import * as types from '../../constants/ActionTypes'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ value: '' })
  })

  it('should handle HANDLE_CHANGE', () => {
    expect(
      reducer(
        {},
        {
          type: types.HANDLE_CHANGE,
          event: 'despacito'
        }
      )
    ).toEqual({
      value: 'despacito'
    })
  })
})
