import React, { Component } from 'react';
import Input from './input';
import requiresLogin from './containers/requires-login';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { saveJob } from '../actions/jobs';
import { required, isNumber } from '../validators';
import './styles/add-tips-form.css'

export class AddJobForm extends Component {
  onSubmit(values) {
    const { job, position, baseWage } = values;
    const { dispatch } = this.props;
    const newJob = { job, position, baseWage };
    return dispatch(saveJob(newJob))
}

  render() {
    const { submitSucceeded, pristine, submitting } = this.props
    if (submitSucceeded) {
      return <Redirect to="/dashboard" />
    }

    let errorMessage;
    if (this.props.error) {
        errorMessage = (
          <div className="message message-error">{this.props.error}</div>
        );
    }


    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {errorMessage}
          <Field label="Where do you work?" component={Input} type="text" name="job" validate={[required]}/>
          <Field label="Position" component={Input} type="text" name="position"/>
          <Field 
            label="Hourly Wage"
            component={Input} 
            type="baseWage" 
            id="baseWage"
            name="baseWage"
            validate={[isNumber, required]}
          />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}




export default requiresLogin()(reduxForm({
  form: 'addJob',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('addJob', Object.keys(errors)[0]))
})(AddJobForm));