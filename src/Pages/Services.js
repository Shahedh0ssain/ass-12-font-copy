// import React, { useEffect, useState } from 'react';

import useProducts from '../Hooks/useProduct';
import Service from '../Components/Services/Service';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const Services = () => {

    const [services, isLoading, error] = useProducts();
    const navigate = useNavigate();
    // console.log(services);

    const showDetail = id => {
        const path = `/ProductId/${id}`;
        navigate(path);
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        console.log('data fetch error')
    }

    return (
        <div className='p-2 md:p-5 flex flex-col items-center'>
            <div className=' py-3 md:py-10'>
                <span className=' text-center text-2xl font-medium text-gray-600 border-b-4 border-[#d4af37]'>
                    Our Services
                </span>
            </div>
            {/* <h1 className='p-5 text-xl md:text-4xl text-center'>Services</h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        handle={showDetail}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;