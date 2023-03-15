
import { useQuery } from "react-query";


//use Admin hook
const useUsers = email => {
//    console.log(email)

    const { isLoading, error, data: users } = useQuery('user', () =>
        fetch(`https://ass-backend-12-copy.up.railway.app/user/${email}`).then(res =>
            res.json()
        ))

    // console.log()

    return [users, isLoading, error,];
}

export default useUsers;