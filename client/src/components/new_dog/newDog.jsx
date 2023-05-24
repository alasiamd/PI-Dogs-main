import React, { useEffect, useState } from 'react';
import { temperaments, createDogs } from '../../reducer/action';
import { useDispatch, useSelector } from 'react-redux';

import styles from './newDog.module.css';

const NewDog = () => {  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temperaments())
  }, [])
  const allTemperaments = useSelector(state => state.temperaments);
  
  const [selectedTemperaments, setSelectedTemperaments] = useState([])
  const handleTemperamentSelect = (e) => {
    const selectedTemperament = e.target.value;
    if (!selectedTemperaments.includes(selectedTemperament)) {
      setSelectedTemperaments([...selectedTemperaments, selectedTemperament]);
    }
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
useEffect(() => {
  setDog({ ...dog, temperament: selectedTemperaments })
},[selectedTemperaments])

  const handelInputChange = (e) => {
    const {value, name} = e.target;
    setDog({
      ...dog, [name]: value      
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dogCreated = {
      name : dog.name,      
      height : `${dog.minHeight} - ${dog.maxHeight}`,
      weight: `${dog.minWeight} - ${dog.maxWeight}`,
      life_span : `${dog.minLife} - ${dog.maxLife}`,
      temperament : selectedTemperaments
  }
    console.log(dogCreated)
    dispatch(createDogs(dogCreated));
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
    })
  }


  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" 
                 name='name'
                 value={dog.name}
                 onChange={handelInputChange} />
          <label htmlFor="life">Life Span</label>  
          <input type="number" 
                 name='minLife'
                 value={dog.minLife}
                 onChange={handelInputChange} />- 
          <input type="number" 
                 name='maxLife' 
                 value={dog.maxLife}
                 onChange={handelInputChange} />   
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input type="number" 
                 name='minHeight'
                 value={dog.minHeight}
                 onChange={handelInputChange} />- 
          <input type="number" 
                name='maxHeight'
                value={dog.maxHeight}
                onChange={handelInputChange} />

          <label htmlFor="weight">Weight</label>
          <input type="number" 
                 name='minWeight'
                 value={dog.minWeight}
                 onChange={handelInputChange} />- 
          <input type="number" 
                 name='maxWeight'
                 value={dog.maxWeight}
                 onChange={handelInputChange} />
          <label htmlFor="temperament">Temperament</label>
          <select name="temperament" onChange={handleTemperamentSelect}>
            {allTemperaments.map((temperament, index) => (
              <option key={index} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
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