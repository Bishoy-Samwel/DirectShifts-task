import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/reducers/auth";

const Logout = ({ dispatchLogoutUser }) => {
  const dispatch = useDispatch();
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