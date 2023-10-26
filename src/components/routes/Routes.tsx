import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import StarshipDetails from "../StarshipDetails";
import StarshipsList from "../StarshipsList";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Starships" element={<StarshipsList />} />
        <Route path="/Details" element={<StarshipDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
