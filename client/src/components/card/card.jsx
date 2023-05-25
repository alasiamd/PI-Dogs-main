import React from 'react';
import styles from './card.module.css';

const Card = ({ id, image, life_span, name, temperament, weight, height }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <h2>{name}</h2>
      <p>Life Span: {life_span}</p>
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <button>View Details</button>
    </div>
  );
};

export default Card;