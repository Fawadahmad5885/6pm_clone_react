import React, { useEffect, useState } from 'react'
import styles from './password.module.css'

const Password = () => {

  const [captchaText, setCaptchaText] = useState('');

  const generateCaptcha = () => {
    let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueChars = '';

    for (let i = 0; i <= 5; i++) {
      uniqueChars += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }

    // Update the state with the generated captcha text
    setCaptchaText(uniqueChars);
  };
    useEffect(()=>{
      generateCaptcha();
    },[]);

  return (
    <>
      <div className={styles.box}>

        <h1 className={styles.box_header}>Password assistance</h1>
        <p className={styles.box_para}>Enter the email address associated with your 6pm <br></br> account, then click Continue.</p>

        <div className={styles.InputEmail}>
          <label htmlFor='email' className={styles.email}>Email</label>
          <input
            type="text"
            className={styles.input_email}
            required
          // value={''}
          />
        </div>
        <p className={styles.box_header2}>Enter the characters you see</p>
        <div className={styles.randomText}>
          <input
            type='text'
            value={captchaText}
            readOnly
            className={styles.captchaInput}
          />
        </div>
        <div className={styles.challengeText}>
          <div onClick={generateCaptcha} style={{textDecoration: 'underline', cursor : 'pointer'}} className={styles.newChallenge}
          >See a new challenge <br />
            Hear the challenge</div>
        </div>
        <div className={styles.InputCharacters}>
          <label htmlFor='characters' className={styles.char}>Type characters</label>
          <input
            type="text"
            className={styles.characters}
            required
          // value={''}
          />
        </div>
        <a href="{}" class={styles.troubleText}>Having trouble or sight impaired?</a>

        {/* Continue button */}
        <button className={styles.ContinueBtn} type='button' id='continue'>
          Continue
        </button>
      </div>
      <div className={styles.lastPara}>

        <h3 className={styles.p1}>Has your email address changed?</h3>

        <p className={styles.p2}>
          If you no longer use the email address associated with your 6pm
          account, you may contact <a href="{}" className={styles.customerServices}>Customer Service</a> for help
          restoring access to your account.
        </p>
      </div>
    </>
  )
};
export default Password;
