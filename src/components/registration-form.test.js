import React from 'react';
import RegistrationFomr from './registration-form';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<RegistrationFomr /> component', () => {
  it('Smoke test', () => {
    shallow(<RegistrationFomr />);
  })
});