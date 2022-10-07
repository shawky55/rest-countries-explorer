import { useState, useEffect } from 'react';
import CountriesList from '../CountriesList/CountriesList';
import classes from './countries.module.css';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../isLoading/LoadingSpinner';
import Search from '../search/Search';
import RegtionFilter from '../region/RegionFilter';
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('all');
  const [filterdCountries, setfilterdCountries] = useState([]);
  const [filterFire, setFilterFire] = useState(false);
  const { isLoading, error, fetchCountries } = useFetch();
  const countryDataHandler = (data) => {
    let countryCardData = data.map((country) => {
      return {
        common: country.name.common,
        official: country.name.official,
        capital: country.capital && country.capital[0],
        population: country.population,
        flag: country.flags[0],
        region: country.region,
      };
    });
    setCountries(countryCardData);
  };
  useEffect(() => {
    fetchCountries(
      {
        url: `https://restcountries.com/v3/${
          region === 'all' ? 'all' : `/region/${region}`
        }`,
      },
      countryDataHandler
    );
    setFilterFire(false);
  }, [region]);
  return (
    <>
      <div className={classes.form}>
        <Search
          setfilterdCountries={setfilterdCountries}
          countries={countries}
          setFilterFire={setFilterFire}
        ></Search>
        <RegtionFilter regionHandler={setRegion}></RegtionFilter>
      </div>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          {filterFire ? (
            <CountriesList countries={filterdCountries}></CountriesList>
          ) : (
            <CountriesList countries={countries}></CountriesList>
          )}
        </>
      )}
    </>
  );
};

export default Countries;
