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
          <h2>Hello {this.props.username}</h2>
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected Data: {this.props.protectedData}
        </div>
        <button onClick={() => console.log('Add btn clicked')}> 
        {/* {
          !this.props.jobs ? 'Add A Job' : 'Add Your Tips'
        } */}
        Add Your Tips</button>
        <button onClick={() => console.log('view btn clicked')}>View your stats</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  // console.log(currentUser)
  return {
    username: currentUser.username,
    name: currentUser.fullName,
    protectedData: state.protectedData.data
  };
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard));