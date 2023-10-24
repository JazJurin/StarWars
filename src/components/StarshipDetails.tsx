import { useContext } from "react";
import { StarshipContext } from "../Context/StarshipContext";

export default function StarshipDetails() {
  const { selectedStarship } = useContext(StarshipContext);
  return (
    <div className="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" checked="checked" />
      <div className="collapse-title text-xl font-medium">
        {selectedStarship.name}
      </div>
      <div className="collapse-content">
        <p>Model: {selectedStarship.model}</p>
        <p>Length: {selectedStarship.length}</p>
        <p>Manufacturer: {selectedStarship.manufacturer}</p>
        <p>Passengers: {selectedStarship.passengers}</p>
        <p>Consumables: {selectedStarship.consumables}</p>
      </div>
    </div>
  );
}
