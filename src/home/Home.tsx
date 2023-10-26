import { Link } from "react-router-dom";
import CarouselHome from "./CarouselHome";
import galaxy1 from "../assets/images/galaxy1.jpeg";
import logo from "../assets/images/logo.jpg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${galaxy1})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <img src={logo} className="w-60 rounded-xl mx-auto my-auto" />
          </h1>
          <p className="mb-5 text-white">
            ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
          </p>
          <CarouselHome />
          <Link to="/Starships" className="btn bg-transparent text-white m-4">
            GO TO STARSHIPS
          </Link>
        </div>
      </div>
    </div>
  );
}
