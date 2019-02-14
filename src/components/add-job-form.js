import React, { Component } from 'react';
import Input from './input';
import requiresLogin from './containers/requires-login';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus, reset } from 'redux-form';
import { saveJob, fetchJobs } from '../actions/jobs';
import { required, isNumber } from '../validators';
import './styles/add-tips-form.css'

export class AddJobForm extends Component {
  onSubmit(values) {
    const { job, position, baseWage } = values;
    const { dispatch } = this.props;
    const newJob = { job, position, baseWage };
    return dispatch(saveJob(newJob))
            .then(() => dispatch(fetchJobs()))
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
      <div className="form-container">
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {errorMessage}
          <Field label="Where do you work?" component={Input} type="text" name="job" validate={[required]}/>
          <Field label="Position" component={Input} type="text" name="position"/>
          <Field 
            label="Hourly Wage"
            component={Input} 
            type="number" 
            id="baseWage"
            name="baseWage"
            validate={[isNumber, required]}
          />
          <button className="submit" type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}




export default requiresLogin()(reduxForm({
  form: 'addJob',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('addJob', Object.keys(errors)[0])),
  onSubmitSuccess: (result, dispatch) => {
    setTimeout(() => dispatch(reset('addJob')), 1000)
  } 
})(AddJobForm));