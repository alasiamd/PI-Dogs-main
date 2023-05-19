import React from 'react';
import styles from './navBar.module.css';
import { useLocation } from 'react-router-dom';

const NavBar = () => {   
  const location = useLocation();

  if (location.pathname === '/home' || location.pathname === '/new') {
    return (
    
      <div className={styles.card}>
        Nav component
      </div>
    );
  }
  else {
    return (
    <></>
    );
  }
  
};

export default NavBar;