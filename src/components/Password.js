import React from 'react'
import styles from './password.module.css'
// import styles from './components/Password.module.css';
const Password = () => {
  return (
    <div className={styles.box}>
    
      <h1 className={styles.box_header}>Password assistance</h1>
      <p className={styles.box_para}>Enter the email address associated with your 6pm account, then click Continue.</p>

      <div className={styles.InputEmail}>
        <label htmlFor='email' className={styles.email}>Email</label>
      </div>
    </div>
  )
}
export default Password;
