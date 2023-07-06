import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";
import { searchMovies } from "../Requests";
export default function SearchedMovies() {
  const [searchedMovie, setSearchedMovie] = useState([]);

  const { searchQuery } = useParams();

  console.log(searchedMovie)
  useEffect(() => {
    searchMovies(searchQuery, setSearchedMovie);
  }, [searchQuery]);
  return (
    <div className="w-full h-screen pt-10 bg-[#141414]">
      {searchedMovie && <MovieCarousel movies={searchedMovie} searchQuery = {searchQuery}/>}
    </div>
  );
}
