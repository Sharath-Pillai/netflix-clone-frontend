import React, { createContext, useState, useEffect } from "react";

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Load from local storage on mount
    const savedList = localStorage.getItem("netflixMyList");
    if (savedList) {
      try {
        setMyList(JSON.parse(savedList));
      } catch (error) {
        console.error("Error parsing local storage", error);
      }
    }
  }, []);

  const addToList = (movie) => {
    setMyList((prev) => {
      // Prevent duplicates based on ID
      if (prev.find((item) => item.id === movie.id)) {
        return prev;
      }
      const newList = [...prev, movie];
      localStorage.setItem("netflixMyList", JSON.stringify(newList));
      return newList;
    });
  };

  const removeFromList = (movieId) => {
    setMyList((prev) => {
      const newList = prev.filter((item) => item.id !== movieId);
      localStorage.setItem("netflixMyList", JSON.stringify(newList));
      return newList;
    });
  };

  const isInList = (movieId) => {
    return myList.some((item) => item.id === movieId);
  };

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList, isInList }}>
      {children}
    </MyListContext.Provider>
  );
};
