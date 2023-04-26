import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [error, setError] = useState('');

    const signupUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password must be used 6 characters')
            return;
        }

        if (password !== confirm) {
            setError('Confirm password did not match')
        }

        console.log(email, password, confirm)
    }

    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Signup</h1>
                <form onSubmit={signupUser} className='form-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" placeholder='email' name='email' />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder='password' name='password' />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="confirm">Confirm Password</label> <br />
                        <input type="password" placeholder='confirm' name='confirm' />
                    </div>
                    <p className='form-group error-message'>{error}</p>
                    <div className='form-group'>
                        <button className='login-btn'>Signup</button>
                    </div>
                    <p className='form-group'>Already have an account ? <Link to='/login' className='link-btn'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;