import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const RequireAdmin = () => {

    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading]= useAdmin(user);
    const location = useLocation();
    // console.log(adminLoading);

    if (loading || adminLoading) {
        return <div>Loading....</div> 
    }

    if (!user || !admin) {
        // signOut(auth);
        console.log(!admin,'Inside reqqure');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // return <Outlet/>;

};

export default RequireAdmin;