import { useEffect, useState } from "react";

//useTOken hook:
const useToken = (user) => {

    const [token, setToken] = useState('');
    // console.log(user);

    useEffect(() => {
        // console.log(user?.user?.email);
        const email = user?.user?.email;
        const currentuser = { email: email };

        if (email) {
            // console.log(email);
            fetch(`https://ass-backend-12-copy.up.railway.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentuser)
            })
                .then(res => res.json)
                .then(data => console.log(data))
        }

    }, [user]);

    return [token];

}

export default useToken;