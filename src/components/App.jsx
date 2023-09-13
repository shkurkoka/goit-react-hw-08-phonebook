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
        <nav>
          { authenticated ? (
              <>
                <NavLink to="/contacts" className={"navLink"}>Contacts</NavLink>
                <span>Hello, {userData.name}</span>
                <button onClick={() => dispatch(logOutUser())} className={"navLink"}>Log Out</button>
              </>
            ) : (
              <>
                <NavLink to="/register" className={"navLink"}>Register</NavLink>
                <NavLink to="/login" className={"navLink"}>Login</NavLink>
              </>
            )
          }
        </nav>
        <Routes>
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
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </div>
  );
}