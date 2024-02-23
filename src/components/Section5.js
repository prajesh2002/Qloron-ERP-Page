import React from "react";
import "../styles/section5.css";
import img2 from "../images/section5-main.jpg";

function Section5() {
  return (
    <div className="sec5-container">
      <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl m-4 mt-5 text-center">
        {" "}
        <span style={{ color: "#12B1BE" }}>Take the lead</span> in your industry
      </h1>
      <div className="sec5-container bg-cover bg-center lg:h-80 md:h-60 h-52 bg-no-repeat" style={{ backgroundImage: `url(${img2})` }}>
      </div>
    </div>
  );
}

export default Section5;
