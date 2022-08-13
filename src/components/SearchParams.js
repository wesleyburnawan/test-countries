import SearchLight from '../assets/icons/search-icon-light.svg';
import SearchDark from '../assets/icons/search-icon-dark.svg';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const SearchParams = ({ country, filterSearch }) => {
  const { theme } = useContext(ThemeContext);

  return (
      <form className="md:w-2/5 w-full">
        <div className="relative text-gray-600 focus-within:text-gray-400 drop-shadow-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <button type="submit" className="p-1">
            {theme === "dark" ? (
              <img src={SearchLight} alt="Search" className="w-5" />
            ) :(
              <img src={SearchDark} alt="Search" className="w-5" />
            )}
          </button>
        </span>
        <input 
          type="search"  
          value={country}
          onChange={filterSearch}
          className="border-none py-4 dark:text-white dark:bg-dark-blue-1 dark:placeholder:text-white bg-gray-900 rounded-md pl-16 focus:bg-white focus:text-gray-900 outline-none w-full text-primary" placeholder="Search for a country..." 
        />
        </div>
      </form>
  )
}

export default SearchParams;