import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import CreateAccount from './Pages/CreateAccountPages/CreateAccount';
import Login from './Pages/LoginPages/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import HomePage from './Pages/HomePage/HomePage'; // 👈 nombre correcto del archivo y del componente

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/inicio" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
