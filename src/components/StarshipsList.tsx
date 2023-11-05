import { StarshipContext } from "../Context/StarshipContext";
import { useContext } from "react";
import galaxy2 from "../assets/images/galaxy2.jpeg";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function StarshipsList() {
  const {
    starships,
    selectedStarship,
    setSelectedStarship,
    currentPage,
    setCurrentPage,
  } = useContext(StarshipContext);

  const handleStarshipClick = (starship: any) => {
    setSelectedStarship(selectedStarship === starship ? null : starship);
  };

  return (
    <div>
      <NavBar />
      <div style={{ backgroundImage: `url(${galaxy2})` }}>
        <div className="flex items-center justify-center m-10">
          <Link to="/" className="tab tab-bordered">
            HOME
          </Link>

          <Link to="/Starships" className="tab tab-bordered tab-active">
            STARSHIPS
          </Link>
        </div>
        <div></div>
        <h1 className="text-1xl">Click in one starship for see more details</h1>
        <ul>
          {starships.map((starship: any, index: any) => {
            return (
              <>
                <div>
                  <li key={index}>
                    <Link
                      className="text-2xl"
                      onClick={() => handleStarshipClick(starship)}
                      to={`/Details/${starship.url.split("/").slice(-2, -1)[0]}`}
                    >
                      {starship.name}
                    </Link>
                    <p>Model: {starship.model}</p>
                  </li>
                </div>
              </>
            );
          })}
        </ul>
        <div>
          <button
            className="btn btn-s btn-outline m-4 bg-transparent"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
