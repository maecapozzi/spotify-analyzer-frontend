import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


import BodyCopy from '../components/BodyCopy'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const bodyCopyProps = {
    string: 'This is body copy.'
  }

  const component = shallow(<BodyCopy {...bodyCopyProps} />)
  expect(component).toMatchSnapshot()
})
