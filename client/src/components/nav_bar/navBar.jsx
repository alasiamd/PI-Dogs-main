/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import styles from "./navBar.module.css";
import logo from "../../assets/logo.jpeg";
import {
  temperaments,
  filterResults, all
} from "../../reducer/action";

const initialFilters = {
    order: "",
    oldNew: "all",
    temperament: "",
    search: ""
  };

const NavBar = (props) => {
  const { filters } = props;
  const [defaultSelected, setDefaultSelected] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(temperaments());
  }, []);

  const allTemperaments = useSelector((state) => state.temperaments);

  const [selectedFilters, setSelectedFilters]  = useState(initialFilters);

  const resetSearch = () => {
    setDefaultSelected(true);
    return dispatch(temperaments());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));

    switch (name) {
      case "order":
        return dispatch(
          filterResults({
            ...filters,
            order: value,
          })
        );

      case "oldNew":
        return dispatch(
          filterResults({
            ...filters,
            oldNew: value,
          })
        );

      case "temperament":
        return dispatch(
          filterResults({
            ...filters,
            temperament: value,
          })
        );

      case "search":
        return dispatch(
          filterResults({
            ...filters,
            search: value,
          })
        );        

      default:
        break;
    }
  };

  const handleReset = () => {
    setSelectedFilters(initialFilters);
    return dispatch(all());
  }

  if (location.pathname !== '/') {
    return (
      <header className={styles.header}>
        <div className={styles.logo} onClick={resetSearch}>
          <img src={logo} alt="Logo" className={styles.logoImage} name="logo" />
        </div>
        <nav className={styles.navbar}>
          {
            location.pathname === '/home' &&
            <>
              <input
                name="search"
                onChange={handleChange}
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                value={selectedFilters.search}
              />
              <div 
                className={styles.reset} 
                onClick={handleReset}>Reset</div>
              <select
                name="temperament"
                onChange={handleChange}
                className={styles.select}
                value={selectedFilters.temperament}
              >
                <option value="" selected={defaultSelected}>
                  Filter by temperament
                </option>
                {allTemperaments.map((temperament, index) => (
                  <option key={index} value={temperament}>
                    {temperament}
                  </option>
                ))}
              </select>
              <select
                name="order"
                onChange={handleChange}
                className={styles.select}
                value={selectedFilters.order}
              >
                <option>Ordenar A-Z/Z-A</option>
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
              </select>
              <select
                name="oldNew"
                onChange={handleChange}
                className={styles.select}
                value={selectedFilters.oldNew}
              >
                <option value="all">Origin</option>
                <option value="new">New</option>
                <option value="old">Old</option>
              </select>
            </>
          }
          {
            location.pathname !== '/home' 
              ? 
                <Link to="/home" className={styles.link}>
                  Back to Home
                </Link>
              :
                <Link to="/new" className={styles.link}>
                  Add a new race
                </Link>
          }
        </nav>
      </header>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(NavBar);
