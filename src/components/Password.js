import React, { useEffect, useState } from 'react';
import { BiError } from "react-icons/bi";
import styles from './password.module.css';

const Password = () => {

  const [email, setEmail] = useState('');
  const [characters, setCharacters] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [errorMessageStyle, setErrorMessageStyle] = useState({
    display: 'none'
  });

  const [enterEmail, setEnterEmail] = useState({
    display: 'none',
    textContent: ''
  });
  const [enterCharacters, setEnterCharacters] = useState({
    display: 'none',
    textContent: ''
  });

  let regex_for_email = /\S+@\S+\.\S+/;


  // ================= Captcha Start ================== //

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
  useEffect(() => {
    generateCaptcha();
  }, []);

  // ================== End =======================  //

  // =============== Error message ================ //

  // =================== Continue Button start ================== //

  const handleContinue = () => {

    console.log("Continue button working..........");
    setErrorMessageStyle({ display: 'block' });

    // Email Validation
    if (email === '' || !regex_for_email.test(email)) {
      setEnterEmail({
        display: 'list-item',
        textContent: email === '' ? 'Enter your email' : 'Enter a valid email address'
      });
    } else {
      setEnterEmail({ display: 'none' });
      console.log("Email ok");
    }

    // Characters Validation
    if (characters === '' || characters !== captchaText) {
      setEnterCharacters({
        display: 'list-item',
        textContent: 'Enter the characters as they are given in the challenge.'
      });
    } else {
      setEnterCharacters({ display: 'none' });
    }

    // If both Email and Characters are Valid..

    if (email !== "" && regex_for_email.test(email) && characters !== "" && characters === captchaText) {
      setErrorMessageStyle({ display: 'none' });
      console.log('ALL IS WELL');
    }
  };
  return (
    <>
      <div className={styles.errorMessage} style={errorMessageStyle}>
        <div className={styles.errors}>
          <BiError className={styles.errorIcon} />
          <p className={styles.alert_para}>There was a problem</p>
        </div>
        <ul>
          <li style={{ display: enterEmail.display,marginBottom: '-20px' }}><p>{enterEmail.textContent}</p></li>
          <li style={{ display: enterCharacters.display }}><p>{enterCharacters.textContent}</p></li>
        </ul>
      </div>

      {/* =============== Box ============== */}

      <div className={styles.box}>

        <h1 className={styles.box_header}>Password assistance</h1>
        <p className={styles.box_para}>Enter the email address associated with your 6pm <br></br> account, then click Continue.</p>

        <div className={styles.InputEmail}>
          <label htmlFor='email' className={styles.email}>Email</label>
          <input
            type="email"
            className={styles.input_email}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={false} // Make sure it is not set to true
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
          <div onClick={generateCaptcha} style={{ textDecoration: 'underline', cursor: 'pointer' }} className={styles.newChallenge}
          >See a new challenge <br />
            Hear the challenge</div>
        </div>
        <div className={styles.InputCharacters}>
          <label htmlFor='characters' className={styles.char}>Type characters</label>
          <input
            type="text"
            className={styles.characters}
            required
            value={characters}
            onChange={(e) => setCharacters(e.target.value)}
            disabled={false}
          />
        </div>
        <div class={styles.troubleText}>Having trouble or sight impaired?</div>

        {/* Continue button */}
        <button onClick={handleContinue} className={styles.ContinueBtn}>
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
