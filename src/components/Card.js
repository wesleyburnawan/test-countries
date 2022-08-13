import { Link } from 'react-router-dom'

const Card = ({ name, population, region, capital, image, link }) => {
  return (
    <Link to={`/detail/${link}`}>
      <section className="bg-white dark:bg-dark-blue-1 shadow-lg rounded-lg w-full dark:text-white mb-10 md:mb-5">
          <img className="object-cover w-full h-52 rounded-t-lg" src={image} alt={name} />
        <div className="p-5">
            <h3 className="text-gray-900 font-extrabold text-2xl tracking-tight mb-2">{name}</h3>
          <ul className="font-primary text-gray-700 mb-2 dark:text-gray-400">
            <li className="mb-2"><span className="font-semibold">Population</span> : {population.toLocaleString()}</li>
            <li className="mb-2"><span className="font-semibold">Region</span> : {region}</li>
            <li className="mb-2"><span className="font-semibold">Capital</span> : {!capital ? "-" : capital}</li>
          </ul>
        </div>
      </section>
    </Link>
  )
}

export default Card;