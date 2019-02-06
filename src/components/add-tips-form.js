import React, { Component } from 'react';
import Input from './input';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { saveTips } from '../actions/add-tips';
import { required, isNumber } from '../validators';
import './add-tips-form.css'

export class AddTipsForm extends Component {
  onSubmit(values) {
    const { baseWage, hours, notes, tippedOut, totalTips } = values
    const { dispatch, userId } = this.props;
    const newReport = { baseWage, hours, notes, tippedOut, totalTips, userId }
    return dispatch(saveTips(newReport));
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

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id
});

const mappedComponent = connect(mapStateToProps)(AddTipsForm);

export default requiresLogin()(reduxForm({
  form: 'add-tips',
  // onSubmitFail: (errors, dispatch) =>
  //     dispatch(focus('add-tips', Object.keys(errors)[0]))
})(mappedComponent));