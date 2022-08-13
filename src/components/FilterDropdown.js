const Dropdown = ({region, filterCheck}) => {
    return (
        <label className="block w-1/2 md:w-1/5 mt-5 md:mt-0">
          <select className="cursor-pointer block w-full dark:bg-dark-blue-1 dark:text-white border-none drop-shadow-md text-primary py-4 rounded-md" value={region} onChange={filterCheck}>
            <option defaultChecked value="">All Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
    )
}

export default Dropdown
