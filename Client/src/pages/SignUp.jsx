import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="Container">
        <h1 className="Header_Text">What are you?</h1>
        <form>
          <Link to="/signup/student">
            <button className="Intro_Button" type="submit">
              Student
            </button>
          </Link>
          <Link to="/signup/professor">
            <button className="Intro_Button" type="submit">
              Professor
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
