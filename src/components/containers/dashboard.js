import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { NavLink } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h2>Hello {this.props.username}</h2>
        </div>
        <NavLink to="/add-job"><button> Add A Job</button></NavLink>
        <NavLink to="/add-tips"><button> Add Tips</button></NavLink>
        <NavLink to="/stats"><button >View Stats</button></NavLink>
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