import { useState } from "react";
import "./App.css";
import "./index.css";
import Login from "../src/pages/Login.jsx";
import Professor_SignUp from "./pages/Professor_SignUp.jsx";
import Student_SignUp from "./pages/Student_SignUp.jsx";
import Prof_Profile from "./components/Prof_Profile.jsx";
import SignUp from "../src/pages/SignUp.jsx";
import Rating from "../src/components/Rating.jsx";
import Professor_Dashboard from "./pages/Professor_Dashboard.jsx";
import Landing_Page from "./pages/Landing_Page.jsx";
import Student_Dashboard from "./pages/Student_Dashboard.jsx";
import Rate from "./components/Rate.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pop_up from "./components/Pop_up.jsx";

function App() {
  return (
    <>
      <Professor_Dashboard />
    </>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" Component={Login} exact />
//           <Route path="/signup" Component={SignUp} exact />
//           <Route path="/signup/student" Component={Student_SignUp} exact />
//           <Route path="/signup/professor" Component={Professor_SignUp} exact />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
