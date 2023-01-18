import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import LoginPage from "./layout/loginPage";
import ProfilePage from "./layout/profilePage";


function App() {


  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile/:userid" element={<ProfilePage/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
