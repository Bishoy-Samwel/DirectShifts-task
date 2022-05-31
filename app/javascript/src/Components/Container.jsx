import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NormalRoute from './NormalRoute';
import ProtectedRoute from './ProtectedRoute';
import Signup from './Pages/Signup';
import Navbar from './Navbar';
import Login from './Pages/Login';

export const Container = () => {
  return (
    <div id="container">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<NormalRoute />} />
        <Route exact path='/protected_route' element={<ProtectedRoute />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};
