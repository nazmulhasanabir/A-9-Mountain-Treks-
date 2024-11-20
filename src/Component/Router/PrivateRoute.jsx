
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children
    }return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;