import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from './Logout';
import { authState } from '../selectors';

const Navbar = () => {
  const {loggedIn, authChecked, currentUser} = useSelector(authState);
  renderAuthLinks = () => {
    if (authChecked && loggedIn) {
      return (
        <>
          {currentUser.email}
          <Logout />
        </>
      )
    } else {
      return (
        <>
          <NavLink
            exact
            to='/signup'
          >
            Sign Up
          </NavLink>
          <NavLink
            exact
            to='/login'
          >
            Log In
          </NavLink>
        </>
      )
    }
  }
  
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
        </div>
        {renderAuthLinks()}
      </div>
    </nav>
  );
};

export default Navbar;