import React, { useEffect, useState } from 'react';
import styles from './homePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { all } from '../../reducer/action';
import Card from '../card/card'
import { ALL } from '../../reducer/types';

const HomePage = () => {   
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrenCards] = useState([]);

  const allReg = useSelector(state => state.all);
  const cardsPerPage = 8;

  useEffect(() => {
    dispatch(all())
  },[])

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allReg.slice(indexOfFirstCard, indexOfLastCard);
    setCurrenCards(currentCards);
  }, [currentPage, allReg])

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(allReg.length / cardsPerPage);
  const pageNumbers = [];

  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);      
    }
  }

  return (
    <>
      <div className={styles.content}>
        {currentCards.map(({ id, image, life_span, name, temperament, weight, height }) => (
          <Card
            id={id}
            key={id}
            image={image}
            life_span={life_span}
            name={name}
            temperament={temperament}
            weight={weight}
            height={height}
          />
        ))}
    </div>
      <div className={styles.pagination}>
        {pageNumbers.map((pageNumber) => (
          <button 
            key={pageNumber} 
            className={currentPage === pageNumber ? styles.activePage : ''}
              onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default HomePage;