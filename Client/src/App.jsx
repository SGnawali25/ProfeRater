import { useState } from "react";
import "./App.css";
import "./index.css";
import Login from "../src/pages/Login.jsx";
import Professor_SignUp from "./pages/Professor_SignUp.jsx";
import Student_SignUp from "./pages/Student_SignUp.jsx";
import SignUp from "../src/pages/SignUp.jsx";
import Rating from "../src/components/Rating.jsx";
import Professor_Dashboard from "./pages/Professor_Dashboard";

function App() {
  return (
    <>
      <Professor_Dashboard />
    </>
  );
}

export default App;
