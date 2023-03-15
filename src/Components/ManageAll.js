import React from 'react';

const ManageAll = ({ service, setServiceDelete }) => {
    // console.log(service);
    const { name, picture } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl my-5">
            <div className="card-body flex-row justify-around items-center ">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={picture} />
                    </div>
                </div>
                <div>
                    <p className='text-xl'>{name}</p>
                </div>
                <div className="">
                    {/* <label onClick={() => setServiceDelete(service)} for="my-modal-6" className="btn">open modal</label> */}
                    <label for="my-modal-6" onClick={() => setServiceDelete(service)} className="btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>
                </div>
            </div>
        </div >
    );
};

export default ManageAll;