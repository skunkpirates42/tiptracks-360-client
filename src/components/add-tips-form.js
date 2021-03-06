import React, { Component } from 'react';
import Input from './input';
import BackArrow from './back-arrow';
import requiresLogin from './containers/requires-login';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { saveTips } from '../actions/tips';
import { required, isNumber } from '../validators';
import './styles/add-tips-form.css'

export class AddTipsForm extends Component {
  onSubmit(values) {
    const { date, baseWage, hours, notes, tippedOut, totalTips } = values
    const { dispatch } = this.props;
    const newReport = { date, baseWage, hours, notes, tippedOut, totalTips }
    return dispatch(saveTips(newReport));
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
      <div className="form-container">
        <h3>Add your tips</h3>
        <BackArrow to="/dashboard" pull="left" />
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {errorMessage}
          <Field label="Date" component={Input} type="date" name="date" validate={[required]}/>
          <Field label="Total Tips" component={Input} type="number" name="totalTips" validate={[isNumber, required]}/>
          <Field 
            label="Tipped Out"
            component={Input} 
            type="number"
            id="tippedOut"
            name="tippedOut"
            validate={[required, isNumber]}
          />
          <Field 
            label="Hourly Wage"
            component={Input} 
            type="number" 
            id="baseWage"
            name="baseWage"
            validate={[isNumber]}
          />
          <Field
            label="Total Hours"
            component={Input}
            type="number"
            name="hours"
            validate={[required, isNumber]}
          />
          <label className="form-label notes-label" htmlFor="notes">Notes</label>
          <Field
            aria-label="textbox"
            className="notes"
            component="textarea"
            type="notes"
            name="notes"
          />
          <button className="submit" type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}

export default requiresLogin()(reduxForm({
  form: 'addTips',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('addTips', Object.keys(errors)[0]))
})(AddTipsForm));