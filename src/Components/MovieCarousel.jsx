import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
const MovieCarousel = ({ movies, genre ,rowId}) => {
  //calling for genres

  const [genreName, setGenreName] = useState("");
  // console.log(genre)
  const getGenres = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_KEY}`
      )
      .then((res) => {
        const foundGenre = res.data.genres.find((g) => g.id === genre);
        if (foundGenre) {
          setGenreName(foundGenre.name);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(movies);
  useEffect(() => {
    getGenres();
  });

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <h1 className="text-white font-bold md:text-xl py-9 ml-5">
        {genreName} movies
      </h1>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick = {slideLeft} className = "bg-white left-0 rounded-full absolute hidden opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block" size={40} />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative"
        >
          {movies.map((item, id) => {
            return <Movie item={item} id={id} />;
          })}
        </div>
        <MdChevronRight onClick = {slideRight} className = "bg-white rounded-full absolute hidden opacity-50 hover:opacity-100  z-20  cursor:pointer group-hover:block right-0" size={40} />

      </div>
    </>
  );
};

export default MovieCarousel;
