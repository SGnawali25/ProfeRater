import React from "react";

function Login() {
  return (
    <div className="Background">
      <div className="Login_Container">
        <h1 className="Login_Text">Login</h1>
        <form>
          <input className="textbox" type="text" placeholder=".edu email" />
          <input className="textbox" type="password" placeholder="Password" />
          <button className="Login_Button" type="submit">
            Login
          </button>
        </form>
      </div>
      <h6>Don't have an account?</h6>
      <button className="SignUp_Button" type="submit">
        Sign Up
      </button>
    </div>
  );
}

export default Login;
