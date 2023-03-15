import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import useOrder from '../Hooks/useOrder';

const Myorder = () => {

    const [user] = useAuthState(auth);
    const [orders] = useOrder();

    // const [orders,setOrders] =  useState([]);
    
    // const {payment_id} = useParams();
    // console.log(payment_id);

    // useEffect(() => {

    //     if (user) {
    //         fetch(`https://ass-backend-12-copy.up.railway.app/myservice?email=${user?.email}`)
    //             .then(res => res.json())
    //             .then(data => setOrders(data));
    //     }

    // }, [user,orders]);

    
    const handleOrderCancle = (id) => {

        const proceed = window.confirm('Confirm delete item?');

        console.log(id); 

        if(proceed){
            fetch(`https://ass-backend-12-copy.up.railway.app/deleteOrder/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data));
        }


    }

    // console.log(orders)

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
                                <td>{order?.price} Tk</td>
                                {/* <td>{order?._id }</td> */}
                                <td> <Link to={order?._id}><button className='btn'>pay</button></Link>  <button onClick={() => handleOrderCancle(order?._id)} className='btn'>Cancle</button> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;