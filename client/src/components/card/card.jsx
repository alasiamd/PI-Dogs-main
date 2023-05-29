import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ id, image, life_span, name, temperament, weight, height, fromDetails }) => {
  const cardClassName = fromDetails ? styles.cardDetails : styles.cardHome;
  const buttonClassName = fromDetails ? styles.buttonDetails : styles.buttonHome;
  const imageClassName = fromDetails ? styles.imageContainerDetails : styles.imageContainerHome;
  const location = useLocation();

  const [errorImg, setErrorImg] = useState(false);
  const [ errorImg2, setErrorImg2 ] = useState(false);
  const imgURL = "https://cdn2.thedogapi.com/images/";

  const handleImgError = () => {
    setErrorImg(true);
  }

  const handleImgError2 = () => {
    setErrorImg2(true);
  }

  const imagen = () => {
    if (!errorImg2) {
      return <img src={image} alt={name} className={styles.image} onError={handleImgError2}/>
    }
    else if (!errorImg) {
      return <img src={`${imgURL}${image}.jpg`} alt={name} className={styles.image} onError={handleImgError}/>
    } else {
      return <img src={`${imgURL}${image}.png`} alt={name} className={styles.image} />
    }
  }

  return (
    // `${imgURL}${dogId.reference_image_id}.jpg`
    <div className={`${cardClassName}`}>
      
      <div className={`${imageClassName}`}>
        {imagen() }
      </div>
      <h2>{name}</h2>
      <p>Life Span: {life_span}</p>
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p> 
      {
        location.pathname === '/home' ? (
          <Link to={`/details/${id}`} className={`${styles.button} ${buttonClassName}`} >
            View Details
          </Link>
        ) : (
          <Link to={`/home`} className={`${styles.button} ${buttonClassName}`} >
            Back to Home
          </Link>
        )
      }
      
      
    </div>
  );
};

export default Card;