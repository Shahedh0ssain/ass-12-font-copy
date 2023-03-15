import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOrder from '../Hooks/useOrder';
import ConfirmModal from './ConfirmModal';

const ManageOrder = () => {

    const [orders] = useOrder();
    const [orderDelete, setOrderDelete] = useState(null)

    const handleOrderCancle = (id) => {
        console.log(id);

        fetch(`https://ass-backend-12-copy.up.railway.app/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setOrderDelete(null);


    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Order Name</th>
                            <th>Quentity</th>
                            <th>Price</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            orders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order?.name}</td>
                                <td>{order?.quentity}</td>
                                <td className='font-medium'>{order?.price} Tk</td>
                                {/* <td>{order?._id }</td> */}
                                {/* <td> <Link to={order?._id}><button className='btn btn-outline btn-success'>pay</button></Link>  <button onClick={() => handleOrderCancle(order?._id)} className='btn btn-outline btn-error'>Cancle</button> </td> */}
                                <td>
                                    <Link to={order?._id}>
                                        <button className='btn btn-outline btn-success'>pay</button>
                                    </Link>
                                    <label for="my-modal-6" onClick={() => setOrderDelete(order)} className='btn btn-outline btn-error'>Cancle</label>
                                    {/* <label for="my-modal-6" onClick={() => setServiceDelete(service)} className="btn "> */}

                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                orderDelete && <ConfirmModal
                    type={false}
                    services={orderDelete}
                    // setDelete={setOrderDelete}
                    handle={handleOrderCancle}
                ></ConfirmModal>

            }
        </div>
    );
};

export default ManageOrder;