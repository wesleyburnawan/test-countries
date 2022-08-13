import Card from "./Card"

const Countries = ({ countriesList }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-16 mb-10">
      {!countriesList.length ? (
        <h1>No country found. Please try again!</h1>
      ) : (
        countriesList.map((country) => (
          <Card
            key={country.altSpellings[0]}
            name={country.name.official}
            population={country.population}
            region={country.region}
            capital={country.capital}
            image={country.flags.svg}
            link={country.cca3}
          />
        ))
      )}
    </section>
  )
}

export default Countries;