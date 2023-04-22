import { React, useState, useEffect } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { getYoutubeData } from "../Requests";
import { motion } from "framer-motion";
import Youtube from "react-youtube";

function ExpandedMovie({ item }) {
  const movieId = item.id

  const [youtubePlayer, setYoutubePlayer] = useState(false);

  const [selected, setSelected] = useState([]);

  console.log(selected + " I am Selected")

  const handlePosterClick = () => {
    setYoutubePlayer(true);
  };
  
  const endTrailer = (e) => {
    if (e.data === window.YT.PlayerState.ENDED) {
      e.target.pauseVideo();
    }
  };
  
  const officialTrailer = selected
  ?.filter((video) => video.type === "Trailer" && video.official)
  .find((video) => video.site === "YouTube");
  
  const fallbackTrailer = selected
  ?.filter((video) => video.type === "Trailer")
  .find((video) => video.site === "YouTube");
  
  
  const opts = {
    height: `390`,
    width: `640`,
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    getYoutubeData(movieId, setSelected);
  }, [movieId]);
  return (
    <>
      <div className="absolute w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          {officialTrailer && youtubePlayer && (
            <Youtube
              className = "flex justify-center items-center z-30"
              videoId={officialTrailer?.key || fallbackTrailer?.key}
              opts={opts}
              onStateChange={endTrailer}
            />
          )}
          <motion.div whileHover={{ scale: 1.2 }}>
            <FiPlayCircle onClick={handlePosterClick} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
