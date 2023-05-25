import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './navBar.module.css';
import logo from '../../assets/logo.jpeg';

const NavBar = () => {
  const location = useLocation();

  if (location.pathname === '/home' || location.pathname === '/new') {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navbar}>
          <input type="text" placeholder="Buscar" className={styles.searchInput} />
          <select className={styles.select}>
            <option value="">Filtrar por temperamento</option>
            {/* Opciones del select */}
          </select>
          <select className={styles.select}>
            <option value="asc">Ordenar A-Z</option>
            <option value="desc">Ordenar Z-A</option>
          </select>
          <select className={styles.select}>
            <option value="all">Todos</option>
            <option value="new">Nuevos</option>
          </select>
          <Link to="/new" className={styles.link}>
            Agregar nueva raza
          </Link>
        </nav>
      </header>
    );
  } else {
    return <></>;
  }
};

export default NavBar;
