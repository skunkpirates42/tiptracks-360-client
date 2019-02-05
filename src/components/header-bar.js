import React from 'react';
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    localStorage.removeItem('authToken');
  }

  render () {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button onClick={() => this.logOut()}>Log out</button>
        );
    }

    return (
      <header className="app-header">
        <h1>Tiptracks 360</h1>
        { logOutButton }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);