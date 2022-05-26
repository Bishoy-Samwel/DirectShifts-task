/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
// react pro sidebar components


import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from './selectors';
import { logOut } from './redux/auth';

const Navbar = ({ menuCollapse, menuIconClick }) => {
  const user = useSelector(currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
          Sign In
          <Link to="/logIn" />
          Sign Up
          <Link to="/signUp" />
    </>
  );
};
export default Navbar;
