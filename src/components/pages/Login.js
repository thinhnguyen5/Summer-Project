import React from 'react';
import Auth from '../Auth';
import '../Form.css';


export default function Login(props) {

  function login(event)
  {
    event.preventDefault();
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          props.loginSuccess();
          props.history.push(props.redirectPathOnSuccess);
        })
      .catch(() => {
        props.loginFail();
      })

  }

  return (
    <div className='form-container'>
      <span className='close-btn'></span>
      <div className='form-content-left'>
          <img src='images/img13.jpg' alt='spacecoffee'
          className='form-img'/>
      </div>
      <div className="form-content-right">
        <form className="form" onSubmit={ login }>
        <h1>
          If you have an account already, sign in here !
        </h1>
        <div className='form-inputs'>
            <label htmlFor='username'
          className='form-label'>
              Username
            </label>
              <input
                  id='username'
                  type='username'
                  name='username'
                  className='form-input'
                  placeholder='Enter your name'
              />
        </div>
        <div className='form-inputs'>
            <label htmlFor='password'
            className='form-label'>
              Password
            </label>
              <input
                  id='password'
                  type='password'
                  name='password'
                  className='form-input'
                  placeholder='Enter your password'
              />
        </div>
        <button className='form-input-btn'
        type='submit'>
          Sign In
        </button>
        <span className='form-input-register'>
        If you have not a account yet ? Register <a href='/sign-up'>here</a>
        </span>
        </form>
      </div>
    </div>
  )
}
