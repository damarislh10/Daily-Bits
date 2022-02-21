import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LogoDailyBits from "../components/LogoDailyBits";
import Home from "../components/Home";
import Questions from "../components/Questions";
import NavBarCom from "../components/NavBarCom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Estadists from "../components/Estadists";
import Admin from "../components/Admin";
import Perfil from "../components/Perfil";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LogoDailyBits />} />
          <Route path="/home" element={<Home />} />
          <Route path="/question/:category" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/estadists" element={<Estadists />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <NavBarCom /> 
      </Router>
    </div>
  );
};

export default AppRouter;
