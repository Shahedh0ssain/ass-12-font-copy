import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const Booking = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data => {

        //     console.log(data);
        //     const Booking = {
        //         name: user?.name,
        //         email: user?.email,
        //         items: data?.name,
        //         quentity: data?.quentity,
        //         price: data?.price
        //     }
        
        //    fetch('https://ass-backend-12-copy.up.railway.app/booking',{
        //      method:'POST',
        //      headers: {
        //         'content-type':'aplication/json'
        //      },
        //      body:JSON.stringify(Booking),
        //    })
        //    .then(res=>res.json())
        //    .then(data=>console.log(data))

    };

    return (
        <div className='mx-auto h-screen  p-5 md:p-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className=''>

                        <h1 className='text-center text-xl'>Booking</h1>

                        <div className='form-control w-full max-w-xs py-2'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input className='input input-bordered w-full max-w-xs ' value={user?.displayName} readOnly disabled />

                        </div>

                        <div className='form-control w-full max-w-xs py-2'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input className='input input-bordered w-full max-w-xs ' value={user?.email} readOnly />
                        </div>
                        <div className='form-control w-full max-w-xs py-2'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input className='input input-bordered w-full max-w-xs ' value={user?.email} readOnly />
                        </div>
                        <div className='form-control w-full max-w-xs py-2'>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input className='input input-bordered w-full max-w-xs ' value={user?.email} readOnly />
                        </div>


                        <div className="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Book Now" />
                            {/* <button className="btn btn-primary w-full" >Registration</button> */}
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Booking;