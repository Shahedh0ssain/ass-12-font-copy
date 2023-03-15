import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useUsers from '../Hooks/useUsers';


const UpdateProfile = () => {

    const [user, loading, error] = useAuthState(auth);
    const [user1] = useUsers(user?.email);

    // const [data, setData] = useState({});
    // const [updateUser, setUpdateUser] = useState({});

    // console.log('setdata',data);

    // const [userInfo, setUserInfo] = useState({
    //     // name: user1?.Name,
    //     // email: "",
    //     // password: "",
    //     // address: "",
    //     // location: "",
    //     // number: "",
    //     // LinkedIn: ""
    // })
    // console.log('User1',user1);
    // console.log('user Info',userInfo);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        // console.log('data', data);
        // setData(data);
      

        // console.log('email', user?.email);

        fetch(`https://ass-backend-12-copy.up.railway.app/user/${user?.email}`, {
            method: 'PUT',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json)
            .then(data => console.log('return data',data))

    };

    if (user) {
        // console.log(user?.email)
    }


    if (error) {
        console.log(error?.message)
    }
    if (loading) {
        return <h4>Loading....</h4>
    }

    return (
        <div className='mx-auto h-screen  p-5 md:p-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-center text-xl'>Profile Update</h1>
                        {/* Name */}
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                // value={userInfo?.name}
                                {...register("Name", { required: "Name  is required" })}
                                aria-invalid={errors.Name ? "true" : "false"}
                            />

                            {errors.Name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>}
                        </div>
                        {/* Email */}
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                value={user1?.email}
                                readOnly
                                disabled
                            />
                            {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                        </div>

                        {/* //address */}
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">address</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                // value={user1?.address}
                                {...register("address", { required: "address is required" })}
                                aria-invalid={errors.address ? "true" : "false"}
                            />
                            {errors.address && <p role="alert" className='text-red-500'>{errors.address?.message}</p>}
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">city/district</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                // value={user1?.address}
                                {...register("city", { required: "city  is required" })}
                                aria-invalid={errors.city ? "true" : "false"}
                            />
                            {errors.city && <p role="alert" className='text-red-500'>{errors.city?.message}</p>}
                        </div>
                        {/* LinkeId */}
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text"> LinkedIn profile link</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                // value={user1?.LinkedIn}
                                {...register("LinkedIn", { required: "LinkedIn Link is required" })}
                                aria-invalid={errors.LinkedIn ? "true" : "false"}
                            />
                            {errors.LinkedIn && <p role="alert" className='text-red-500'>{errors.LinkedIn?.message}</p>}
                        </div>

                        {/* Phone */}
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                // value={user1?.Phone}
                                {...register("Phone", { required: "Phone  is required" })}
                                aria-invalid={errors.Phone ? "true" : "false"}
                            />

                            {errors.Phone?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Phone?.message}</p>}
                        </div>



                        <p className='w-full overflow-hidden text-red-500' >
                            {/* {errorMessage} */}
                        </p>

                        <p className="py-2">Already Update <Link className='link link-error' to='/dashboard/profile'>Go</Link></p>
                        {/* <input type="submit" /> */}
                        <div className="card-actions justify-center ">
                            <input className="btn btn-primary w-full" type="submit" value="Update" />
                            {/* <button className="btn btn-primary w-full" >Registration</button> */}
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;