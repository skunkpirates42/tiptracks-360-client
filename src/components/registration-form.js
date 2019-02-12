import React, { Component } from 'react';
import Input from './input';
import { Link } from 'react-router-dom'
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users.js';
import { login } from '../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators'
import './styles/form.css';
const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password')

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
      <div className="form-container">
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field label="Full Name" component={Input} type="text" name="fullName"/>
          <Field
            label="Username" 
            component={Input} 
            type="text"
            id="username"
            name="username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field
            label="Password" 
            component={Input} 
            type="password" 
            id="password"
            name="password"
            validate={[required, passwordLength, isTrimmed]}
          />
          <Field
            label="Confirm Password" 
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button className="submit" type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
        </form>
        <span className="register">Already have an account?</span><Link to="/">Login</Link>
      </div>
    )
  } 
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);