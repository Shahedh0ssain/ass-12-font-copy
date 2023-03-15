import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data);
        // fetch('https://ass-backend-12-copy.up.railway.app/service', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })

        // toast.success('Congratulation add new product .')

        // data.reset(); 
    };

    return (
        <div className='flex flex-col  items-center mt-2 md:mt-10'>
            <h1 className='text-center text-2xl'>Please add your valuable review .</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <div className="rating py-2" {...register("number")}>
                            <input value={1} type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                            <input value={2} type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" checked />
                            <input value={3} type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                            <input value={4} type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                            <input value={5} type="radio" name="rating-2" className="mask mask-star-2 bg-red-500" />
                        </div>
                        {/* <input type="Number" placeholder="Type Your rating" className="input input-bordered input-secondary w-full max-w-xs" />                   */}

                        <textarea {...register("text")} className="textarea textarea-primary py-2" placeholder="Bio"></textarea>
                        {/* <p>We are using cookies for no reason.</p> */}
                        <input className='btn my-2' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;