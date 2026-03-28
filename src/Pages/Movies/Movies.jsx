import React from "react";
import Banner from "../../Components/Banner/Banner";
import MoviePost from "../../Components/Movie_Post/MoviePost";
import { action, comedy, horror, romance } from "../../urls";

const Movies = () => {
  return (
    <div>
      <Banner />
      <MoviePost url={action} title="Action Movies" isSmall />
      <MoviePost url={comedy} title="Comedy Movies" isSmall />
      <MoviePost url={horror} title="Horror Movies" isSmall />
      <MoviePost url={romance} title="Romance Movies" isSmall />
    </div>
  );
};

export default Movies;
