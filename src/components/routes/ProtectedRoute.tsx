import { StarshipContext } from "../../Context/StarshipContext";
import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, path }) {
  const { isLoggedIn } = useContext(StarshipContext);
  return isLoggedIn ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/Login" />
  );
}
