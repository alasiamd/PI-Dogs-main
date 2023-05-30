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
  const [access, setAccess] = useState(false);
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
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div className={styles.content}>
          <label htmlFor="name">Name</label>
          <input type="text" 
                 name='name'
                 value={dog.name}
                 onChange={handelInputChange} />
          <span>{ errors.name } </span>
          <label htmlFor="image">Image</label>
          <input type="text" 
                 name='image'
                 value={dog.image}
                 onChange={handelInputChange} />
          <span>{ errors.image } </span>
          <label htmlFor="life">Life Span</label>  
          <input type="number" 
                 name='minLife'
                 value={dog.minLife}
                 onChange={handelInputChange} />
          <span>{ errors.minLife } </span>
          - 
          <input type="number" 
                 name='maxLife' 
                 value={dog.maxLife}
                 onChange={handelInputChange} />
          <span>{ errors.maxLife } </span>   
        </div>
        <div className={styles.content}>
          <label htmlFor="height">Height</label>
          <input type="number" 
                 name='minHeight'
                 value={dog.minHeight}
                 onChange={handelInputChange} />
          <span>{ errors.minHeight } </span>
                 - 
          <input type="number" 
                name='maxHeight'
                value={dog.maxHeight}
                onChange={handelInputChange} />
          <span>{ errors.namaxHeightme } </span>

          <label htmlFor="weight">Weight</label>
          <input type="number" 
                 name='minWeight'
                 value={dog.minWeight}
                 onChange={handelInputChange} />
          <span>{ errors.minWeight } </span>
                 - 
          <input type="number" 
                 name='maxWeight'
                 value={dog.maxWeight}
                 onChange={handelInputChange} />
          <span>{ errors.maxWeight } </span>
          <label htmlFor="temperament">Temperament</label>
          <select name="temperament" onChange={handelInputChange}>
            {allTemperaments.map((temperament, index) => (
              <option key={index} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
          <span>{ errors.temperament } </span>
        </div>
        <div>
          <label>Temperaments:</label>
          <ul>
            {selectedTemperaments.map((temperament, index) => (
              <li key={index}>{temperament}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default NewDog;