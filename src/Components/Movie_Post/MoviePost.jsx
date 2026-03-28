import React, { useEffect, useState } from "react";
import "./moviePost.css";
import axios from "axios";
import { imageUrl } from "../../Constants/constants";

const MoviePost = ({ url, title, isSmall }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error(`MoviePost fetch error for "${title}":`, error);
      }
    }
    if (url) fetchMovies();
  }, [url]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="posters">
        {movies.map((movie) =>
          movie.poster_path ? (
            <img
              key={movie.id}
              className={isSmall ? "poster small_poster" : "poster"}
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title || movie.name}
              title={movie.title || movie.name}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MoviePost;
