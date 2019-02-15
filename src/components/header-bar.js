import React from 'react';
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import { clearJobs } from '../actions/jobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearJobs());
    localStorage.removeItem('authToken');
  }

  render () {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button className="logout" onClick={() => this.logOut()}>Log out</button>
        );
    }

    return (
      <header role="banner" className="app-header">
        <FontAwesomeIcon icon="dollar-sign"  className="dollar" pull="left" size="3x"/> 
        <FontAwesomeIcon icon="dollar-sign"  className="dollar" pull="right" size="3x"/> 

        <h1>Tiptracks 360</h1>
        <h2 className="slogan">Giving you all around insight into your tips</h2>
        { logOutButton }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);