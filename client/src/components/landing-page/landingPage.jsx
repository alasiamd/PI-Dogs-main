import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landingPage.module.css';
import logo from '../../assets/logo.jpeg'
import lucy from '../../assets/lucy.jpeg'

const LandingPage = () => {   



  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.subtitle}>Discover the Fascinating World of Dogs</p>
        <img src={lucy} alt="Representative Photo" className={styles.representativePhoto} />
        <Link to="/home" className={styles.button}>Go to Home</Link>
      </div>
    </div>
  );
};

export default LandingPage;