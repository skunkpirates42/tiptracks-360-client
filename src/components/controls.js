import React from 'react';
import './styles/controls.css';

export default function Controls(props) {
  return (
    <div className="controls">
      <button className="view-btn" onClick={() => props.setView('daily')}>daily</button>
      <button className="view-btn" onClick={() => props.setView('weekly')}>weekly</button>
      <button className="view-btn" onClick={() => props.setView('monthly')}>monthly</button>
    </div>
  )
}
