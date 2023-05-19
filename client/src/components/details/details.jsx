import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchId } from '../../reducer/action';
import styles from './details.module.css';

const Details = () => {   
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchId(id))
  }, [dispatch, id]);

const dogId = useSelector(state => state.searchId);
console.log(dogId);



  return (
    <div className={styles.card}>
      Details component
    </div>
  );
};

export default Details;