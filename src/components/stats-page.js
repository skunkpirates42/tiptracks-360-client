import React, { Component } from 'react'
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchTipsData } from '../actions/tips';
import moment from 'moment'
import './stats-page.css'

export class StatsPage extends Component {
  state = {
    view: ''
  }

  componentDidMount() {
    this.props.dispatch(fetchTipsData())
  }

  genereteFormattedDate(date) {
    return moment(date).format('dddd, MMMM Do YYYY');
  }

  calcHourlyRate (takeHomeTips, hours, baseWage) {

    // Validate - we don't want to do  JS math with anything but numbers
    if (!Number.isNaN(hours)) {
      hours = Number(hours)
    }
    
    if (!Number.isNaN(takeHomeTips)) {
      takeHomeTips = Number(takeHomeTips)
    } 

    if (!Number.isNaN(baseWage)) {
      baseWage = Number(baseWage)
    }

    return (takeHomeTips / hours) + baseWage;
    
  }

  render() {

    const tips = this.props.tips.map((tip) => {
      const { totalTips, tippedOut, hours, notes, baseWage, date, id } = tip
      const formattedDate = this.genereteFormattedDate(date);
      const takeHomeTips = totalTips - tippedOut;
      const hourlyRate = this.calcHourlyRate(takeHomeTips, hours, baseWage);
      console.log(hourlyRate);
      

      return (
        <li className="tip-report" key={id}>
          <p>{formattedDate}</p>
          <p name="tips">Take Home Tips: <span>{takeHomeTips}</span></p>
          <p name="tips">Total Hours: <span>{hours}</span></p>          
          <p name="tips">Hourly Rate: <span>${hourlyRate} / hr</span></p>
          <p name="notes">Notes: <span>{notes}</span></p>
        </li>
      )
    });

    const weeklyTips = {};
  
    for (let tip of this.props.tips) {

      let weekOfYear = moment(tip.date).week();
      let year = moment(tip.date).year();
      let yearAndWeek = `${year}-${weekOfYear}`;

      
    
      if (yearAndWeek in weeklyTips) {
        weeklyTips[yearAndWeek].totalTips += tip.totalTips;
      } else {
        weeklyTips[yearAndWeek] = {
          totalTips: tip.totalTips,
          avgWage: 'so'
        };
      }

    }
    console.log(weeklyTips);
    
    return (
      <div>
        <h2>Stats for {this.props.username}</h2>
        <button onClick={() => this.setState({view: 'daily'})}>daily</button>
        <button onClick={() => this.setState({view: 'weekly'})}>weekly</button>
        <button onClick={() => this.setState({view: 'monthly'})}>monthly</button>
        <ul>
         {tips}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  tips: state.tipsData.tips
})

export default requiresLogin()(connect(mapStateToProps)(StatsPage));