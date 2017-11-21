import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import DataCard from '../components/DataCard'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const component = shallow(<DataCard />)
  expect(component).toMatchSnapshot()
})
