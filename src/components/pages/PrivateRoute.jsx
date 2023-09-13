import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthentecation } from 'redux/auth/authReducer';

export const PrivateRoute = ({ children, redirectTo = '/contacts' }) => {
    const isAuth = useSelector(getUserAuthentecation);

    return !isAuth ? <Navigate to={redirectTo} replace/> : children;
};