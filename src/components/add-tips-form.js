import React, { Component } from 'react';
import Input from './input';
import requiresLogin from './requires-login';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { saveTips } from '../actions/tips';
import { required, isNumber } from '../validators';
import './add-tips-form.css'

export class AddTipsForm extends Component {
  onSubmit(values) {
    const { date, baseWage, hours, notes, tippedOut, totalTips } = values
    const { dispatch } = this.props;
    const newReport = { date, baseWage, hours, notes, tippedOut, totalTips }
    return dispatch(saveTips(newReport));
    // Trying to redirect to stats page ...
    // .then(() => this.props.history.push('/stats'));
}

  render() {
    const { submitSucceeded, pristine, submitting } = this.props
    if (submitSucceeded) {
      return <Redirect to="/stats" />
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
          <Field label="Date" component={Input} type="date" name="date"/>
          <Field label="Total Tips" component={Input} type="text" name="totalTips"/>
          <Field 
            label="Tipped Out"
            component={Input} 
            type="text"
            id="tippedOut"
            name="tippedOut"
            validate={[required, isNumber]}
          />
          <Field 
            label="Hourly Wage"
            component={Input} 
            type="baseWage" 
            id="baseWage"
            name="baseWage"
            validate={[isNumber]}
          />
          <Field
            label="Total Hours"
            component={Input}
            type="hours"
            name="hours"
            validate={[required, isNumber]}
          />
          <label htmlFor="notes">Notes</label>
          <Field
            component="textarea"
            type="notes"
            name="notes"
          />
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}




export default requiresLogin()(reduxForm({
  form: 'addTips',
  // onSubmitFail: (errors, dispatch) =>
  //     dispatch(focus('add-tips', Object.keys(errors)[0]))
})(AddTipsForm));