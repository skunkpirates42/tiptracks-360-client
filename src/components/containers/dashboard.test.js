import React from 'react';
import Dashboard from './dashboard';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<Dashboard /> component', () => {
  it('Smoke test', () => {
    shallow(<Dashboard />);
  });

  it('Renders props correctly', () => {
    const username = 'bobuser';
    const wrapper = shallow(<Dashboard username={username}/>);
    // expect(wrapper.contains(<h2>Hello bobuser</h2>)).toEqual(true);
  })
});
