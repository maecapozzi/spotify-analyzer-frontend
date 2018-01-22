import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Dashboard from '../components/Dashboard'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const dashboardProps = {
    acousticness: 0.222,
    albumImages: [
      (0: {
        height: 640,
        url: 'https://i.scdn.co/image/edcc53317411b5e025e920857fb0f871c4087ce9',
        width: 640
      }),
      (1: {
        height: 300,
        url: 'https://i.scdn.co/image/ebdc2f8abd0846f609e8b81a6c208935a3bd6eea',
        width: 300
      }),
      (2: {
        height: 64,
        url: 'https://i.scdn.co/image/01ca097819d504ee54d22bf46a2cded3e09bb7e3',
        width: 64
      })
    ],
    albumLink: 'https://open.spotify.com/album/3Gq2Dme9nesdgoqNNlcN8O',
    artist: 'Luis Fonsi',
    danceability: 0.63,
    energy: 0.815,
    instrumentalness: 0,
    liveness: 0.091,
    popularity: 83,
    songKey: 2,
    speechiness: 0.152,
    tempo: 0.152,
    timeSignature: 4,
    title: 'Despacito - Remix',
    valence: 0.813
  }

  const component = shallow(<Dashboard {...dashboardProps} />)
  expect(component).toMatchSnapshot()
})
