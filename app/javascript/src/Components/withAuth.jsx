import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { authChecked, loggedIn } from "../selectors";
import Login from './Pages/Login';
import LoadingSpinner from './LoadingSpinner';
import { checkAuth } from '../redux/reducers/auth';

const WithAuth = (props) => {
  const dispatch = useDispatch()
  const authCheckedState = useSelector(authChecked)
  const loggedInState = useSelector(loggedIn)
  useEffect(() => { dispatch(checkAuth()) }, [])
  if (!authCheckedState) {
    return <LoadingSpinner />;
  } else if (!loggedInState) {
    return (
      <>
        <Login />
        <p>You need to login to view this page.</p>
      </>
    );
  } else {
    return <props.wrapped />;
  }

}

export default WithAuth;