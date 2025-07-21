import React, { useContext } from 'react';
import {Routes,Route} from 'react-router-dom'
 import Home from './Pages/Home';
import Result from './Pages/Result';
import BuyCredit from './Pages/BuyCredit';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { AppContext } from './Context/AppContext';
import { ToastContainer} from 'react-toastify';


const App = () => {
  const {showLogin}=useContext(AppContext)
  return (
     <div className="bg-yellow-50 px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen">
      <ToastContainer position='bottom-right'/>
        <Navbar/>
        {showLogin &&<Login/>}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/buy-credit" element={<BuyCredit />} />
        </Routes>
        <Footer/>
    </div>
  );
};

export default App;
