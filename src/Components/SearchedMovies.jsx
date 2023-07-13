import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";
import { searchMovies } from "../Requests";
import Loading from "./Loading";
export default function SearchedMovies() {
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();

  console.log(searchedMovie);
  useEffect(() => {
    searchMovies(searchQuery, setSearchedMovie);

    setTimeout(() => setLoading(false));
  }, [searchQuery]);
  return (
    <div className="w-full h-screen pt-10 bg-[#141414]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {searchedMovie && (
            <MovieCarousel movies={searchedMovie} searchQuery={searchQuery} />
          )}
        </>
      )}
    </div>
  );
}
