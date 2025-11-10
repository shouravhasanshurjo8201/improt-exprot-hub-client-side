import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if(!user){
        return <Navigate to="/Login" state={{ from: location }} replace/>
    }
    return children;
}

export default ProtectedRoute;