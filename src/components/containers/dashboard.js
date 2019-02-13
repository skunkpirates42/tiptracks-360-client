import React, { Component } from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import DashControls from '../dash-controls';
import { fetchJobs } from '../../actions/jobs'
import Onboard from './onboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs())
  }

  render() {
    const { jobs, /* username, */ loading } = this.props
    console.log(jobs);
    console.log(loading);
    
    
    if (!jobs.length) {
     return <Onboard />
    }

    if (loading) {
      return <FontAwesomeIcon icon="spinner" />
    }
    
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h2>Hello {this.props.username}</h2>
          <h3>What would you like to do?</h3>
        </div>
        <DashControls />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  const { jobs, loading } = state.jobs;

  return {
    username: currentUser.username,
    name: currentUser.fullName,
    jobs: jobs,
    loading
  };
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));