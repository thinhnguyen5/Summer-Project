import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'></span>
                <div className='form-content-left'>
                    <img src='images/img13.jpg' alt='spacecoffee'
                    className='form-img'/>
                </div>
                {!isSubmitted ? (
                    <FormSignUp submitForm ={submitForm} />
                    ) : ( <FormSuccess /> )}
            </div>
        </>
    );
};

export default Form

