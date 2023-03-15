import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navber from './Components/Navber';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Footer from './Pages/Footer'
import Login from './Pages/Login';
import Registration from './Components/authentation/Registration';
import RequireAuth from './Components/authentation/RequireAuth';
import Checkout from './Components/Checkout';
import Dashboard from './Pages/Dashboard';
import MyReview from './Components/MyReview';
import MyOrder from './Components/MyOrder';
import MyProfile from './Components/MyProfile';
import Booking from './Components/Booking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './Components/Payment';
import Users from './Components/Users';
import ManageOrder from './Components/ManageOrder';
import ManageProducts from './Components/ManageProducts';
import AddProduct from './Components/AddProduct';
import UpdateProfile from './Components/UpdateProfile';
import Blog from './Pages/Blog';
import NotFoundPage from './Pages/NotFoundPage';
import AddReview from './Components/AddReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='payment' element={<Payment />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
          {/* <Route path='manageOrder' element={<ManageOrder />}></Route>
          <Route path='manageProduct' element={<ManageProducts />}></Route> */}

          <Route path="/" element={<RequireAuth />}>
            <Route
              path='/services'
              element={<Services />}
            />
          </Route>

          <Route path="/" element={<RequireAuth />}>
            <Route
              path='/ProductId/:id'
              element={<Checkout />}
            />
          </Route>

          {/* //dashboard */}
          {/* <Route path="/" element={<RequireAuth />}>
            <Route
              path='/dashboard'
              element={<Dashboard />}
            >
              <Route path='/myorder' element={<MyOrder />}></Route>
              <Route path='/myreview' element={<MyReview />}></Route>
            </Route>
          </Route> */}

          <Route element={<RequireAuth></RequireAuth>}>
            <Route
              path="dashboard"
              element={<Dashboard />}>
              {/* index */}
              {/* <Route path='payment/:payment_id' element={<Payment />}></Route> */}
              <Route path='order' element={<MyOrder />}></Route>
              <Route path='review' element={<MyReview />}></Route>
              <Route path='profile' element={<MyProfile />}></Route>
              <Route path='users' element={<Users />}></Route>
              <Route path='manageOrder' element={<ManageOrder />}></Route>
              <Route path='manageProduct' element={<ManageProducts />}></Route>
              <Route path='addProducts' element={<AddProduct />}></Route>
              <Route path='addreview' element={<AddReview />}></Route>
              <Route path='profile/profileUpdate' element={<UpdateProfile />}></Route>
            </Route>

          </Route>
        </Routes>

        {/* Footer */}
        <Footer></Footer>
        <ToastContainer />
      </Navber>

    </div>


  );
}

export default App;
