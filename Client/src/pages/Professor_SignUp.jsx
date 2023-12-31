import React from 'react'

function Professor_SignUp() {
    return (
        <div className="Background">
          <div className="Signup_Container">
            <h1 className="Signup_Text">Sign Up</h1>
            <form>
              <input className="textbox" type="text" placeholder="Name" />
              <input className="textbox" type="text" placeholder="Subjects Taught" />
              <input className="textbox" type="text" placeholder="About Professor" />
              <input className="textbox" type="text" placeholder="University Name" />
              <input className="textbox" type="text" placeholder="University Email" />
              <input className="textbox" type="text" placeholder="Contact No." />
             
              <button className="Signup_Button" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
    );
}
export default Professor_SignUp