import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Blurb from '../blurb';
import '../styles/landing-page.css';

export class LandingPage extends Component {
  render() {

    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" /> 
    }
    return (
      <div className="landing">
        <Blurb />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.authToken
})

export default connect(mapStateToProps)(LandingPage);