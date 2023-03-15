
import { useQuery } from "react-query";

const useProducts = () => {

    const { isLoading, error, data: services } = useQuery('services', () =>
        fetch('https://ass-backend-12-copy.up.railway.app/services').then(res =>
            res.json()
        ))


    return [services, isLoading, error]
}
export default useProducts;