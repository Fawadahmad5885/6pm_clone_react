import React, { useState } from 'react';
import styles from './account.module.css';
import { GrAmazon } from "react-icons/gr";
import { BiCaretRight } from "react-icons/bi";

const Account = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleCreateAccount = () => {

    console.log('handleCreateAccount() function is working');
  }
  return (

    <div className={styles.Box}>
      <h2 className={styles.BoxHeader}>Create account</h2>
      <form className={styles.user_form} onSubmit={handleCreateAccount}>
        <label htmlFor="name" >Your name</label>
        <input type='text' className={styles.input} value={''} placeholder='First and last name' />
        <label htmlFor="email" >Email</label>
        <input type='text' className={styles.input} value={''} />
        <label htmlFor="password" >Password</label>
        <input type='password' className={styles.input} value={''} placeholder='At least 6 characters' />
        <p style={{ fontSize: '12px', marginTop: '-5px' }}>Passwords must be at least 6 characters.</p>
        <label htmlFor="re_password" >Re-enter password</label>
        <input type='password' className={styles.input} value={''} />
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
        <GrAmazon style={{ fontSize: '20px' }} /> <div style={{fontSize : '12px', marginLeft : '9px'}}>Login with Amazon</div>
      </button>
      <div className={styles.boxLine}></div>
      <div className={styles.boxLastPara}>
        <p>Already have an account? Sign in</p>
        <BiCaretRight style={{
          color: '#2fa3b5'}} />

      </div>
    </div>
  )
}
export default Account;
