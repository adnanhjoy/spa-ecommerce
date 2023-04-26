import React, { useContext } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const loginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user
            form.reset()
            navigate('/')
        })
        .catch(error => console.error(error))

        console.log(email, password)
    }

    return (
        <div>
            <div className='form-container'>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={loginUser} className='form-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" placeholder='email' name='email' required />
                    </div>
                    <div className='form-group password-container'>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" placeholder='password' name='password' required />
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