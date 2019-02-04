import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Dashboard extends Component {
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
  return {
    username: currentUser.username,
    name: currentUser.fullname,
    protectedData: state.protectedData.data
  };
}

export default connect(mapStateToProps)(Dashboard)