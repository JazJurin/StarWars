import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StarshipContext } from "../Context/StarshipContext";

export default function StarshipDetails() {
  const { selectedStarship } = useContext(StarshipContext);
  const { starshipId } = useParams();
  return (
    <div className="card card-side bg-black shadow-xl">
      <figure>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`}
          alt="Starship"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl m-4">{selectedStarship.name}</h2>
        <div className="text-left">
          <p>Model: {selectedStarship.model}</p>
          <p>Length: {selectedStarship.length}</p>
          <p>Manufacturer: {selectedStarship.manufacturer}</p>
          <p>Passengers: {selectedStarship.passengers}</p>
          <p>Consumables: {selectedStarship.consumables}</p>
          <p>Created: {selectedStarship.created}</p>
          <p>Edited: {selectedStarship.edited}</p>
          <p>Crew: {selectedStarship.crew}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to="/Starships" className="btn btn-xs btn-outline">
            Back to Starships
          </Link>
        </div>
      </div>
    </div>
  );
}
