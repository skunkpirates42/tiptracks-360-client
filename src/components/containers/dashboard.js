import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashControls from '../dash-controls';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h2>Hello {this.props.username}</h2>
        </div>
        <DashControls />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: currentUser.username,
    name: currentUser.fullName
  };
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));