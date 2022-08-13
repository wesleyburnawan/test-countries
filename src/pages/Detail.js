import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';

import Loading from '../components/Loading';

const Detail = () => {
  const [detail, setDetail] = useState();
  const [border, setBorder] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    requestCountryDetail();
  }, [name]) // eslint-disable-line react-hooks/exhaustive-deps

  async function requestCountryDetail() {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
    const json = await res.json();

    setDetail(json[0]);
    requestBorderDetail(json[0].borders);
    
  }

  async function requestBorderDetail(borders) {
    setBorder([]);
    if (borders) {
      for(let i = 0; i < borders.length; i++) {
        const borderList = await fetch(`https://restcountries.com/v3.1/alpha/${borders[i]}`);
        const json = await borderList.json();
        setBorder(border => [...border, json[0]]);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Link className="mb-16 pt-10" to="/">
        <Button>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ionicon w-4 h-4 mr-2" 
            viewBox="0 0 512 512"
          >
            <title>Arrow Back</title>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
          </svg>
          <span>Back</span>
        </Button>
      </Link>
      {loading ? <Loading /> : 
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div>
              <img src={detail?.flags.svg} className="h-auto w-full md:w-3/4" alt={detail?.name.official} />
          </div>
          <div>
            <h1 className="dark:text-white font-bold text-2xl lg:text-4xl mb-5 mt-10 md:mt-0">{detail?.name.official}</h1>
            <div className="flex justify-between flex-col md:flex-row">
              <ul className="font-primary text-dark-blue-3 mb-5 dark:text-white">
                <li className="mb-2"><span className="font-semibold">Native Name</span>: {detail?.name.nativeName ? detail?.name.nativeName[Object.keys(detail?.name.nativeName)[0]].common : detail?.name.common}</li>
                <li className="mb-2"><span className="font-semibold">Population</span>: {detail?.population.toLocaleString()}</li>
                <li className="mb-2"><span className="font-semibold">Region</span>: {detail?.region}</li>
                <li className="mb-2"><span className="font-semibold">Sub Region</span>: {detail?.subregion}</li>
                <li className="mb-2"><span className="font-semibold">Capital</span>: {!detail?.capital ? '-' : detail.capital}</li>
              </ul>
              <ul className="font-secondary text-dark-blue-3 mb-5 dark:text-white">
                <li className="mb-2"><span className="font-semibold">Top Level Domain</span>: {detail?.tld[0]}</li>
                <li className="mb-2"><span className="font-semibold">Currencies</span>: {detail?.currencies ? Object.keys(detail?.currencies).map(key => detail?.currencies[key].name).join(", ") : "None"}</li>
                <li className="mb-2"><span className="font-semibold">Languages</span>: {detail?.languages ? Object.keys(detail?.languages).map(key => detail?.languages[key]).join(", ") : "None"}</li>
              </ul>
            </div>
            <div className="mt-5 dark:text-white md:inline-flex items-start mb-10">
              <p className="font-secondary">Border Countries :</p>
                {!border.length ? (
                  <span className="ml-0 md:ml-2">No border country available.</span>
                ) : (
                  <div className="inline-grid md:grid-cols-3 grid-cols-2 gap-4 mt-5 md:mt-0">
                    {border.map((country) => (
                      <Link className="ml-2" to={`/detail/${country.cca3}`} key={country.cca3}>
                        <Button>{country.name.common}</Button>
                      </Link>
                      ))
                    }
                  </div>
                )}
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default Detail;