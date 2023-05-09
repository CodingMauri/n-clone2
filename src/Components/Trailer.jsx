import React from "react";
import {useState,useEffect} from "react"
import Youtube from "react-youtube";
import { getYoutubeData } from "../Requests";
function Trailer({movieId}) {
  const [selected,setSelected] = useState([])
  useEffect(() => {
    getYoutubeData(movieId, setSelected);
  }, [movieId]);
    
  console.log(movieId);
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
    height: "800",
    width: "800",

    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      {officialTrailer && (
        <div className="w-[90%] h-[90%] relative z-90">
          <Youtube
            className="absolute z-70"
            videoId={officialTrailer?.key || fallbackTrailer?.key}
            opts={opts}
            onStateChange={endTrailer}
          />
        </div>
      )}
    </>
  );
}

export default Trailer;
