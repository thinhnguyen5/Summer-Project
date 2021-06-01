import React from 'react';
import axios from 'axios';
import constants from '../../constants.json';
import '../Form.css';

export default function Register (props) 
{
    function register(event)
    {
        event.preventDefault();
        console.log('post');
        axios.post(constants.baseAddress +'/users', {
            username: event.target['username'].value,
            password: event.target['password'].value
        })
        .then((response) => {
            console.log(response)
            if (response) {
                alert("Create Success!");
                props.history.push(props.redirectPathOnSuccess);
            }
            else {
                alert("Both must be string, password must be more than 6 characters long");
            }
        })
    }

    return (
        <div className='form-container'>
            <span className='close-btn'></span>
            <div className='form-content-left'>
                <img src='images/img14.jpg' alt='spacecoffe'
                className='form-img'/>
            </div>
            <div className='form-content-right'>
                <form className='form' onSubmit={ register }>
                    <h1>
                        Get Started with us today! Create your account by filling out the information out here
                        below.
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
                    <div className='form-inputs'>
                    <label htmlFor='password2'
                    className='form-label'>
                        Confirm Password
                    </label>
                        <input
                        id='password2'
                        type='password'
                        name='password2'
                        className='form-input'
                        placeholder='Enter your password again'
                        />
                    </div>
                    <button className='form-input-btn'
                    type='submit'>
                        Sign up
                    </button>
                    <span className='form-input-login'>
                        Already have an account? Sign In <a href='/login'>here</a>
                    </span>
                </form>
            </div>
        </div>
    )
}


