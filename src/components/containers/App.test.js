import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<App /> component', () => {
  it('Smoke test', () => {
    shallow(<App />);
  });
});
