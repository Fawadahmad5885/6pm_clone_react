import React, { useState } from 'react';
import styles from './account.module.css';
import { GrAmazon } from "react-icons/gr";
import { BiCaretRight } from "react-icons/bi";
import { BiError } from "react-icons/bi";

const Account = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessagesStyle, setErrorMessagesStyles] = useState({
    display: 'none'
  });

  const [enterName, setEnterName] = useState({
    display: 'none',
    // marginTop: '0px',
    textContent: ''
  });

  const [enterEmail, setEnterEmail] = useState({
    display: 'none',
    // marginTop: '0px',
    textContent: ''
  });

  const [enterPassword, setEnterPassword] = useState({
    display: 'none',
    textContent: ''
  });

  let regex_for_email = /\S+@\S+\.\S+/;
  let regex_for_name = /^[a-zA-Z]+\s[a-zA-Z]+$/;

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // console.log('handleCreateAccount() function is working');
    setErrorMessagesStyles({
      display: 'block'
    });


    // Name Validation
    if (name === '' || !regex_for_name.test(name)) {
      setEnterName({
        display: 'list-item',
        textContent: 'Enter your name'
      });
    }
    else {
      setEnterName({ display: 'none' });
    }

    // Email Validation
    if (email === '' || !regex_for_email.test(email)) {
      setEnterEmail({
        display: 'list-item',
        textContent: email === '' ? 'Enter your email' : 'Enter a valid email address'
      });
    } else {
      setEnterEmail({ display: 'none' });
    }

    // Password Validation
    if (password === "" || password !== rePassword) {
      setEnterPassword({
        display: 'list-item',
        textContent: password === '' ? 'Enter your password' : 'Password must be correct'
      });
    } else {
      setEnterPassword({ display: 'none' });
    }

    if (name !== "" && regex_for_name.test(name) && email !== "" && regex_for_email.test(email) &&
    password !== "" && password === rePassword){
      setErrorMessagesStyles({
        display: 'none'
      });
      console.log( JSON.stringify({ name, email, password }));
    }
  }
  return (
    <>
      <div className={styles.errorsMessage} style={errorMessagesStyle}>
        <div className={styles.errorsHeading}>
          <BiError className={styles.errorIcon} style={{ fontSize: '34px' }} />
          <p className={styles.alertPara}>There was a problem</p>
        </div>
        <ul>
          <li style={{ display: enterName.display }}><p>{enterName.textContent}</p></li>
          <li style={{ display: enterEmail.display }}><p>{enterEmail.textContent}</p></li>
          <li style={{ display: enterPassword.display }}><p>{enterPassword.textContent}</p></li>
        </ul>

      </div>
      <div className={styles.Box}>
        <h2 className={styles.BoxHeader}>Create account</h2>
        <form className={styles.user_form} onSubmit={handleCreateAccount}>
          <label htmlFor="name" >Your name</label>
          <input type='text' className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder='First and last name' />
          <label htmlFor="email" >Email</label>
          <input type='text' className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password" >Password</label>
          <input type='password' className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='At least 6 characters' />
          <p style={{ fontSize: '12px', marginTop: '-5px' }}>Passwords must be at least 6 characters.</p>
          <label htmlFor="re_password" >Re-enter password</label>
          <input type='password' className={styles.input} value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
          <button className={styles.createAccountBtn} type='submit'>Create your 6pm account</button>
        </form>

        <p className={styles.boxPara}>Don't Have An Email Address or need additional help?<br></br>
          Don't Worry!<span className={styles.span}>Give Us A Call At</span> 1.888.676.2660</p>

        <div className={styles.boxPara2}>
          <div className={styles.paraLine}></div>
          <p style={{ fontSize: '12px', marginInline: '6px' }}>Other register options</p>
          <div className={styles.paraLine}></div>
        </div>

        <button className={styles.AmazonLoginTop}>
          <GrAmazon style={{ fontSize: '20px' }} /> <div style={{ fontSize: '12px', marginLeft: '9px' }}>Login with Amazon</div>
        </button>
        <div className={styles.boxLine}></div>
        <div className={styles.boxLastPara}>
          <p>Already have an account? Sign in</p>
          <BiCaretRight style={{
            color: '#2fa3b5'
          }} />

        </div>
      </div>
    </>
  )
}
export default Account;
