import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/reducers/auth";

const Logout = ({ dispatchLogoutUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logoutUser())
  };

  return (
    <button  onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;