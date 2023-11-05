import React, {useState} from 'react'
import { loadUser, register } from '../actions/userActions';
import { useDispatch } from 'react-redux';
function Student_SignUp() {
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({name:"", university: "", contact: "", email:"", password: "", role: "student"});

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [university, setUniversity] = useState("")
    const [contact, setContact] = useState("")
    const role = 'student'
    

    const submitHandler= async(e) => {
      console.log({name, email, password, role, university, contact});
      e.preventDefault();
      dispatch(register(name, email, password, role, university, contact));
      dispatch(loadUser());

    }
  
    return (
        <div className="Background">
          <div className="SignupStudent_Container">
            <h1 className="Signup_Text">Sign Up</h1>
            <form onSubmit={submitHandler}>
              <input 
                className="textbox" 
                type="text" 
                placeholder="Name" 
                name='name'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                />

              <input 
                    className="textbox" 
                    type="text" 
                    placeholder="University Name" 
                    name='university'
                    value={university}
                    onChange={(e) => {setUniversity(e.target.value)}}
                    />

              <input 
                    className="textbox" 
                    type="email" 
                    placeholder="University Email" 
                    name='email'
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />

              <input 
                    className="textbox" 
                    type="text" 
                    placeholder="Contact No." 
                    name='contact'
                    value={contact}
                    onChange={(e) => {setContact(e.target.value)}}
                    />

              <input
                    className="textbox"
                    type="password"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
             
              <button className="Signup_Button" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
    );
}
export default Student_SignUp