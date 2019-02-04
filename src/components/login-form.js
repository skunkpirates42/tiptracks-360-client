import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form'; 
import './login.css';

export class LoginForm extends Component{
  onSubmit(values) {
    console.log('submitted')
  }

  render() {
    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor="user">Username</label>
          <Field 
            component='input' 
            type="text"
            name="user"
          />
          <label htmlFor="password">Password</label>
          <Field 
            component='input' 
            type="password" 
            name="password"
          />
          <button disabled={this.props.pristine || this.props.submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}

export default reduxForm({
  form: 'login'
})(LoginForm);