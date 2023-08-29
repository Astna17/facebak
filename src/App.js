import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './modules/Home/home.jsx';
import { Login } from './modules/signup/login';
import { SignUp } from './modules/signup/sign-up';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<SignUp/>} />
        <Route path="/home/*" element={<Home />} />
        <Route path="*" element={<div className="center"> <h1>PAGE NOT FOUND ! </h1> </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
