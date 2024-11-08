import React from 'react'
import './Login.css'
import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import pass_icon from '../components/Assets/password.png';

export const Login = () => {
  return (
    

    <div class="wrapper">
    <form action="#">
      <h2>Login</h2>
        <div class="input-field">
        <img src={email_icon} className='icon' alt=' '></img>
        <input type="text" required/> 
        <label>Enter your email</label>
      </div>
      <div class="input-field">
      <img src={pass_icon} className='icon' alt=' '></img>
        <input type="password" required/>
        <label>Enter your password</label>
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit">Log In</button>
      <div class="register">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>
  )
}
