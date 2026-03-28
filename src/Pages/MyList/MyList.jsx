import React, { useContext } from "react";
import { MyListContext } from "../../Context/MyListContext";
import { imageUrl } from "../../Constants/constants";
import { useNavigate } from "react-router-dom";
import "./MyList.css";

const MyList = () => {
  const { myList, removeFromList } = useContext(MyListContext);
  const navigate = useNavigate();

  const handlePlay = (movie) => {
    const title = movie?.title || movie?.name || movie?.original_name;
    if (title) {
      navigate(`/player/${encodeURIComponent(title)}`);
    }
  };

  return (
    <div className="mylist-page">
      <h1 className="mylist-page__title">My List</h1>
      {myList.length === 0 ? (
        <p className="mylist-page__empty">Your list is empty. Add some movies or shows!</p>
      ) : (
        <div className="mylist-page__grid">
          {myList.map((movie) => (
            <div key={movie.id} className="mylist-item">
              <img
                className="mylist-item__poster"
                src={`${imageUrl}${movie.backdrop_path || movie.poster_path}`}
                alt={movie.name || movie.title}
                onClick={() => handlePlay(movie)}
              />
              <div className="mylist-item__info">
                <h4>{movie.name || movie.title}</h4>
                <button
                  className="mylist-item__removeBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromList(movie.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
