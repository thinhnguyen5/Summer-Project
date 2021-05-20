import React, { useState } from 'react';
import FormSignIn from './FormSignIn';
import FormSuccess1 from './FormSuccess1';
import './Form.css';


const Form1 = () => {
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
                    <FormSignIn submitForm ={submitForm} />
                    ) : ( <FormSuccess1/> )}
            </div>        
        </>
    );
};

export default Form1
