import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import LoginButton from '../components/LoginButton'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const loginButtonProps = {
    url: 'http://localhost:3000/auth/spotify'
  }

  const component = shallow(<LoginButton {...loginButtonProps} />)
  expect(component).toMatchSnapshot()
})
