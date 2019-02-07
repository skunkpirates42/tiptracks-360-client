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
        <div className="dashboard-name">Name: {this.props.name}</div>
        <NavLink to="/add-tips"><button onClick={() => console.log('Add btn clicked')}> 
        {/* {
          !this.props.jobs ? 'Add A Job' : 'Add Your Tips'
        } */}
        Add Your Tips</button></NavLink>
        <NavLink to="/stats"><button >View your stats</button></NavLink>
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