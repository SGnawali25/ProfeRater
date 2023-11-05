import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css"
import Login from "../src/pages/Login.jsx";
import Student_SignUp from "../src/pages/Student_SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Student_SignUp />
    </>
  );
}

export default App;
