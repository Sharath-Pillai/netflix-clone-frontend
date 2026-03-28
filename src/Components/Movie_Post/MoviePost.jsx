import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./moviePost.css";
import axios from "axios";
import { imageUrl } from "../../Constants/constants";
import { MyListContext } from "../../Context/MyListContext";

const MoviePost = ({ url, title, isSmall }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { addToList, removeFromList, isInList } = useContext(MyListContext);

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

  const handlePlay = (movie) => {
    const movieTitle = movie?.title || movie?.name || movie?.original_name;
    if (movieTitle) {
      navigate(`/player/${encodeURIComponent(movieTitle)}`);
    }
  };

  const handleListToggle = (e, movie) => {
    e.stopPropagation();
    if (isInList(movie.id)) {
      removeFromList(movie.id);
    } else {
      addToList(movie);
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="posters">
        {movies.map((movie) =>
          movie.poster_path ? (
            <div key={movie.id} className="poster__container">
              <img
                onClick={() => handlePlay(movie)}
                className={isSmall ? "poster small_poster" : "poster"}
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title || movie.name}
                title={movie.title || movie.name}
              />
              <button
                className="poster__listBtn"
                onClick={(e) => handleListToggle(e, movie)}
              >
                {isInList(movie.id) ? "✓" : "+"}
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MoviePost;
