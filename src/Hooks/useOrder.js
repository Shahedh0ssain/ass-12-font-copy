import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


// order hooks
const useOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    
    // const {payment_id} = useParams();
    // console.log(payment_id);

    useEffect(() => {

        if (user) {
            fetch(`https://ass-backend-12-copy.up.railway.app/myservice?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }


    }, [user, orders]);

    return [orders, setOrders];
}
export default useOrder;