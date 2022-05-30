
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/auth';
import { loggedIn } from '../../selectors';
import { useEffect } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let logged = useSelector(loggedIn)

  useEffect(()=>{
    if (logged) {
      navigate('/')
    }
  },[])

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    error: false
  });

  handleChange = (event) => {
    setLoginState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = loginState;
    dispatch(loginUser({ email, password }))
  };

  const renderForm = (<div>
    <form
      onSubmit={handleSubmit}
    >
      <h1>Log In... </h1>
      <p>{loginState.error && "Invalid Email or Password"}</p>
      <fieldset>
        <label htmlFor='email'>  Email: </label>
        <input type='text' name='email' id='email'
          onChange={handleChange}
          value={loginState.email}
        />
      </fieldset>
      <fieldset>
        <label htmlFor='password'> Password: </label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
          value={loginState.password}
        />
      </fieldset>
      <input type='submit'
        value='Log In' />
    </form>
    <span>Dont have an account? </span>
    <Link to="/signUp">SignUp</Link>
  </div>)

  return (
    <>
      {
        renderForm
      }
    </>);
  
};

export default Login;