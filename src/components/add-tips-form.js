import React, { Component } from 'react';
import Input from './input';
import requiresLogin from './requires-login';
import { Field, reduxForm, focus } from 'redux-form';
import { saveTips } from '../actions/tips';
import { required, isNumber } from '../validators';
import './add-tips-form.css'

export class AddTipsForm extends Component {
  onSubmit(values) {
    const { date, baseWage, hours, notes, tippedOut, totalTips } = values
    const { dispatch } = this.props;
    const newReport = { date, baseWage, hours, notes, tippedOut, totalTips }
    console.log(values)
    return dispatch(saveTips(newReport));
    // Trying to redirect to stats page ...
    // .then(() => this.props.history.push('/stats'));
}

  render() {
    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor="date">Date</label>
          <Field component={Input} type="date" name="date"/>
          <label htmlFor="totalTips">Total Tips</label>
          <Field component={Input} type="text" name="totalTips"/>
          <label htmlFor="tippedOut">Tipped Out</label>
          <Field 
            component={Input} 
            type="text"
            id="tippedOut"
            name="tippedOut"
            validate={[required, isNumber]}
          />
          <label htmlFor="baseWage">Hourly Wage</label>
          <Field 
            component={Input} 
            type="baseWage" 
            id="baseWage"
            name="baseWage"
            validate={[isNumber]}
          />
          <label htmlFor="hours">Total Hours</label>
          <Field
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
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
        </form>
      </div>
    )
  } 
}




export default requiresLogin()(reduxForm({
  form: 'add-tips',
  // onSubmitFail: (errors, dispatch) =>
  //     dispatch(focus('add-tips', Object.keys(errors)[0]))
})(AddTipsForm));