import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Register = lazy(() => import("./pages/Registration"));
const Login = lazy(() => import("./pages/Login"));
const Contacts = lazy(() => import("./pages/Contacts"));


export const App = () => {

  return (
    <div className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <NavLink to="/register">register</NavLink>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/contacts">/contacts</NavLink>
        </nav>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </Suspense>
    </div>
  );
}