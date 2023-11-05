import React from "react";
import Rating from "../components/Rating.jsx";
import Rate from "../components/Rate.jsx";

function Student_Dashboard() {
  return (
    <div>
      <div className="Dash_Manager">
        <div className="Student_Dash_Container">
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
        </div>
        <div className="Ratings_Count">
          <h1>30 ratings</h1>
        </div>
        <div className="Student_Dash_Main">
          <Rate />
        </div>
      </div>
    </div>
  );
}

export default Student_Dashboard;
