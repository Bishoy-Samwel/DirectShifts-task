import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { signupUser } from '../../redux/reducers/auth';
import {  loggedIn } from '../../selectors';


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInState = useSelector(loggedIn)
  state = {
    email: "",
    password: "",
    errors: {status: {message: ""}}
  };

  const [SignupState, setSignupState] = useState(state)
  useEffect(()=>{
    if (loggedInState) {
      navigate('/')
    }
  },[loggedInState])

  handleChange = (event) => {
    setSignupState((prev) => ({ ...prev,
      [event.target.name]: event.target.value
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = SignupState;
    dispatch(signupUser({ email, password }))
    .catch((errors) => setSignupState((prev) => ({ ...prev,
      errors
    })));
  };

    return (
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* <p>{SignupState.errors.status.message}</p> */}
        <fieldset>
          <label  htmlFor='email'>
            Email:
          </label>
          <input
            type='text'
            name='email'
            id='email'
            
            onChange={handleChange}
            value={SignupState.email}
          />
        </fieldset>
        <fieldset>
          <label  htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            name='password'
            id='password'
            
            onChange={handleChange}
            value={SignupState.password}
          />
        </fieldset>
        <input
          
          type='submit'
          value='Sign Up'
        />
      </form>
    );
}

export default Signup;