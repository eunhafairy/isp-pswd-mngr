// ------ imports -------
// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/register';
import { BrowserRouter, Routes,  Route } from "react-router-dom";
// // express imports
// const express = require('express'),
// http = require('http');


// ------ code -------
// express config
// const hostname = 'localhost';
// const port = 8080;
// const app = express();



// react render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
          <Route path="" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
    </Routes>

  </BrowserRouter>
);
