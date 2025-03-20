
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';




const AuthRouter = () => {
  console.log("I am in auth Layout");
  
  return(
  <Routes>
    <Route path='/' element={<Guestlayout/>}>
        <Route index element={<DevLanding/>} />



      </Route>

  </Routes>
  );
}

export default AuthRouter;
