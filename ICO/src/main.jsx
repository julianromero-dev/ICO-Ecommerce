import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocalidadForm from '../src/Pages/PersonalInformation/LocalidadForm';
// Importación de los componentes principales
import App from './App';
import CreateAccount from './Pages/CreateAccountPages/CreateAccount';
import Login from './Pages/LoginPages/Login';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import HomePage from './Pages/HomePage/HomePage'; // Asegúrate de que este archivo exista

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal que muestra la app */}
        <Route path="/" element={<App />} />

        {/* Rutas para las páginas de registro, login, restablecimiento de contraseña y página principal */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/direccion" element={<LocalidadForm />} />


        {/* Agrega más rutas si es necesario */}
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
