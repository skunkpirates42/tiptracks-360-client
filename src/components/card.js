import React from 'react'
import { connect } from 'react-redux'
import './stats-page.css';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTip } from '../actions/tips';

export function Card(props) {
  return (
    <div className="card">
      <li className="tip-report">
        {props.formattedDate && <p>{props.formattedDate}</p>}
        <p>Take Home Tips: <span>{props.totalTips}</span></p>
        <p>Total Hours: <span>{props.hours}</span></p>
        <p>{props.hourlyType}: <span>${(props.hourlyRate || props.avgWage).toFixed(2)} / hr</span></p>
        {props.notes && <p className="notes">Notes: {props.notes}</p>}
        {
          props.id && <FontAwesomeIcon 
            pull="right" className="trash"
            icon="trash-alt" onClick={() => props.dispatch(deleteTip(props.id))}
          />
        }
      </li>
    </div>
  )
}

export default connect()(Card);