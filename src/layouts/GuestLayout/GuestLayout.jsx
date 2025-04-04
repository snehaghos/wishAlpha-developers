import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


const Guestlayout = () => {
  return (
    <>
     <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Guestlayout