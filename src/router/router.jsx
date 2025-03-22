import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Guestlayout from '../layouts/GuestLayout/GuestLayout';
import { Dashboard } from '../pages/Dashboard';
import { DevLanding } from '../pages/DevLanding';
import { Login } from '../pages/Login';

import { CreateProject } from '../pages/CreateProject';
import GamePage from '../GamePage';
import RegistrationPage from '../components/RegistrationModal/RegistrationModal';



const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout/>}>
        <Route index element={<DevLanding/>} />

        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/create-project' element={<CreateProject/>} />
        <Route path='/check' element={<GamePage/>} />
    

      </Route>
      <Route path="/auth/register" element={<RegistrationPage/>} /> 
      <Route path="/auth/login" element={<Login/>} /> 



    </Routes>

  );
};

export default Router