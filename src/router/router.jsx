import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Guestlayout from '../layouts/GuestLayout';
import DevLanding from '../Developer/DevLanding';








const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout/>}>
        <Route index element={<DevLanding/>} />



      </Route>


    </Routes>

  );
};

export default Router