import React, { Component } from 'react'
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {API_BASE_URL} from '../config'

export class StatsPage extends Component {
  state = {
    view: ''
  }

  componentDidMount() {
    return fetch(`${API_BASE_URL}`)
  }

  render() {

    return (
      <div>
        <h2>Stats for {this.props.username}</h2>
        <button onClick={() => this.setState({view: 'daily'})}>daily</button>
        <button onClick={() => this.setState({view: 'weekly'})}>weekly</button>
        <button onClick={() => this.setState({view: 'monthly'})}>monthly</button>
        <div>
          <p name="tips">Total Tips: <span>$175</span></p>
          <p name="tips">Total Hours: <span>6</span></p>          
          <p name="tips">Hourly Rate: <span>$29.16 / hr</span></p>
          <p name="notes">Notes: <span>Lorum Ipsum Dolor...</span></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username
})

export default requiresLogin()(connect(mapStateToProps)(StatsPage));