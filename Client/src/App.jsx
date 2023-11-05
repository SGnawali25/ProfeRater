import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "../src/pages/Login.jsx";
import SignUp from "../src/pages/SignUp.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
