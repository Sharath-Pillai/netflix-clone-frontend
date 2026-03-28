import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import MoviePost from "./Components/Movie_Post/MoviePost";
import {
  originals,
  trending,
  action,
  comedy,
  horror,
  romance,
  documentaries,
} from "./urls";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MoviePost url={originals} title="Netflix Originals" />
      <MoviePost url={trending} title="Trending Now" isSmall />
      <MoviePost url={action} title="Action Movies" isSmall />
      <MoviePost url={comedy} title="Comedy Movies" isSmall />
      <MoviePost url={horror} title="Horror Movies" isSmall />
      <MoviePost url={romance} title="Romance Movies" isSmall />
      <MoviePost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
};

export default App;
