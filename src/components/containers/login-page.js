import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from '../login-form';

export class LoginPage extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.setState({loggedIn: true})
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.setState({loggedIn: false})
    }
  }
  
  render ()   {
    // If we are logged in redirect straight to the user's dashboard
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="home">
        <h2>Welcome to Tip Tracks 360</h2>
        <LoginForm />
      </div>
    );
  }
  }

const mapStateToProps = state => ({
  loggedIn: state.auth.authToken
});

export default connect(mapStateToProps)(LoginPage);