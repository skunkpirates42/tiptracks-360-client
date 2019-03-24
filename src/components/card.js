import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles/stats-page.css';
import './styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTip } from '../actions/tips';
import { Link } from 'react-router-dom' 

export class Card extends Component {
  state = {
    isDeleting: false
  }

  setDeleting () {
    this.setState({ isDeleting: !this.state.isDeleting})
  }

  render () {
    const { 
      id, dispatch, formattedDate, totalTips,
      takeHomeTips, hours, hourlyType, hourlyRate, 
      avgWage, notes, job
    } = this.props

    return (
      <div className="card" role="list">
        <li className="tip-report">
          { // "Are you sure" Delete modal
            id && this.state.isDeleting 
            ? 
            <div className="modal">
              <h4>Are you sure you want to delete this item?</h4>
              <h4>This action cannot be undone</h4> 
              <button onClick={() => this.setDeleting()}>Cancel</button>
              <button onClick={() => dispatch(deleteTip(id))}>Delete</button>
            </div>
            : null
          }
  
          <div className="stats-date-container">
            <span className="stats-date">{`${formattedDate}`}</span>
          </div>
          <div className="stats">
            <p className="card-info">
              <span className="card-key">Job:</span>
              <span className="card-value">{job}</span>
            </p>
            <p className="card-info">
              <span className="card-key">Take Home Tips:</span>
              <span className="card-value">{totalTips || takeHomeTips}</span>
            </p>
            {/* Maybe have this in expanded view ?<p>Total Pay: <span>{props.takeHomePay}</span></p> */}
            <p className="card-info">
              <span className="card-key">Total Hours:</span>
              <span className="card-value">{hours}</span>
            </p>
            <p className="card-info">
              <span className="card-key">{hourlyType}:</span>
              <span className="card-value">${(hourlyRate || avgWage).toFixed(2)} / hr</span>
            </p>
            {
              // using the title attribute below so that if a note is too long, (im using elipsis in CSS)
              // you can see the contents of the note if the user hovers over it. Eventually would like this 
              // to be a feture of the expanded card view
              notes && <p title={notes} aria-label={notes} className="card-info">
                <span className="card-key">Notes:</span>
                <span title={notes} className="card-value note-value">{notes}</span>
              </p>
            }
            {/* <FontAwesomeIcon className="fas plus" pull="left" icon="plus" /> */}
            {
              id && <div>
                <FontAwesomeIcon 
                  pull="right" className="fas trash"
                  icon="trash-alt" onClick={() => this.setDeleting()}
                />
                <Link to={`/edit/${id}`}>
                  <FontAwesomeIcon className="fas pencil" icon="pencil-alt" onClick={() => console.log('edit')} />
                </Link>
              </div>
                
            }
          </div>
        </li>
      </div>
    )
  }
 
}

export default connect()(Card);