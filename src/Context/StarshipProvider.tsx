import { useEffect, useState } from "react";
import { StarshipContext } from "./StarshipContext";

export default function StarshipProvider({ children }) {
  const [selectedComponent, setSelectedComponent] = useState("Home");
  const [starships, setStarships] = useState([]);
  const [selectedStarship, setSelectedStarship] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchStarships = () => {
    if (loading === true) return;
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
      .then(async (response) => response.json())
      .then((data) => {
        setStarships((prevStarships) => prevStarships.concat(data.results));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const login = () => {
    setIsLoggedIn(true); 
  };

  useEffect(() => {
    fetchStarships();
  }, [currentPage]);

  return (
    <StarshipContext.Provider
      value={{
        isLoggedIn,
        login,
        selectedComponent,
        setSelectedComponent,
        starships,
        fetchStarships,
        selectedStarship,
        setSelectedStarship,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </StarshipContext.Provider>
  );
}
