import React, { useState } from 'react';
import useProducts from '../Hooks/useProduct';
import ConfirmModal from './ConfirmModal';
import Loading from './Loading';
import ManageAll from './ManageAll';

const ManageProducts = () => {

    const [services, isLoading, error] = useProducts();
    const [serviceDelete, setServiceDelete] = useState(null);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        console.log(error, 'ManageProduct')
        return <p>{error}</p>

    }

    const handleServiceDelete = (id) => {

        fetch(`https://ass-backend-12-copy.up.railway.app/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setServiceDelete(null);
    }


    return (
        <div>
            <h1 className='text-xl p-2'>Manage All Products</h1>
            {
                services?.map(service => <ManageAll
                    key={service._id}
                    service={service}
                    handle={handleServiceDelete}
                    setServiceDelete={setServiceDelete}

                ></ManageAll>)
            }

            {
                serviceDelete && <ConfirmModal
                    services={serviceDelete}
                    // setDelete={setServiceDelete}
                    handle={handleServiceDelete}
                ></ConfirmModal>

            }
        </div>
    );
};

export default ManageProducts;