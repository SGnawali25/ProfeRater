import React from "react";

function SignUp() {
  return (
    <div>
      <div className="Container">
        <h1 className="Header_Text">What are you?</h1>
        <form>
          <button className="Intro_Button" type="submit">
            Student
          </button>
          <button className="Intro_Button" type="submit">
            Professor
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
