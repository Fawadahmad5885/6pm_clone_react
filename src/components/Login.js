import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { GrAmazon } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [boxHeight, setBoxHeight] = useState('auto');

    const navigate = useNavigate();


    const handleSignIn = () => {

        if (email === '') {
            setEmailError('Enter your email or mobile phone number');
            setBoxHeight('auto');
        } else {
            setEmailError('');
        }

        if (password === '') {
            setPasswordError('Enter your password');
            setBoxHeight('auto');
        } else {
            setPasswordError('');
        }
    };

    const showAlert = () => {
        alert(
            "Keep me signed in reduces the number of times you're asked to Sign-In on this device. To keep your account secure, use this option only on your personal devices."
        );
    };

    const handleClickNavigate = () => {
        navigate("/account")
    }

    return (
        <div className='box' style={{ height: boxHeight }}>
            <div className='box_contents'>
                <h2>Sign-In</h2>

                <form action='#' className='user_form'>
                    {/* Email input */}
                    <div className='Input_email'>
                        <label htmlFor="email" className='email'>Email</label>
                        <input
                            type="text"
                            className='input_email'
                            required
                            value={email}
                            onChange={(text) => setEmail(text.target.value)}
                        />
                        {emailError ? <span className="error-message">{emailError}</span> : null}
                    </div>

                    <div className='Input_password'>
                        <Link to="/password" className="password_forgot">
                            Forgot your password?
                        </Link>
                        <label htmlFor="password" className='password'>Password</label>
                        <input
                            type="password"
                            className='input_password'
                            required
                            value={password}
                            onChange={(text) => setPassword(text.target.value)}
                        />
                        {passwordError ? <span className="error-message">{passwordError}</span> : null}
                    </div>


                    {/* Sign in button */}
                    <button onClick={handleSignIn} className='btn' type='button' id='sign-in'>
                        Sign in
                    </button>
                </form>

                {/* Check box */}
                <div className='check-box'>
                    <input type='checkbox' id='check' name='check' style={{ width: '15px' }} />
                    <label htmlFor='check'>Keep me signed in.</label>
                    <div className='details_and_icon'>
                        <a className='details' href='#' onClick={showAlert}>
                            Details
                        </a>
                        <BiSolidDownArrow className='down_arrow' />
                    </div>
                </div>

                {/* More sign in options */}
                <div className='more_option'>
                    <div className='lines'>
                        <div className='line'></div>
                        <div className='p'>More sign in options</div>
                        <div className='line'></div>
                    </div>

                    {/* Login with Amazon button */}
                    <button className='amazon_button'>
                        <a href='#' className='amazon_signIn'>
                            <GrAmazon className='amazon_icon' />
                            <div className='btn_text'>Login with Amazon</div>
                        </a>
                    </button>

                    {/* New to 6pm button */}
                    <div className='lines_2nd'>
                        <div className='line'></div>
                        <div className='p2'>New to 6pm?</div>
                        <div className='line'></div>
                    </div>
                    <button onClick={handleClickNavigate} className='btn2' type='button'>
                        Create your 6pm account
                    </button>
                </div>
            </div>

        </div>
    );
};


export default Login;









