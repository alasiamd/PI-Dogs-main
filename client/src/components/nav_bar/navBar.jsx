import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './navBar.module.css';
import logo from '../../assets/logo.jpeg';
import { orderCards, filterOldNew, temperaments, filterTemperament, searchName } from '../../reducer/action';


const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temperaments())
  }, [])

  const allTemperaments = useSelector(state => state.temperaments);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    switch (name) {
      case "order":
        return dispatch(orderCards(value));

      case "oldNew":
        return dispatch(filterOldNew(value));
      
      case "temperament":
        return dispatch(filterTemperament(value));

      case "search":
        if (value.length > 2) {
          return dispatch(searchName(value));
        }
            
      default:
        break;
    }

  }

  if (location.pathname !== '/landing') {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navbar}>
          { location.pathname === '/home' &&
            <>
              <input name='search' onChange={handleChange} type="text" placeholder="Buscar" className={styles.searchInput} />
              <select name='temperament' onChange={handleChange} className={styles.select}>
                <option value="">Filtrar por temperamento</option>
                { allTemperaments.map((temperament, index) => (
                  <option key={index} value={temperament}>
                    {temperament}
                  </option>
                )) }
              </select>
              <select name='order' onChange={handleChange} className={styles.select}>
                <option value="asc">Ordenar A-Z</option>
                <option value="desc">Ordenar Z-A</option>
              </select>
              <select name='oldNew' onChange={handleChange} className={styles.select}>
                <option value="all">Todos</option>
                <option value="new">Nuevos</option>
                <option value="old">Viejos</option>
              </select>
            </>
          }
          {
            location.pathname !== '/home' 
              ? 
                <Link to="/home" className={styles.link}>
                  Volver a Home
                </Link>
              :
                <Link to="/new" className={styles.link}>
                  Agregar nueva raza
                </Link>

          }
          
        </nav>
      </header>
    );
  } else {
    return <></>;
  }
};

export default NavBar;
