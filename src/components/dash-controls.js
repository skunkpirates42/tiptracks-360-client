import React from 'react'
import { NavLink } from 'react-router-dom';
import './styles/controls.css'

export default function DashControls(props) {
  return (
    <div className="controls">
      {/* <NavLink to="/add-job"><button className="dash-nav"> Add A Job</button></NavLink> */}
      <NavLink to="/add-tips"><button className="dash-nav"> Add Tips</button></NavLink>
      <NavLink to="/stats"><button className="dash-nav">View Stats</button></NavLink>
    </div>
  )
}
