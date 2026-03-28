import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import TvShows from "./Pages/TvShows/TvShows";
import Movies from "./Pages/Movies/Movies";
import Player from "./Pages/Player/Player";
import MyList from "./Pages/MyList/MyList";

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/player");

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/player/:title" element={<Player />} />
        <Route path="/mylist" element={<MyList />} />
      </Routes>
    </div>
  );
};

export default App;
