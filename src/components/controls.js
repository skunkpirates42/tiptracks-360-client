import React from 'react';
import './styles/controls.css';

export default function Controls(props) {
  return (
    
    
    <div className="controls">
      <button 
        className={props.view === 'daily' ? "view-btn active" : "view-btn"}
        onClick={() => props.setView('daily')}>
        daily
      </button>
      <button 
        className={props.view === 'weekly' ? "view-btn active" : "view-btn"}
        onClick={() => props.setView('weekly')}>
        weekly
      </button>
      <button
        className={props.view === 'monthly' ? "view-btn active" : "view-btn"}
        onClick={() => props.setView('monthly')}>
        monthly
      </button>
    </div>
  )
}
