import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './login.css';

export class LoginForm extends Component {
  onSubmit(values) {
    const { username, password } = values
    let result = this.props.dispatch(login(username, password));
    return result;
  }

  render() {
    const { pristine, submitting } = this.props
    let error;
    // Set error to be a div that displays the error passed in from redux-form's props 
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }

    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <Field 
            label="Username"
            component={Input} 
            type="text"
            id="username"
            name="username"
            validate={[required, nonEmpty]}
          />
          <Field
            label="Password" 
            component={Input} 
            type="password" 
            id="password"
            name="password"
            validate={[required, nonEmpty]}
          />
          <button disabled={pristine || submitting}>Submit</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    )
  } 
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);