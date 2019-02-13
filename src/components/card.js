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
        <div className="stats-date-container">
          <span className="stats-date">{`${props.formattedDate}\``}</span>
        </div>
        <div className="stats">
          <p className="card-info">
            <span className="card-key">Take Home Tips:</span>
            <span className="card-value">{props.totalTips || props.takeHomeTips}</span>
          </p>
          {/* Maybe have this in expanded view ?<p>Total Pay: <span>{props.takeHomePay}</span></p> */}
          <p className="card-info">
            <span className="card-key">Total Hours:</span>
            <span className="card-value">{props.hours}</span>
          </p>
          <p className="card-info">
            <span className="card-key">{props.hourlyType}:</span>
            <span className="card-value">${(props.hourlyRate || props.avgWage).toFixed(2)} / hr</span>
          </p>
          {
            props.notes && <p className="card-info">
              <span className="card-key">Notes:</span>
              <span className="card-value">{props.notes}</span>
            </p>
          }
          {/* For Expanded Card if time allows <FontAwesomeIcon className="fas plus" pull="left" icon="plus" /> */}
          {
            props.id && <FontAwesomeIcon 
              pull="right" className="fas trash"
              icon="trash-alt" onClick={() => props.dispatch(deleteTip(props.id))}
            />
          }
        </div>
      </li>
    </div>
  )
}

export default connect()(Card);