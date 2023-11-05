import React from "react";
import Rating from "../components/Rating.jsx";

function Professor_Dashboard() {
  return (
    <div>
      <div className="Professor_Info">
        <div className="image_footer">
          <div className="Prof_Line">
            <h1 className="Prof_name">Professor Name</h1>
            <h1 className="Prof_name">Department of Computer Science</h1>
          </div>
          <div className="University_Line">
            <h3 className="Uni_name">University Name</h3>
            <div className="rating">
              <div className="star filled">&#9733;</div>
              <div className="star filled">&#9733;</div>
              <div className="star filled">&#9733;</div>
              <div className="star filled">&#9733;</div>
              <div className="star half-filled">&#9733;</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Professor_About">
        <h3>
          Hello! My name is Professor. I teach CS classes. I believe students
          thrive most with good deadlines
        </h3>
      </div>
      <h1 className="Rating_Name"> Overall Rating</h1>
      <div className="Dashboard">
        <div className="Dashboard_Left">
          <a href="#" className="text">
            Edit Profile
          </a>
          <div className="dropdown">
            <span>Courses</span>
            <div className="dropdown-content">
              <a href="#">CSCI 110</a>
              <a href="#">CSCI 390</a>
            </div>
          </div>
        </div>
        <div className="Dashboard_Right">
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default Professor_Dashboard;
