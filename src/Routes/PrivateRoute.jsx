import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location =useLocation();
    if (user) {
        return children;
    } else {
        return <Navigate state={location} to='/login' />
    }
};

export default PrivateRoute;