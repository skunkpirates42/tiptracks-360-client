import React, { Component } from 'react'
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchTipsData } from '../../actions/tips';
import Card from '../card';
import Controls from '../controls';
import BackArrow from '../back-arrow';
import moment from 'moment';
// import {stats} from '../../utils/stats';
import '../styles/stats-page.css'

export class StatsPage extends Component {
  state = {
    view: 'daily'
  }

  componentDidMount() {
    this.props.dispatch(fetchTipsData())
    // stats.testFunc();
  }

  setView(view) {
    this.setState({ view })
  }

  // Plan to move logic from line 27 to line ~130 to seperate file(utils/stats)
  genereteFormattedDate(date, format) {
    return moment(date).format(format);
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

  calcTotalPay(takeHomeTips, hours, baseWage) {
    takeHomeTips = Number(takeHomeTips);
    hours = Number(hours);
    baseWage = Number(baseWage);
    return (hours * baseWage) + takeHomeTips
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
      const firstDayOfWeek = moment(tip.date).weekday(0).format('MMM Do \'YY')
      const weekOfYear = moment(tip.date).week();
      const year = moment(tip.date).year();
      const month = moment(tip.date).month();
      const monthAndYear = `${month} - ${year}`;
      const yearAndWeek = `${year}-${weekOfYear}`;
      const takeHomeTips = this.calcTakeHomeTips(tip.totalTips, tip.tippedOut);
      const hourlyRate = this.calcHourlyRate(takeHomeTips, tip.hours, tip.baseWage);
      const takeHomePay = this.calcTotalPay(takeHomeTips, tip.hours, tip.baseWage)
      const monthlyFormatted = `Month of ${this.genereteFormattedDate(tip.date, 'MMM \'YY')}`;
      const weeklyFormatted = `Week of ${firstDayOfWeek}`;
      
      if (yearAndWeek in weeklyTips) {
        weeklyTips[yearAndWeek].totalTips += takeHomeTips;
        weeklyTips[yearAndWeek].wages.push(hourlyRate);
        weeklyTips[yearAndWeek].avgWage = this.calcAvgHourlyRate(weeklyTips[yearAndWeek].wages);
        weeklyTips[yearAndWeek].hours += Number(tip.hours)
        weeklyTips[yearAndWeek].takeHomePay += takeHomePay;

      } else {
        weeklyTips[yearAndWeek] = {
          formattedDate: weeklyFormatted,
          job: tip.job.job,
          totalTips: takeHomeTips,
          wages: [hourlyRate],
          avgWage: hourlyRate,
          hours: Number(tip.hours),
          takeHomePay
        };
      }

      if (monthAndYear in monthlyTips) {
        monthlyTips[monthAndYear].totalTips += takeHomeTips;
        monthlyTips[monthAndYear].wages.push(hourlyRate);
        monthlyTips[monthAndYear].avgWage = this.calcAvgHourlyRate(monthlyTips[monthAndYear].wages);
        monthlyTips[monthAndYear].hours += Number(tip.hours);
        monthlyTips[monthAndYear].takeHomePay += takeHomePay;
      } else {
        monthlyTips[monthAndYear] = {
          formattedDate: monthlyFormatted,
          job: tip.job.job,
          totalTips: takeHomeTips,
          wages: [hourlyRate],
          avgWage: hourlyRate,
          hours: Number(tip.hours),
          takeHomePay
        };
      } 
    }
    

    const daily = this.props.tips.map((tip) => {
      const { totalTips, tippedOut, hours, notes, baseWage, date, id, job } = tip
      const formattedDate = this.genereteFormattedDate(date, 'ddd, MMM Do \'YY');
      const takeHomeTips = this.calcTakeHomeTips(totalTips, tippedOut);
      const hourlyRate = this.calcHourlyRate(takeHomeTips, hours, baseWage);
      const takeHomePay = this.calcTotalPay(takeHomeTips, hours, baseWage);
      const stats = { formattedDate, hourlyRate, notes, hours, takeHomeTips, takeHomePay ,id, job };

      return (
        <Card
          key={id} hourlyType="Hourly Rate" {...stats}
        />
      )
    });

    const weekly = Object.keys(weeklyTips).map((week) => {
      const weekly = weeklyTips[week];
      return (
        <Card 
          key={week} hourlyType="Avg Hourly Rate" {...weekly}
        />
    )});

    const monthly = Object.keys(monthlyTips).map((month) => {
      const monthly = monthlyTips[month];
      return (
       <Card
          key={month} hourlyType="Avg Hourly Rate" {...monthly}
        />
    )});

    let tipsView;
    if (this.state.view === 'daily') {
      tipsView = daily;
    } else if (this.state.view === 'weekly') {
      tipsView = weekly;
    } else if (this.state.view === 'monthly') {
      tipsView = monthly
    }
    
    return (
      <div>
        <BackArrow to="/dashboard" pull="left" />
        <h2>Stats for {this.props.username}</h2>
        <h3>Toggle time period</h3> 
        <Controls 
          view={this.state.view}
          setView={(view) => this.setView(view)}
        />
        <ul className="card-container">
         {tipsView}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.auth.currentUser.username,
  tips: state.tipsData.tips,
  loading: state.tipsData.loading
})

export default requiresLogin()(connect(mapStateToProps)(StatsPage));