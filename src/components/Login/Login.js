import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form className='form-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" placeholder='email' name='email' />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder='password' name='password' />
                    </div>
                    <div className='form-group'>
                        <button className='login-btn'>Login</button>
                    </div>
                    <p className='form-group'>You don't have an account ? <Link to='/signup' className='link-btn'>Signup</Link></p>
                </form>
                <div className='form-group'>
                    <button className='google-btn'>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;