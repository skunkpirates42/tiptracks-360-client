import React, { Component } from 'react'
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchTipsData } from '../actions/tips';
import moment from 'moment'
import './stats-page.css'

export class StatsPage extends Component {
  state = {
    view: 'daily'
  }

  componentDidMount() {
    this.props.dispatch(fetchTipsData())
  }

  genereteFormattedDate(date) {
    return moment(date).format('dddd, MMMM Do YYYY');
  }

  calcTakeHomeTips (totalTips, tippedOut) {
    if (!Number.isNaN(totalTips)) {
      totalTips = Number(totalTips)
    }
    
    if (!Number.isNaN(tippedOut)) {
      tippedOut = Number(tippedOut)
    } 

    return totalTips - tippedOut;
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

  calcAvgHourlyRate(hourlyRates) {
    const accumulatedHourlyRate = hourlyRates.reduce((acc, next) => acc += next);
    return accumulatedHourlyRate / hourlyRates.length;
  }

  render() {

    const weeklyTips = {};
    const monthlyTips = {};
  
    for (let tip of this.props.tips) {

      const weekOfYear = moment(tip.date).week();
      const year = moment(tip.date).year();
      const month = moment(tip.date).month();
      const monthAndYear = `${month} - ${year}`;
      const yearAndWeek = `${year}-${weekOfYear}`;
      const takeHomeTips = this.calcTakeHomeTips(tip.totalTips, tip.tippedOut);
      const hourlyRate = this.calcHourlyRate(takeHomeTips, tip.hours, tip.baseWage)
      
      
      
      if (yearAndWeek in weeklyTips) {
        weeklyTips[yearAndWeek].totalTips += takeHomeTips;
        weeklyTips[yearAndWeek].wages.push(hourlyRate);
        weeklyTips[yearAndWeek].avgWage = this.calcAvgHourlyRate(weeklyTips[yearAndWeek].wages)
      } else {
        weeklyTips[yearAndWeek] = {
          totalTips: takeHomeTips,
          wages: [hourlyRate],
          avgWage: hourlyRate
        };
      }

      if (monthAndYear in monthlyTips) {
        monthlyTips[monthAndYear].totalTips += takeHomeTips;
        monthlyTips[monthAndYear].wages.push(hourlyRate);
        monthlyTips[monthAndYear].avgWage = this.calcAvgHourlyRate(monthlyTips[monthAndYear].wages)
      } else {
        monthlyTips[monthAndYear] = {
          totalTips: takeHomeTips,
          wages: [hourlyRate],
          avgWage: hourlyRate
        };
      }
    }

    const daily = this.props.tips.map((tip) => {
      const { totalTips, tippedOut, hours, notes, baseWage, date, id } = tip
      const formattedDate = this.genereteFormattedDate(date);
      const takeHomeTips = this.calcTakeHomeTips(totalTips, tippedOut);
      const hourlyRate = this.calcHourlyRate(takeHomeTips, hours, baseWage);
      

      return (
        <li className="tip-report" key={id}>
          <p>{formattedDate}</p>
          <p name="tips">Take Home Tips: <span>{takeHomeTips}</span></p>
          <p name="tips">Total Hours: <span>{hours}</span></p>          
          <p name="tips">Hourly Rate: <span>${hourlyRate.toFixed(2)} / hr</span></p>
          <p name="notes">Notes: <span>{notes}</span></p>
        </li>
      )
    });

    let tipsView;
    if (this.state.view === 'daily') {
      tipsView = daily;
    } else if (this.state.view === 'weekly') {

      // As of right now this doesn't work b/c I need to access `weeklyTips[yearAndWeek].totalTips`
      // and I'm trying to access just weeklyTips.totalTips which does not exist...
      // need to figures out a way to do that.. perhaps Object.keys then iterate over it like an
      // array? 
            
      tipsView = (
      <li className="tip-report">
        <p name="tips">Take Home Tips: <span>{weeklyTips.totalTips}</span></p>
        {/* <p name="tips">Total Hours: <span>{hours}</span></p> */}
        <p name="tips">Average Hourly Rate: <span>${weeklyTips.avgWage} / hr</span></p>
      </li>
    )
    } else if (this.state.view === 'monthly') {
      tipsView = (
        <li className="tip-report">
          <p name="tips">Take Home Tips: <span>{monthlyTips.totalTips}</span></p>
          {/* <p name="tips">Total Hours: <span>{hours}</span></p> */}
          <p name="tips">Average Hourly Rate: <span>${monthlyTips.avgWage} / hr</span></p>
        </li>
      )
    }
    console.log(weeklyTips);
    console.log(monthlyTips);
    
    
    return (
      <div>
        <h2>Stats for {this.props.username}</h2>
        <button onClick={() => this.setState({view: 'daily'})}>daily</button>
        <button onClick={() => this.setState({view: 'weekly'})}>weekly</button>
        <button onClick={() => this.setState({view: 'monthly'})}>monthly</button>
        <ul>
         {tipsView}
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