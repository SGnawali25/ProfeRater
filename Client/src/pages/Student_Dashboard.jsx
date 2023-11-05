import React from "react";
import Rating from "../components/Rating.jsx";

function Student_Dashboard() {
  return (
    <div>
      <div className="Student_Dash_Left">
        <h1>Professor Name</h1>
        <h1>University Name</h1>
        <button className="Rate_My_Prof" type="submit">
          Rate Professor
        </button>
      </div>
      <div className="Student_Dash_Right">
        <Rating />
      </div>

      <div className="Student_Dash_Main"></div>
    </div>
  );
}

export default Student_Dashboard;
