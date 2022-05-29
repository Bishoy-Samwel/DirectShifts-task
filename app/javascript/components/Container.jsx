import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

export const Container = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div id="container">
        <Routes>
          <Route path="/" element={<> HI </>} />
        </Routes>
      </div>
    </div>
  );
};
