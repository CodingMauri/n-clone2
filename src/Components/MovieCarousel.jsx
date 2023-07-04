import { React, useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieCarousel = ({ movies, genre, rowId }) => {
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
  useEffect(() => {
    getGenres();
  });

  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-white font-bold md:text-xl py-9 ml-5">
        {genreName} movies
      </h1>
      <div className="relative flex items-center">
        <Slider
          {...settings}
          className="w-full h-full"
        >
          {movies.map((item, id) => {
            return (
              <>
                <Movie item={item} id={id} />
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default MovieCarousel;
