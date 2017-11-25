import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../components/Header'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const component = shallow(<Header />)
  expect(component).toMatchSnapshot()
})
