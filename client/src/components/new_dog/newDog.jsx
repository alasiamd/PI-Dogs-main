import React, { useEffect, useState } from 'react';
import { temperaments, createDogs } from '../../reducer/action';
import { useDispatch, useSelector } from 'react-redux';

import styles from './newDog.module.css';
import {validate} from './validation'

const NewDog = () => {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temperaments())
  }, [])

  const allTemperaments = useSelector(state => state.temperaments);  
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  // const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({
    name : "",
    image : "",
    minHeight : "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife : "",
    maxLife : "",
    temperament : []
  })

  const handleTemperamentSelect = (e) => {
    const selectedTemperament = e.target.value;
    if (!selectedTemperaments.includes(selectedTemperament)) {
      setSelectedTemperaments([...selectedTemperaments, selectedTemperament]);
    }
    return selectedTemperaments;
  };
  

  const [dog, setDog] = useState({
    name : "",
    image : "",
    minHeight : "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife : "",
    maxLife : "",
    temperament : []
  });


  const handelInputChange = (e) => {
    const {value, name} = e.target;
    if (name === 'temperament') handleTemperamentSelect(e)
    setDog({
      ...dog, [name]: value, temperament: selectedTemperaments      
    });
    setErrors(
      validate({
        ...dog, [name]: value
      })
    );
    
  }

  const reset = () => {
    setDog({
      name : "",
      image : "",
      minHeight : "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minLife : "",
      maxLife : "",
      temperament : []
    });
    setSelectedTemperaments([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dogCreated = {
      name : dog.name,      
      height : `${dog.minHeight} - ${dog.maxHeight}`,
      weight: `${dog.minWeight} - ${dog.maxWeight}`,
      life_span : `${dog.minLife} - ${dog.maxLife}`,
      image: dog.image,
      temperament : selectedTemperaments
  }
    const cantErrors = Object.values(errors).length;
    if (cantErrors === 0) {
      dispatch(createDogs(dogCreated));
      reset();

    }
    else {
      alert("Aun no puedes enviar la informacion");
    }
    console.log(dogCreated)
  }


  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          
          <div className={styles.inputs}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'value={dog.name} onChange={handelInputChange} />
            <div className={styles.errorSpan}>
              <span>{ errors.name } </span>
            </div>
          </div>

          <div className={`${styles.content} ${errors.image && styles.hasError}`}>
            <label htmlFor="image">Image</label>
            <input type="text" name='image' value={dog.image} onChange={handelInputChange} />
            <div className={styles.errorSpan}>
              <span>{ errors.image } </span>
            </div>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="life">Life Span</label> 
            <div className={styles.inputsNumber}>
              <input type="number" name='minLife' value={dog.minLife} onChange={handelInputChange} />
                - 
              <input type="number" name='maxLife' value={dog.maxLife} onChange={handelInputChange} />
            </div> 
            <div className={styles.errorSpan}>
              <span>{ errors.minLife } </span>
              <span>{ errors.maxLife } </span>
            </div>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="height">Height</label>
            <div className={styles.inputsNumber}>
              <input type="number" name='minHeight' value={dog.minHeight} onChange={handelInputChange} />
                      - 
              <input type="number" name='maxHeight' value={dog.maxHeight} onChange={handelInputChange} />
            </div>
            <div className={styles.errorSpan}>
              <span>{ errors.minHeight } </span>
              <span>{ errors.namaxHeightme } </span>
            </div>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="weight">Weight</label>
            <div className={styles.inputsNumber}>
              <input type="number" name='minWeight' value={dog.minWeight} onChange={handelInputChange} />
                      - 
              <input type="number" name='maxWeight' value={dog.maxWeight} onChange={handelInputChange} />
            </div>
            <div className={styles.errorSpan}>
              <span>{ errors.minWeight } </span>
              <span>{ errors.maxWeight } </span>
            </div>
          </div>

          <div className={styles.inputs}>
            <label htmlFor="temperament">Temperament</label>
            <select name="temperament" onChange={handelInputChange}>
              {allTemperaments.map((temperament, index) => (
                <option key={index} value={temperament}>
                  {temperament}
                </option>
              ))}
            </select>
            <div className={styles.errorSpan}>
              <span>{ errors.temperament } </span>
            </div>
          </div>
          
          <label>Temperaments:</label>
          <ul>
            {selectedTemperaments.map((temperament, index) => (
              <li key={index}>{temperament}</li>
            ))}
          </ul>
          
          <button type="submit">Crear</button>
        </div>
      </form>
      <div className={styles.card}>

      </div>
      
    </div>
  );
};

export default NewDog;