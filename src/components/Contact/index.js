import React, { useState } from 'react'; 
import { validateEmail } from '../../utils/helpers'; 

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''}); 

    const { name, email, message } = formState; 

    const [errorMessage, setErrorMessage] = useState(''); 

    function handleSubmit(e) {
        e.preventDefault(); 
    }; 

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value); 
            if (!isValid) {
                setErrorMessage('This email is invalid.'); 
            } else {
                setErrorMessage(''); 
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} required.`)
            } else {
                setErrorMessage(''); 
            }
        } if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value}); 
        }
    }


    return (
        <section>
            <h1 id='contact'>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"  />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact; 