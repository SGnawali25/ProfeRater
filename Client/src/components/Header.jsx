import React from "react";

function Header() {
  return (
    <div>
      <div className="Header_Container">
        <div className="Header_Logo">
          <img src="img/ProfeRater.png"></img>
        </div>
        <div className="Header_Button">
          <div className="dropdown_header">
            <span>
              <img src="../img/Professor_img.jpg" />
            </span>
            <div className="dropdown-content">
              <a href="#"> Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
