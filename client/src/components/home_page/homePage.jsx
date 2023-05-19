import React, { useEffect } from 'react';
import styles from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { all } from '../../reducer/action';
import Card from '../card/card'

const HomePage = () => {   
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(all())
  },[])

  const allReg = useSelector(state => state.all);
  console.log(allReg);
  return (
    <div className={styles.card}>
      {allReg.map(({ id, image, life_span, name, temperament, weight, height }) => <Card 
        id = {id}
        key = {id}
        image = {image}
        life_span = {life_span}
        name = {name}
        temperament = {temperament}
        weight = {weight}
        height = {height}
      />)}
      

    </div>
  );
};

export default HomePage;