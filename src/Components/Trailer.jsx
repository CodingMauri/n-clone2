import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { getYoutubeData } from "../Requests";
import { getMovieInfo } from "../Requests";
function Trailer() {
  const [selected, setSelected] = useState([]);

  const { movieId} = useParams();

  const [movieInfo,setMovieInfo] = useState([])


  useEffect(() => {
    getYoutubeData(movieId, setSelected);
  }, [movieId]);

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
    height: "100%",
    width: "100%",

    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    getMovieInfo(movieId,setMovieInfo)
  },[movieId])

  
  return (
      <div className="w-screen h-screen flex justify-center items-center ">
        <div className = "absolute w-full h-full bg-gradient-to-l from-black to-[#14141] z-10"></div>
        <div className = "absolute w-full h-full   ">
          <img className = "w-full h-full object-cover " src = {`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path} `} alt ={movieInfo.title} />
        </div>
      

        {officialTrailer ? (
          <Youtube
            className = " w-[65%] h-[65%] md:min-h-[10%] relative z-20 "
            videoId={officialTrailer?.key || fallbackTrailer?.key}
            opts={opts}
            onStateChange={endTrailer}
          />
        ):(
          <div className = "w-full h-screen justify-center items-center bg-[#141414]">
            <h1>Nothing found</h1>
          </div>
        )}
      </div>
  );
}

export default Trailer;
