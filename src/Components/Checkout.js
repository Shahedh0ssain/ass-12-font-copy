import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, redirect, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useProducts from '../Hooks/useProduct';
import Loading from '../Components/Loading';

const Checkout = () => {


    const navigate = useNavigate();
    const [services, isLoading, error] = useProducts();


    let { id } = useParams();
    // let product;

    const [service, setService] = useState([]);
    const [user, loading, Uerror] = useAuthState(auth);
    const [on, seton] = useState(true);

    useEffect(() => {

        fetch(`https://ass-backend-12-copy.up.railway.app/service/${id}`)
            .then(res => res.json())
            .then(data => setService(data));

    }, [services]);

    const { _id, dis, name, picture, price, quantity } = service;
    const [quentity1, setquentity] = useState(1);

    const incress = () => {
        if (quentity1 > 1) {
            setquentity(quentity1 - 1);
        }
    }
    const decress = () => {

        if (quentity1 < quantity) {
            setquentity(quentity1 + 1);
        }
    }

    const handleBooking = (e) => {

        e.preventDefault();

        const booking = {
            id: _id,
            partsName: name,
            name: user?.displayName,
            email: user?.email,
            quentity: quentity1,
            price: e.target.price.value

        }
        // console.log(booking);
        fetch('https://ass-backend-12-copy.up.railway.app/booking', {

            method: 'POST',
            headers: {
                // 'content-type':'application/json'
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        toast("Order complate !!!");
        navigate("/");
        // <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    }

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    if (error || Uerror) {
        console.log('data fetch error')
    }

    return (
        <div className='p-2 md:p-12'>
            <div className=" flex flex-col md:flex-row">
                <div className=' mx-auto'>
                    <figure className=''>
                        <img className='' src={picture} alt="Shoes" />
                    </figure>
                </div>
                <div className=" md:w-2/5 md:px-5 ">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <h2 className="card-title">Price : ${price}</h2>
                    <h2 className="card-title">Quentity : {quantity}</h2>
                    <div className="btn-group">
                        <button onClick={incress} className="btn">-</button>
                        <button className="btn">{quentity1}</button>
                        <button onClick={decress} className="btn">+</button>
                    </div>
                    <p>{dis}</p>
                    {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

                    <ul className=''>
                        <li className='p-2'>COMPLETE A WIDE VARIETY OF FASTENING APPLICATIONS with 1030 ft-lbs of max fastening torque and 1400 ft-lbs of max breakaway torque.</li>
                        <li className='p-2'>INCREASE USER CONTROL IN A VARIETY OF APPLICATIONS with 4-mode speed settings and variable speed trigger.</li>
                        <li className='p-2'>DESIGNED TO HELP PREVENT OVERTIGHTENING AND FASTENER RUN-OFF with Precision Wrench™ control.</li>
                    </ul>
                    <div className="">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-6" className="btn">Order Now</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">

                            <div className="modal-box">
                                <form onSubmit={handleBooking} className='className="modal-box grid grid-cols justify-items-center gap-4'>
                                    {
                                        on && <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                    }
                                    <input type="text" name='name' value={user?.displayName} readOnly disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="email" value={user?.email} readOnly disabled placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="quentity" value={quentity1} readOnly placeholder="quentity" className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="price" value={quentity1 * parseFloat(price)} readOnly placeholder="quentity" className="input input-bordered w-full max-w-xs" />
                                    <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                                </form>
                                {/* <div className="modal-action">
                                    <label htmlFor="my-modal-6" className="btn">Yay!</label>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='p-5'>
                <h1 className='text-5xl'>Additional Features</h1>
                <ul>
                    <li>REDUCE WEAR AND TEAR ON THE BATTERY WHILE YOU WORK with BATTERYGUARD™ - a shock-absorbing battery-to-tool connection (battery sold separately).</li>
                    <li>ILLUMINATE DARK WORKSPACES using the on-tool LED work light.</li>
                </ul>
            </div>
        </div>
    );
};

export default Checkout;