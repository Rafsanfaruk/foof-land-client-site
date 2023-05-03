import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = () => {

    const {user , loading} =useContext(AuthContext)
    const location =useLocation();

    console.log(location);

    if(loading){
        return  <button variant="primary" disabled>Loading...
      </button>
    }

if(user){
    return children;
}
    return <Navigate state={{from: location}} to="/login"></Navigate> ;
   
};


export default PrivateRoutes;