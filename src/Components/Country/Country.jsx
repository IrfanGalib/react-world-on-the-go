import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //First System
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //Second System
    // setVisited(visited ? false : true);

    //Third System
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population} </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}{" "}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.flags.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;

/**
 * 1. Inline Css (Style Object)
 * 2.
 */
