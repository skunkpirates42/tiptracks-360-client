import React from 'react';
import { Dashboard } from './dashboard';
import Onboard from './onboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<Dashboard /> component', () => {
  const props = { jobs: ['one'], loading: false, username: 'bobuser', dispatch: () => {}};
  it('Smoke test', () => {
    shallow(<Dashboard {...props}  />);
  });

  it('Renders props correctly', () => {
    const wrapper = shallow(<Dashboard {...props}/>);
    expect(wrapper.contains(<h2>Hello {props.username}</h2>)).toEqual(true);
  })

  it('Renders <Onboard /> if jobs.length is 0', () => {
    const wrapper = shallow(<Dashboard jobs={[]} dispatch={() => {}} />)
    expect(wrapper.contains(<Onboard />)).toEqual(true);
  })

  it('Renders <FontAwesome icon="spinner" /> when loading is set to true', () => {
    const wrapper = shallow(<Dashboard loading={true} dispatch={() => {}} jobs={props.jobs}/>)
    expect(wrapper.contains(<FontAwesomeIcon icon="spinner" />)).toEqual(true);

  })
});
