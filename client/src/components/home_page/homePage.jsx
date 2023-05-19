import React, { useEffect } from 'react';
import styles from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { all } from '../../reducer/action';

const HomePage = () => {   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(all())
  },[])

  const allReg = useSelector(state => state.all);
  console.log(allReg);
  return (
    <div className={styles.card}>
      Home page component
    </div>
  );
};

export default HomePage;