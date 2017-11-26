import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Home } from '../components/Home'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const component = shallow(<Home />)
  expect(component).toMatchSnapshot()
})
