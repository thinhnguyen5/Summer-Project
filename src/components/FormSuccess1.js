import React from 'react'
import './Form.css'

const FormSuccess1 = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>Login successful!</div>
            <img src='images/img14.jpg' alt='success-image'
            className='form-img-2'/>
            <span className='form-input-success'>
                    Take your coffee <a href='/menu'>here</a>
            </span>
        </div>
    );
};

export default FormSuccess1;
