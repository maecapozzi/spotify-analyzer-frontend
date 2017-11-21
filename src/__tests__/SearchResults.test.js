import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import SearchResults from '../components/SearchResults'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const searchResultsProps = {
    handleClick: () => {
      console.log('needs logic')
    },
    results: [
      {
        artist: 'Luis Fonsi',
        id: '6rPO02ozF3bM7NnOV4h6s2',
        name: 'Despacito - Remix'
      },
      {
        artist: 'Luis Fonsi',
        id: '7CUYHcu0RnbOnMz4RuN07w',
        name: 'Despacito (Featuring Daddy Yankee)'
      },
      {
        artist: 'Madilyn Bailey',
        id: '4vxA3aI7l73i0Hi819OQhH',
        name: 'Despacito'
      }
    ]
  }

  const component = shallow(<SearchResults {...searchResultsProps} />)
  expect(component).toMatchSnapshot()
})
