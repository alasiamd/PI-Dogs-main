import React from 'react';
import styles from './card.module.css';

const Card = (props) => {   



  return (
    <div className={styles.card}>
      <h1>{props.name} </h1>
    </div>
  );
};

export default Card;