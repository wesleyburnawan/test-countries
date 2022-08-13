import { useState, useEffect } from 'react';

import SkeletonCard from "../components/SkeletonCard";
import Countries from '../components/Countries';
import FilterDropdown from '../components/FilterDropdown';
import SearchParams from '../components/SearchParams';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [queryCountries, setQueryCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    requestCountriesList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setQueryCountries(countries.filter(country => country.region.toLowerCase().includes(region.toLowerCase()) && country.name.common.toLowerCase().includes(searchCountry.toLowerCase())))
  }, [region, searchCountry]); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestCountriesList() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const json = await res.json();
    setCountries(json.sort((a,b) => {return a.name.official.localeCompare(b.name.official)}));
    setLoading(false);
  }

  const handleFilter = (e) => {
    setRegion(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCountry(e.target.value);
  }

  return (
    <>
      <div className="flex justify-between mb-10 md:mb-20 flex-col md:flex-row pt-10">
          <SearchParams country={searchCountry} filterSearch={handleSearch} />
          <FilterDropdown region={region} filterCheck={handleFilter} />
      </div>
      {loading ? (
        <SkeletonCard />
      ) : (
        <Countries countriesList={!region && !searchCountry ? countries : queryCountries} />
      )}
    </>
  )
}

export default Home;