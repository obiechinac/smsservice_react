import React from 'react'

const Login = () => {
  return (
  <div className='login'>
    <h3>Login</h3>
      <form >
    <label htmlFor="name">UserName:</label>
    <input type="text" id="name" name="name" />

    <label htmlFor="email">Password:</label>
    <input type="email" id="email" name="email" />

    <button type="submit">Login</button>
  </form>
  </div>
  )
}

export default Login
