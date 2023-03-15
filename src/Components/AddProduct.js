import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        // console.log(data);
        fetch('https://ass-backend-12-copy.up.railway.app/service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        toast.success('Congratulation add new product .')

        // data.reset(); 
    };

    return (
        <div className='  mx-auto p-5 md:p-10'>
            <div class="card h-full w-96  shadow-xl">
                <div class="card-body">
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <h1 className='text-center text-xl'>Add New Product</h1>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("Name", { required: "Name Address is required" })}
                                aria-invalid={errors.Name ? "true" : "false"}
                            />

                            {errors.Name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Name?.message}</p>}
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input
                                type='number'
                                className='input input-bordered w-full max-w-xs'
                                {...register("Price", { required: "Price Address is required" })}
                                aria-invalid={errors.Price ? "true" : "false"}
                            />
                            {errors.Price && <p role="alert" className='text-red-500'>{errors.Price?.message}</p>}
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <label className="label">
                                <span className="label-text">Quentity</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("Quentity", { required: "Quentity Address is required" })}
                                aria-invalid={errors.Price ? "true" : "false"}
                            />
                            {errors.Quentity && <p role="alert" className='text-red-500'>{errors.Quentity?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            <label className="label">


                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product discription</span>

                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                            <label className="label">

                            </label>
                        </div>

                        {/* Error massage */}

                        <p className='w-full overflow-hidden text-red-500' >
                            {/* {errorMessage} */}
                        </p>

                        <div className="card-actions justify-center py-2 ">
                            <input className="btn btn-primary w-full " type="submit" value="Add Product" />
                            {/* <button className="btn btn-primary w-full" >Registration</button> */}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;