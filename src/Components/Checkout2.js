
import useProducts from '../Hooks/useProduct';


const Checkout2 = () => {

    const [services] = useProducts();
    useEffect(() => {
    // console.log(id);
        product = services.find(service => service.id == id);
        console.log(services);
    } ,[services]);

    return (
        <div className='p-2 md:p-5'>
            <h1 className='p-5 text-xl md:text-4xl text-center'>All Services : {services.length}</h1>
          
        </div>
    );
};

export default Checkout2;