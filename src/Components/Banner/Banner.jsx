import React, { useState } from "react";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState("");

  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          laborum nobis officiis laboriosam nisi doloremque eaque veritatis
          libero dicta a.
        </p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
