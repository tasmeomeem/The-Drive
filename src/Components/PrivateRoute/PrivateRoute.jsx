import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if (loading) {
    return (
      <div className="flex items-center justify-center mt-12">
        <h1 className="text-2xl">Loading.......</h1>
      </div>
    );
  }

  if (user) {
    return children;
  }

    return <Navigate to="/Login"></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;