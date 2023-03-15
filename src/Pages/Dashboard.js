import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
import CustomLink from "../Components/CustomLink";
import Loading from '../Components/Loading';

const Dashboard = () => {

    // const [user] = useAuthState(auth);
    const [admin, isLoading, error] = useAdmin();


    const userLink = [
        <li className='p-2 '> <NavLink to='/dashboard/order'>MY Order</NavLink></li>,
        <li className='p-2'><NavLink to='/dashboard/addreview'>Add Review</NavLink></li>,
        <li className='p-2'><NavLink to='/dashboard/profile'>MY Profile</NavLink></li>,

    ]

    const adminLink = [
        <li className='p-2'> <NavLink to='/dashboard/manageProduct'>Manage Products</NavLink></li>,
        <li className='p-2'> <NavLink to='/dashboard/addProducts'>Add Product</NavLink></li>,
        <li className='p-2'> <NavLink to='/dashboard/manageOrder'>Manage Order</NavLink></li>,
        <li className='p-2'><NavLink to='/dashboard/addreview'>Add Review</NavLink></li>,
        <li className='p-2'><NavLink to='/dashboard/profile'>MY Profile</NavLink></li>,
        <li className='p-2'><NavLink to='/dashboard/users'>Make Admin</NavLink></li>,
        // <li className='p-2'><NavLink to='/dashboard/payment'>Payment</NavLink></li>,
    ]


    if (isLoading) {
        // return <Loading></Loading>
        console.log('loading');
    }

    if (error) {
        console.log(' admin data fetch error', error)
    }

    return (
        <div className=''>
            <div className=" drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="  drawer-content flex flex-col p-2 md:p-10 ">
                    {/* <!-- Page ?content here --> */}
                    <h1 className='text-4xl pl-2'>Dashboard</h1>
                    <Outlet />
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-2 w-60 bg-zinc-300 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {admin === true ? adminLink : userLink}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;