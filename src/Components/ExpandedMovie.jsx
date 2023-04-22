import { React, useState, useEffect } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { getYoutubeData } from "../Requests";
import { motion } from "framer-motion";
import Trailer from "./Trailer";

function ExpandedMovie({ item }) {
  const movieId = item.id


  const [selected, setSelected] = useState([]);

  const [showTrailer,setShowTrailer] = useState(false)

  console.log(selected + " I am Selected")

  const handlePosterClick = () => {
    setShowTrailer(true)
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
  
  
  
  useEffect(() => {
    getYoutubeData(movieId, setSelected);
  }, [movieId]);
  return (
    <>

    {showTrailer ?  (
    <Trailer endTrailer = {endTrailer} officialTrailer = {officialTrailer} fallbackTrailer = {fallbackTrailer} />) : <div>loading...</div>}
      <div className="absolute w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
        
          <motion.div whileHover={{ scale: 1.2 }}>
            <FiPlayCircle onClick={handlePosterClick } />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
