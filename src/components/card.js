import React from 'react'
import './stats-page.css'

export default function Card(props) {
  return (
    <div>
      <li key={props.key} className="tip-report">
        <p name="tips">Take Home Tips: <span>{props.totalTips}</span></p>
        <p name="tips">Total Hours: <span>{props.hours}</span></p>
        <p name="tips">Average Hourly Rate: <span>${(props.avgWage).toFixed(2)} / hr</span></p>
      </li>
    </div>
  )
}

/* const daily = this.props.tips.map((tip) => {
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

const weekly = Object.keys(weeklyTips).map((week) => (
  <li key={week} className="tip-report">
    <p name="tips">Take Home Tips: <span>{weeklyTips[week].totalTips}</span></p>
    <p name="tips">Total Hours: <span>{weeklyTips[week].hours}</span></p>
    <p name="tips">Average Hourly Rate: <span>${(weeklyTips[week].avgWage).toFixed(2)} / hr</span></p>
  </li>
));


const monthly = Object.keys(monthlyTips).map((month) => (
  <li key={month} className="tip-report">
    <p name="tips">Take Home Tips: <span>{monthlyTips[month].totalTips}</span></p>
    <p name="tips">Total Hours: <span>{monthlyTips[month].hours}</span></p>
    <p name="tips">Average Hourly Rate: <span>${(monthlyTips[month].avgWage).toFixed(2)} / hr</span></p>
  </li>
)); */
