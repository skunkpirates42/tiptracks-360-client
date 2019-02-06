import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import StatsPage from './stats-page';
import AddTipsForm from './add-tips-form';
import HeaderBar from './header-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/stats" component={StatsPage} />
          <Route exact path="/add-tips" component={() => <AddTipsForm />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App)) ;
