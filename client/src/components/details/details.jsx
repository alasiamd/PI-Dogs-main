import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchId } from '../../reducer/action';
import styles from './details.module.css';
import Card from '../card/card';

const Details = () => {   
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchId(id))
  }, [dispatch, id]);

 


const dogId = useSelector(state => state.searchId);
  console.log(dogId)
  return (
    <div className={styles.card}>
      <Card
            id={dogId.id}
            key={dogId.id}
            image={dogId.reference_image_id}
            life_span={dogId.life_span}
            name={dogId.name}
            temperament={dogId.temperament}
            weight={dogId.weight}
            height={dogId.height}
          />
    </div>
  );
};

export default Details;