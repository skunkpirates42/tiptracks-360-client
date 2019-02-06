import React, { Component } from 'react';
import Input from './input';
import { Field, reduxForm, focus } from 'redux-form';
import { required, isNumber } from '../validators'
import './add-tips-form.css'

export class AddTipsForm extends Component {
  onSubmit(values) {
    // Dispatch an async action that will send a fetch
    // request off the the /api/dailyreports endpoint
    // with the data from the form
    console.log(values)
}

  render() {
    return (
      <div>
        <form 
          className="login" 
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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

export default reduxForm({
  form: 'add-tips',
  // onSubmitFail: (errors, dispatch) =>
  //     dispatch(focus('add-tips', Object.keys(errors)[0]))
})(AddTipsForm);