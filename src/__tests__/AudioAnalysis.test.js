import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import AudioAnalysis from '../components/AudioAnalysis'

configure({ adapter: new Adapter() })

test('it renders correctly', () => {
  const audioAnalysisProps = {
    type: 'Time Signature',
    value: '4/4'
  }

  const component = shallow(<AudioAnalysis {...audioAnalysisProps} />)
  expect(component).toMatchSnapshot()
})
