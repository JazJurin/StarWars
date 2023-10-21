import { StarshipContext } from "./Context/StarshipContext";
import { useContext } from "react";

export default function StarshipsList() {
  const { starships } = useContext(StarshipContext);
  console.log(starships)
  return (
    <>
      <div className="items-start m-10">
        <div className="tabs">
          <a className="tab tab-bordered">HOME</a>
          <a className="tab tab-bordered">STARSHIPS</a>
        </div>
        <h1 className="5xl">LISTADO DE NAVES</h1>
        <ul>
          {starships.map((starship, index) => {
            return (
              <div>
                <li key={index}>
                  <h2>{starship.name}</h2>
                  <p>{starship.model}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
