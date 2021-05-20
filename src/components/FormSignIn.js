import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignIn = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    If you have an account already, sign in here !
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='email'
                    className='form-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange} 
                    />
                        {errors.email && <p>{errors.email}</p>}
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
                        value={values.password}
                        onChange={handleChange}
                    />
                        {errors.password && <p>{errors.password}</p>}
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
    )
}

export default FormSignIn;
