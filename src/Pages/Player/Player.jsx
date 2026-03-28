import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Player.css";

const Player = () => {
  const { title } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (title) {
      // Find trailer ID using the movie title
      movieTrailer(title || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for this title.");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [title]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="player">
      <button className="player__backButton" onClick={() => navigate(-1)}>
        Back
      </button>
      {trailerUrl ? (
        <div className="player__videoContainer">
          <YouTube videoId={trailerUrl} opts={opts} className="player__video" />
        </div>
      ) : (
        <div className="player__notFound">
          <h2>Trailer not found for "{title}"</h2>
        </div>
      )}
    </div>
  );
};

export default Player;
