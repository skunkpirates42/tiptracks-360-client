import React from 'react'
import { connect } from 'react-redux'
import './styles/stats-page.css';
import './styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTip } from '../actions/tips';

export function Card(props) {
  return (
    <div className="card">
      <li className="tip-report">
        <p><span>{props.formattedDate}</span></p>
        <p>Take Home Tips: <span>{props.totalTips || props.takeHomeTips}</span></p>
        {/* Maybe have this in expanded view ?<p>Total Pay: <span>{props.takeHomePay}</span></p> */}
        <p>Total Hours: <span>{props.hours}</span></p>
        <p>{props.hourlyType}: <span>${(props.hourlyRate || props.avgWage).toFixed(2)} / hr</span></p>
        {props.notes && <p className="notes">Notes: {props.notes}</p>}
        <FontAwesomeIcon className="fas plus" pull="left" icon="plus" />
        {
          props.id && <FontAwesomeIcon 
            pull="right" className="fas trash"
            icon="trash-alt" onClick={() => props.dispatch(deleteTip(props.id))}
          />
        }
      </li>
    </div>
  )
}

export default connect()(Card);