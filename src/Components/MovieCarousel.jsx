import { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCarousel = ({ movies, genre }) => {
  //calling for genres

  const [genreName, setGenreName] = useState("");
  const [like, setLike] = useState(false);
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
  }, [genre]);

  const imagePath = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">
        {genreName} movies
      </h1>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title}
                  </p>
                  <p>
                    {like ? (
                      <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                      <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieCarousel;