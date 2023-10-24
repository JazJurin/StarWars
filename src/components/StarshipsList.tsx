import { StarshipContext } from "../Context/StarshipContext";
import { useContext } from "react";
import StarshipDetails from "./StarshipDetails";

export default function StarshipsList() {
  const { starships, selectedStarship, setSelectedStarship } =
    useContext(StarshipContext);

  const handleStarshipClick = (starship: any) => {
    setSelectedStarship(selectedStarship === starship ? null : starship);
  };

  return (
    <>
      <div className="items-start m-10">
        <div className="tabs">
          <a className="tab tab-bordered">HOME</a>
          <a className="tab tab-bordered">STARSHIPS</a>
        </div>
        <h1 className="5xl">LISTADO DE NAVES</h1>
        <ul>
          {starships.map((starship: any) => {
            return (
              <>
                <div>
                  <li key={starship.name}>
                    <button onClick={() => handleStarshipClick(starship)}>
                      {starship.name}
                    </button>
                    <p>{starship.model}</p>
                    {selectedStarship === starship && (
                      <div>
                        <StarshipDetails />
                      </div>
                    )}
                  </li>
                </div>
              </>
            );
          })}
        </ul>
        <div>
          <button>View All</button>
        </div>
      </div>
    </>
  );
}
