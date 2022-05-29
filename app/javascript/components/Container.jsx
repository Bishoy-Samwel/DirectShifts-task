/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export const Container = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loggedIn()); }, [dispatch]);
  return (
    <div>
      <div id="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};
