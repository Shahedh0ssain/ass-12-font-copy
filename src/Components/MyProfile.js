import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useUsers from '../Hooks/useUsers';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    const [user1] = useUsers(user?.email);
    // console.log(user1);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title"> Name : {user1?.Name}</h2>
                <p className='font-medium'>Email : {user1?.email}</p>
                <p><span className='font-medium'>Address :{user1?.address}</span></p>
                <p><span className='font-medium'>City : {user1?.city}</span></p>
                <p>Phone : {user1?.Phone}</p>
                <p>LinkedIn : {user1?.LinkedIn}</p>
                <div className="card-actions">
                    <Link className='link link-error' to='profileUpdate'>Update Profile</Link>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;