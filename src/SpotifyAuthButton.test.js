import React from 'react'
import SpotifyAuthButton from './components/SpotifyAuthButton'
import renderer from 'react-test-renderer'

test('it renders correctly', () => {
  const component = renderer.create(
    <SpotifyAuthButton className='search-form--submit' />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
