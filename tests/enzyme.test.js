import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


// Import components to do shallow render testing
import Post from '../client/components/Post';

//Proof of concept test
describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      label: 'Testing',
      text: 'lorem lorem'
    }

    beforeAll(() => {
      wrapper = shallow(<Post {...props} />)
    })

    it('Renders tags', () => {
      expect(wrapper.type()).toEqual('div')
    })


  })
})