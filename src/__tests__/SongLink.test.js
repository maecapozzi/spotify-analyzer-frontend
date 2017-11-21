import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import SongLink from '../components/SongLink'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const songLinkProps = {
    result: {
      id: '6rPO02ozF3bM7NnOV4h6s2',
      name: 'sf',
      artist: 'sgs'
    },
    handleClick: () => {
      console.log('click')
    }
  }

  const component = shallow(<SongLink {...songLinkProps} />)
  expect(component).toMatchSnapshot()
})
