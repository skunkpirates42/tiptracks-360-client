import React from 'react'

export default function Controls(props) {
  return (
    <div className="controls">
      <button onClick={() => props.setView('daily')}>daily</button>
      <button onClick={() => props.setView('weekly')}>weekly</button>
      <button onClick={() => props.setView('monthly')}>monthly</button>
    </div>
  )
}
