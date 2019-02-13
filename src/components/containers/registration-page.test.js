import React from 'react';
import RegistrationPage from './registration-page';
import { shallow } from 'enzyme';
import '../../configureTests';

describe('<RegistrationPage /> component', () => {
  it('Smoke test', () => {
    shallow(<RegistrationPage />);
  })
});