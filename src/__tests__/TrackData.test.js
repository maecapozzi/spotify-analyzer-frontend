import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import TrackData from '../components/TrackData'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const component = shallow(<TrackData />)
  expect(component).toMatchSnapshot()
})
