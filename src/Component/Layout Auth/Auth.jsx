
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../About/Footer';

const Auth = () => {
    return (
        <div className="">
        <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <header className="p-5">
        
          <Outlet></Outlet>
        </header>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Auth;