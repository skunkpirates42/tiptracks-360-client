import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';
import LoginPage from './login-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import StatsPage from './stats-page';
import AddTipsForm from '../add-tips-form';
import AddJobForm from '../add-job-form';
import HeaderBar from '../header-bar';
import LandingPage from './landing-page';
import { refreshAuthToken } from '../../actions/auth';
import '../styles/App.css';

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faDollarSign, faPlus, faArrowLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add(faTrashAlt, faDollarSign, faPlus, faArrowLeft, faSpinner)

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One Hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="App">
        <HeaderBar />
        <main role="main">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/stats" component={StatsPage} />
            <Route exact path="/add-tips" component={() => <AddTipsForm />} />
            <Route exact path="/add-job" component={() => <AddJobForm />} />
          </Switch>
        </main>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App)) ;
