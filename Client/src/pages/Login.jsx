import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {login, clearErrors, loadUser} from '../actions/userActions';


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async(e) => {
      e.preventDefault();
      dispatch(login(email, password))
      }
  

  return (
    <div className="Background">
      <div className="Container">
        <h1 className="Header_Text">Login</h1>
        <form>
          <input
            className="textbox"
            type="text"
            placeholder=".edu email"
            value={email}
            name='email'
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <input
            className="textbox"
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <button className="Login_Button" type="submit" onClick={submitHandler}>
            Login
          </button>
        </form>
      </div>
      <h6 className="Account_">Don't have an account?</h6>
      <Link to="/signup">
        <button className="SignUp_Button" type="submit">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Login;
