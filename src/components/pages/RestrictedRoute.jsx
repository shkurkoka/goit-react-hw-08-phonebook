import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getUserAuthentecation } from "redux/auth/authReducer"

export const RestrictedRoute = ({ children, redirectTo = "/register"}) => {
    const auth = useSelector(getUserAuthentecation);
    return auth ? <Navigate to={redirectTo} replace /> : children;
}