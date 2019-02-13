import React from 'react';
import AddJobForm from './add-job-form';
import { shallow } from 'enzyme';
import '../configureTests';

describe('<AddJobForm /> component', () => {
  it('Smoke test', () => {
    shallow(<AddJobForm />);
  })
});