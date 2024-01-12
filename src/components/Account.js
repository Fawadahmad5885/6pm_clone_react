import React from 'react';
import styles from './account.module.css'
const Account = () => {
  return (

    <div className={styles.Box }>
      <h2>Create account</h2>
      <form className={styles.user_form}>
        <label htmlFor="name" >Name</label>
        <input type='text' className={styles.input} value={''}  placeholder='First and last name'/>
        <label htmlFor="email" >Email</label>
        <input type='text' className={styles.input} value={''} />
        <label htmlFor="password" >Password</label>
        <input type='password' className={styles.input} value={''} />
        <label htmlFor="re_password" >Re-enter password</label>
        <input type='password' className={styles.input} value={''} />
      </form>
    </div>
  )
}
export default Account;
