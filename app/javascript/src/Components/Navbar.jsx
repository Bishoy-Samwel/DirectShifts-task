import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from './Logout';

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
  return (
    <nav>
      <div>
        <div>
          <NavLink
            exact
            to='/'>
            NormalRoute
          </NavLink>
          <NavLink
            exact
            to='/protected_route'>
            ProtectedRoute
          </NavLink>
          <Logout />
        </div>
        <div >
          <NavLink
            exact
            to='/signup'>
            Sign Up
          </NavLink>
          <NavLink
            exact
            to='/login'>
            Log In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;