import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashControls from '../dash-controls';
import { fetchJobs } from '../../actions/jobs'
import Onboard from './onboard';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs())
  }

  render() {
    const { jobs, username } = this.props
    console.log(jobs);
    
    if (!jobs.length) {
     return <Onboard />
    }
    
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h2>Hello {username}</h2>
          <h3>What would you like to do?</h3>
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