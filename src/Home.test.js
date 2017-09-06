import React from 'react'
import Home from './components/Home'
import renderer from 'react-test-renderer'

test('it renders correctly', () => {
  const component = renderer.create(
    <Home />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
