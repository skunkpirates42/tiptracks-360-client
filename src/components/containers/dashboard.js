import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashControls from '../dash-controls';
import { fetchJobs } from '../../actions/jobs'

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs())
  }

  render() {
    console.log(this.props.jobs);
    
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
  const { jobs } = state.jobs;

  return {
    username: currentUser.username,
    name: currentUser.fullName,
    jobs: jobs
  };
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));