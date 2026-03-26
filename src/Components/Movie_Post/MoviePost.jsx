import React, { useState } from "react";
import "./moviePost.css";

const MoviePost = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div className="row">
      <h2>Title</h2>
      <div className="posters">
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://images.justwatch.com/poster/8584648/s718/season-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MoviePost;
