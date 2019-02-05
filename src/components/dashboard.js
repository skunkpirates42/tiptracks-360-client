import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData())
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected Data: {this.props.protectedData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  console.log(currentUser)
  return {
    username: currentUser.username,
    name: currentUser.fullName,
    protectedData: state.protectedData.data
  };
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));