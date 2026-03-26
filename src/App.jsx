import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import MoviePost from "./Components/Movie_Post/MoviePost";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MoviePost/>
    </div>
  );
};

export default App;
