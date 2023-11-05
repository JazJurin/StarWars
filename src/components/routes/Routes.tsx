import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import Login from "../register/Login";
import Register from "../register/Register";
import StarshipDetails from "../StarshipDetails";
import StarshipsList from "../StarshipsList";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Starships" element={<StarshipsList />} />
        <Route path="/Details/:starshipId" element={<StarshipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
