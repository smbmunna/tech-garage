import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    //show loader
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    } else {
        return <Navigate state={location} to='/login' />
    }
};

export default PrivateRoute;