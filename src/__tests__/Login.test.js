import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Login from '../components/Login'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const LoginProps = {
    url: 'http://localhost:3001'
  }

  const component = shallow(<Login {...LoginProps} />)
  expect(component).toMatchSnapshot()
})
