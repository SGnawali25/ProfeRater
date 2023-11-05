import React from "react";

function Rating() {
  return (
    <div className="Pie_Background">
      <div className="pieContainer">
        <div className="pieBackground"></div>
        <div id="pieSlice1" className="hold">
          <div className="pie"></div>
        </div>
        <div id="pieSlice2" className="hold">
          <div className="pie"></div>
        </div>
        <div id="pieSlice3" className="hold">
          <div className="pie"></div>
        </div>
        <div id="pieSlice4" className="hold">
          <div className="pie"></div>
        </div>
        <div id="pieSlice5" className="hold">
          <div className="pie"></div>
        </div>
        <div className="innerCircle">
          <div className="content">
            <h1>4.0</h1>
          </div>
        </div>
      </div>
      <div className="Pie_InfoBar">
        <div className="Star_Count_5">5&#9733;</div>
        <div className="border">
          <div className="fill"></div>
        </div>
        <div className="Star_Count_5">4&#9733;</div>
        <div className="border">
          <div className="fill"></div>
        </div>
        <div className="Star_Count_5">3&#9733;</div>
        <div className="border">
          <div className="fill"></div>
        </div>
        <div className="Star_Count_5">2&#9733;</div>
        <div className="border">
          <div className="fill"></div>
        </div>
        <div className="Star_Count_5">1&#9733;</div>
        <div className="border">
          <div className="fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
