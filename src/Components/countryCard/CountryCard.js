// @flow
import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from './CountryCard.module.css';
import { Link } from 'react-router-dom';
const CountryCard = ({ country }) => {
  const { darkMode } = useContext(ThemeContext);
  let currentTheme = darkMode ? classes.darkMode : classes.lightMode;
  return (
    <Link
      className={classes.Link}
      to={`/country/${country.common.replace(/\s/g,'%20')}`}
    >
      <div className={`${classes.countryCard} ${currentTheme}`}>
        <div className={classes.imagecontainer}>
          <img className={classes.flagImage} src={country.flag} alt="flag" />
        </div>
        <ul className={`${classes.countryCard_info}`}>
          <li>
            {' '}
            <h3 className={`${classes.countryCard_name}`}>{country.common}</h3>
          </li>
          <li className={classes.infoProperty}>
            <span>Population:</span>
            {country.population}
          </li>
          <li className={classes.infoProperty}>
            <span>Region:</span>
            {country.region}
          </li>
          <li className={classes.infoProperty}>
            <span>Capital:</span>
            {country.capital}
          </li>
        </ul>
      </div>
    </Link>
  );
};
export default CountryCard;