import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/reducers/auth";
import { Button } from '@mui/material';

const Logout = ({ dispatchLogoutUser }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser())
  };

  return (
    <Button onClick={handleClick} color="inherit" > Logout </Button>
  );
};

export default Logout;