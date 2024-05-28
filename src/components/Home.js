import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>This is the home page</h2>
      <Link to="/login">Click to view our login page</Link> <br/>
      <Link to="/sign-up">Click to view our SignUp page</Link>
    </div>
  )
}

export default Home
