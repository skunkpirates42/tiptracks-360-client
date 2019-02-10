import React from 'react'
import './stats-page.css';
import './card.css';

export default function Card(props) {
  return (
    <div className="card">
      <li className="tip-report">
        {props.formattedDate && <p>{props.formattedDate}</p>}
        <p>Take Home Tips: <span>{props.totalTips}</span></p>
        <p>Total Hours: <span>{props.hours}</span></p>
        <p>{props.hourlyType}: <span>${(props.hourlyRate || props.avgWage).toFixed(2)} / hr</span></p>
        {props.notes && <p>Notes: {props.notes}</p>}
      </li>
    </div>
  )
}
