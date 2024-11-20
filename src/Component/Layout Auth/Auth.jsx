
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Auth = () => {
    return (
        <div>
            <header className="p-5 w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
          <Outlet></Outlet>
        </div>
    );
};

export default Auth;