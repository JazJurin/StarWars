import { useEffect, useState } from "react";
import { StarshipContext } from "./StarshipContext";

export default function StarshipProvider({ children }) {
  const [starships, setStarships] = useState([]);

  const fetchStarships = () => {
    fetch("https://swapi.dev/api/starships")
      .then(async (response) => response.json())
      .then((data) => setStarships(data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <StarshipContext.Provider value={{ starships, fetchStarships }}>
      {children}
    </StarshipContext.Provider>
  );
}
