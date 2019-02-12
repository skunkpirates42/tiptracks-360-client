import React from 'react'
import { Link } from 'react-router-dom'

export default function Blurb(props) {
  return (
    <div>
      <section>
        <h2>Welcome to Tip Tracks 360</h2>
        <h3>An app providing all around analytics to your tips</h3>
        <h3>Keeping track of your tips has never been easier</h3>
        <h3>
          <Link to="/register">Sign up</Link> for free today to get the Tip Tracks 360 experience
        </h3>
        <span className="register">Already have an account?</span><Link to="/login">Login</Link>
      </section>
    </div>
  )
}
