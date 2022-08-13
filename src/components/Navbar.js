import { Link } from 'react-router-dom';
import ThemeToogle from './ThemeToogle';

const Navbar = () => {
  return (
    <nav className="w-full py-4 top-0 drop-shadow-lg bg-white dark:bg-dark-blue-1">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 md:px-16">
        <Link to="/"><h1 className="font-extrabold md:text-2xl text-lg dark:text-white">Where in the world?</h1></Link>
        <ThemeToogle />
      </div>
    </nav>
  )
}

export default Navbar;