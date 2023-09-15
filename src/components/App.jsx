import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink } from "react-router-dom";
import { getUserAuthentecation, getUserData } from "redux/auth/authReducer";
import { logOutUser, refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "./pages/RestrictedRoute";
import { PrivateRoute } from "./pages/PrivateRoute";

const Register = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

export const App = () => {
  const dispatch = useDispatch();
  
  const authenticated = useSelector(getUserAuthentecation);
  const userData = useSelector(getUserData);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <nav className="nav">
          { authenticated ? (
            <>
                <NavLink to="/" className={"navLink"}>Home</NavLink>
                <NavLink to="/contacts" className={"navLink"}>Contacts</NavLink>
                <span className="Username">Hello, {userData.name}</span>
                <button onClick={() => dispatch(logOutUser())} className={"navLink logout"}>Log Out</button>
              </>
            ) : (
              <>
                <NavLink to="/" className={"navLink"}>Home</NavLink>
                <NavLink to="/register" className={"navLink"}>Register</NavLink>
                <NavLink to="/login" className={"navLink"}>Login</NavLink>
              </>
            )
          }
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={
            <RestrictedRoute redirectTo={'/contacts'}>
              <Register />
            </RestrictedRoute>
          } />
          <Route path="/login" element={
            <RestrictedRoute redirectTo={'/contacts'}>
              <Login />
            </RestrictedRoute>
          } />
          <Route path="/contacts" element={
            <PrivateRoute redirectTo={'/login'}>
              <Contacts />
            </PrivateRoute>
          }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}