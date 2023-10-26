import { useContext } from "react";
import { Link } from "react-router-dom";
import { StarshipContext } from "../Context/StarshipContext";

export default function StarshipDetails() {
  const { selectedStarship } = useContext(StarshipContext);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{selectedStarship.name}</h2>
        <p>Model: {selectedStarship.model}</p>
        <p>Length: {selectedStarship.length}</p>
        <p>Manufacturer: {selectedStarship.manufacturer}</p>
        <p>Passengers: {selectedStarship.passengers}</p>
        <p>Consumables: {selectedStarship.consumables}</p>
        <div className="card-actions justify-end">
          <Link to= "/Starships" className="btn btn-outline">Starships</Link>
        </div>
      </div>
    </div>
  );
}
