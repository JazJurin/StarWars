import { StarshipContext } from "../../Context/StarshipContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const { isLoggedIn } = useContext(StarshipContext);
    if (!isLoggedIn) {
     return <Navigate to="/Login" />
    }
    return children

}
