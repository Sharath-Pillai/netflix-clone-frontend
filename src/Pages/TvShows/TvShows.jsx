import React from "react";
import Banner from "../../Components/Banner/Banner";
import MoviePost from "../../Components/Movie_Post/MoviePost";
import { originals, documentaries } from "../../urls";

const TvShows = () => {
  return (
    <div>
      <Banner />
      <MoviePost url={originals} title="Netflix Originals" />
      <MoviePost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
};

export default TvShows;
