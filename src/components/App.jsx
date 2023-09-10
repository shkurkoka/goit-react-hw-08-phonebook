import React, { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink } from "react-router-dom";
import { getAuthentecation, getUserData } from "redux/auth/authReducer";
import { logOutUser } from "redux/auth/operations";

const Register = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Contacts = lazy(() => import("./pages/Contacts"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const App = () => {
  const dispatch = useDispatch();
  
  const authenticated = useSelector(getAuthentecation);
  const userData = useSelector(getUserData);

  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          { authenticated ? (
              <>
                <NavLink to="/contacts">Contacts</NavLink>
                <span>Hello, {userData.name}</span>
                <NavLink to="/register" onClick={() => dispatch(logOutUser())}>Log Out</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )
          }
        </nav>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </div>
  );
}