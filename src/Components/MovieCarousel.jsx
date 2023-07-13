import { React, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ExpandedMovie from "./ExpandedMovie";
import Loading from "./Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieCarousel = ({ movies, genre, searchQuery }) => {
  const [loading, setLoading] = useState(true);
  //calling for genres
  const [genreName, setGenreName] = useState("");
  const [expand, setExpand] = useState(null);
  const [saved, setSaved] = useState([]);

  // console.log(genre)
  const getGenres = () => {
    if (searchQuery) {
      setGenreName(searchQuery);
    } else {
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
    }
  };

  const handleSave = (item) => {
    if (saved.includes(item.id)) {
      setSaved(saved.filter((id) => id !== item.id));
    } else {
      setSaved([...saved, item.id]);
    }
  };

  useEffect(() => {
    getGenres();

    setTimeout(() => {
      setLoading(false)
    },2000)
  });

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
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
  });

  useEffect(() => {
    const numberOfMovies = movies.length;

    let updatedSettings = { ...settings };

    if (numberOfMovies <= 7) {
      updatedSettings.slidesToShow = numberOfMovies;
      updatedSettings.slidesToScroll = numberOfMovies;
    }

    setSettings(updatedSettings);
  }, [movies]);

  const isSaved = (item) => {
    return saved.includes(item.id);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-white font-bold md:text-xl py-9 ml-5">
            {genreName && !searchQuery ? `${genreName} movies` : genreName}
          </h1>
          <div className="relative flex items-center">
            <Slider {...settings} className="w-full h-full">
              {movies.map((item, id) => {
                return (
                  <motion.div
                    key={id}
                    whileHover={{ transition: 1, scale: 0.9 }}
                    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[290px] 2xl:w-[300px] inline-block cursor-pointer relative p-2 "
                    onMouseEnter={() => setExpand(item)}
                    onMouseLeave={() => setExpand(null)}
                  >
                    {expand === item && (
                      <ExpandedMovie
                        item={item}
                        isSaved={isSaved(item)}
                        onSave={handleSave}
                      />
                    )}
                    <img
                      className="w-[95%]  h-auto block overflow-hidden m-1"
                      src={`https://image.tmdb.org/t/p/w500/${
                        item?.poster_path || item?.img
                      }`}
                      alt={item?.title}
                      id={item.id}
                    />
                  </motion.div>
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </>
  );
};

export default MovieCarousel;
