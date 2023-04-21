import axios from "axios";
import { React, useState, useEffect } from "react";
import { FiPlayCircle } from "react-icons/fi";
function ExpandedMovie({ item }) {
  const [youtubeKey, setYoutubeKey] = useState([]);
  console.log(youtubeKey);

  const getYoutubeData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${process.env.REACT_APP_MOVIE_KEY}`
      )
      .then((res) => setYoutubeKey(res.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => getYoutubeData())

  return (
    <>
      <div className="absolute  w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          <FiPlayCircle />
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
