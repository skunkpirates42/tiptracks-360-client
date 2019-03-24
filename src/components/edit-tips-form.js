import React, { Component } from 'react';
import Input from './input';
import BackArrow from './back-arrow';
import requiresLogin from './containers/requires-login';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import { saveTips } from '../actions/tips';
import { required, isNumber } from '../validators';
import './styles/add-tips-form.css'

export class EditTipsForm extends Component {
  // componentDidMount() {
  //   this.props.dispatch(getJobsById(this.props.match.params.id))
  // }

  onSubmit(values) {
    const { date, baseWage, hours, notes, tippedOut, totalTips } = values
    const { dispatch } = this.props;
    const updateReport = { date, baseWage, hours, notes, tippedOut, totalTips }
    return dispatch(saveTips(updateReport));
}

  render() {
    const { submitSucceeded, pristine, submitting, error, handleSubmit } = this.props
    if (submitSucceeded) {
      return <Redirect to="/stats" />
    }

    let errorMessage;
    if (error) {
        errorMessage = (
          <div className="message message-error">{error}</div>
        );
    }

    return (
      <div className="form-container">
        <BackArrow to="/dashboard" pull="left" />
        <form 
          className="login" 
          onSubmit={handleSubmit(values => this.onSubmit(values))}>
          {errorMessage}
          <Field label="Date" component={Input} type="date" name="date"/>
          <Field label="Total Tips" component={Input} type="number" name="totalTips"/>
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

const mapStateToProps = state => {
  return {
    intitialValues: state.tipsData.tips
  }
}

export default withRouter(
  requiresLogin()(
    reduxForm({
      form: 'editTips',
      enableReinitialize: true,
      onSubmitFail: (errors, dispatch) =>
          dispatch(focus('editTips', Object.keys(errors)[0]))
    })(connect(mapStateToProps)(EditTipsForm))
  )
);