import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Support from "../components/Support/Support";
import { Login } from "../modules/Login";
import Guestlayout from "../layouts/GuestLayout/GuestLayout";
import { Register } from "../modules/Register";


const GuestRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Guestlayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default GuestRouter;
