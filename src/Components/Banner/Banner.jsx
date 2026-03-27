import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { API_KEY, imageUrl } from "../../Constants/constants";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const results = response.data.results;
        // Showing a random movie from the trending list
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Banner fetch error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="banner banner--loading"><div className="banner__loading">Loading...</div></div>;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie
          ? `url(${imageUrl}${movie.backdrop_path})`
          : "none",
      }}
    >
      <div className="content">
        <h1 className="title">{movie?.title || movie?.name || ""}</h1>
        <div className="banner_buttons">
          <button className="button button--play">▶ Play</button>
          <button className="button button--list">＋ My List</button>
        </div>
        <p className="description">
          {movie?.overview?.length > 200
            ? movie.overview.substring(0, 200) + "..."
            : movie?.overview || ""}
        </p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
