import React from 'react';
import AddTipsForm from './add-tips-form';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<AddTipsForm /> component', () => {
  it('Smoke test', () => {
    shallow(<AddTipsForm />);
  })
});