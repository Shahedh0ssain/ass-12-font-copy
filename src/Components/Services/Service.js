import React from 'react';

const Service = ({ service, handle }) => {

    // const { service ,handle } = props;
    // console.log(handle);

    const { _id, dis, name, picture, price, quantity } = service;

    return (

        <button className='link card border  border-indigo-500 shadow-xl  ' onClick={() => handle(_id)}>
            <div className="">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl hover:scale-105" />
                </figure>
                <div className="card-body items-center text-center">
                    {/* <h2 className="card-title"> XTREME™ 12V MAX* Brushless 1/4 in. Ratchet Kit </h2> */}
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="card-actions">
                        <h2 className="card-title"> XTREME™ 12V MAX* Brushless 1/4 in. Ratchet Kit </h2>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default Service;