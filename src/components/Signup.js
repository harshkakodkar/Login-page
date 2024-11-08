import React from 'react';
import './SignUp.css';
import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import pass_icon from '../components/Assets/password.png';

export const Signup = () => {
  const [checked, setChecked] = React.useState(false);

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className='container'>
      <div className='border'>
        <div className='header'>
          <div className='text'>Sign Up</div>
        </div>

        <div className='form'>
          <form>
            <div className='input-field'>
              <img src={user_icon} className='icon' alt=' '></img>
              <label >Username:</label>
              <input type='text' id='username' name='username' required />
            </div>

            <div className='input-field'>
              <img src={email_icon} className='icon' alt=' '></img>
              <label >Email:</label>
              <input type='email' id='email' name='email' required />
            </div>

            <div className='input-field'>
              <img src={pass_icon} className='icon' alt=' '></img>
              <label >Password:</label>
              <input type='password' id='password' name='password' required />
            </div>

            <div className='forgot'>
              <input
                value='test'
                type='checkbox'
                onChange={handleChange}
                id='remember'
              />
              <label className='text2' htmlFor='remember'>
                Remember me
              </label>

              <a href='#' className='text3'>
                Forgot Password
              </a>
            </div>

            <div className='button'>
              <button type='submit' className='button1'>
                Sign Up
              </button>
              <p className='text2'>
                Don't have an account{' '}
                <a href='#' className='text3'>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
