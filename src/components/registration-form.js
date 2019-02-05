import React, { Component } from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users.js';
import { login } from '../actions/auth';
import './login.css';

export class RegistrationForm extends Component {
  onSubmit(values) {
    const {username, password, fullName} = values;
    const user = {username, password, fullName};
    return this.props
        .dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(username, password)));
}

  render() {
    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor="fullName">Full Name</label>
          <Field component={Input} type="text" name="fullName"/>
          <label htmlFor="username">Username</label>
          <Field 
            component={Input} 
            type="text"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <Field 
            component={Input} 
            type="password" 
            id="password"
            name="password"
          />
          <label htmlFor="password">Confirm Password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
          />
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
        </form>
      </div>
    )
  } 
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);