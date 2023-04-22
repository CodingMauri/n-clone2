import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieCarousel from "./Components/MovieCarousel";
//This file is where i am going to keep the request i will be using
const api = `https://api.themoviedb.org/3/`;
const key = process.env.REACT_APP_MOVIE_KEY;
//Creating a higher ordered component to filter out the movies by genreˆ
const withGenre = (WrappedComponent, genre) => {
  return (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genre}`
        )
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
    return <WrappedComponent movies={movies} genre={genre} {...props} />;
  };
};
export const ActionMovies = withGenre(MovieCarousel, 28);
export const ComedyMovies = withGenre(MovieCarousel, 35);
export const HorrorMovies = withGenre(MovieCarousel, 27);
export const AnimatedMovies = withGenre(MovieCarousel, 16);
export const CrimeMovies = withGenre(MovieCarousel, 80);

export function getYoutubeData(movieId, setSelected) {
  axios
    .get(`${api}movie/${movieId}/videos?api_key=${key}`)
    .then((res) => {
    
      setSelected(res.data.results)
    })
    .catch((err) => console.log(err));
}

const requests = {
  requestPopular: `${api}movie/popular?api_key=${key}&language=en-US&page=1`,
};

export default requests;
