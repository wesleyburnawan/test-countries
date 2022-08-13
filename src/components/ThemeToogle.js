import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Dark from '../assets/icons/dark-icon.svg';
import Light from '../assets/icons/light-icon.svg';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <button 
        className="font-semibold inline-flex items-center text-tiny md:text-base dark:text-white transition duration-500 ease-in-out"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === "dark" ? (
            <><img src={Light} alt="Light" className="w-4 md:w-5 md:mr-1" /><span className="ml-1">Light Mode</span></>
        ) : (
            <><img src={Dark} alt="Dark Mode" className="w-4 md:w-5 md:mr-1" /><span className="ml-1">Dark Mode</span></>
        )}
    </button> 
    );
};

export default ThemeToggle;