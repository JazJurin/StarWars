import { Link } from "react-router-dom";
import CarouselHome from "./CarouselHome";
import galaxy1 from "../assets/images/galaxy1.jpeg";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${galaxy1})`,
      }}
      className="min-h-screen w-screen flex flex-col items-center justify-center"
    >
      <NavBar />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5 text-white">
            ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
          </p>
          <div className="w-full flex items-center justify-center">
            <CarouselHome />
          </div>
          <Link to="/Starships" className="btn bg-transparent text-white m-4">
            GO TO STARSHIPS
          </Link>
        </div>
      </div>
    </div>
  );
}
