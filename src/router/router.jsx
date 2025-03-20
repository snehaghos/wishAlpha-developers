import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Guestlayout from '../layouts/GuestLayout/GuestLayout';
import { Dashboard } from '../pages/Dashboard';
import { DevLanding } from '../pages/DevLanding';
import { CreateProject } from '../pages/CreateProject';
import GamePage from '../GamePage';


const Router = () => {
  return (

    <Routes>
      <Route path='/' element={<Guestlayout/>}>
        <Route index element={<DevLanding/>} />

        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/create-project' element={<CreateProject/>} />
        <Route path='/check' element={<GamePage/>} />

        

      </Route>


    </Routes>

  );
};

export default Router