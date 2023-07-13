import { React, useState, useEffect } from "react";
import axios from "axios";
import requests from "../Requests";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Hero = () => {
  const navigate = useNavigate();
  const [popularMovie, setPopularMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const mixMovies =
    popularMovie[Math.floor(Math.random() * popularMovie.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setPopularMovies(res.data.results))
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(false);
    },2000);
  }, []);

  const handleTrailerClick = () => {
    navigate(`/trailer/${mixMovies.id}`);
  };

  const cutText = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  // const scaleUp = {
  //   scale:1.2
  // }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-[770px] md:min-h-[500px] text-white">
          <div className="w-full h-full">
            <div className="absolute w-full h-[770px] md:min-h-[500px]  bg-gradient-to-b from-transparent to-[#141414]"></div>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${mixMovies?.backdrop_path}`}
              alt={mixMovies?.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold my-4">
                {mixMovies?.title}
              </h1>
              <div>
                <button
                  onClick={handleTrailerClick}
                  className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
                >
                  Play Trailer
                </button>
                <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                  {" "}
                  Watch Later
                </button>
              </div>
              <p className="text-gray-400 text-sm my-4">
                Released: {mixMovies?.release_date}
              </p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                {cutText(mixMovies?.overview, 200)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
