import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import { getYoutubeData } from "../Requests";
function Trailer() {
  const [selected, setSelected] = useState([]);

  const { movieId } = useParams();
  const {backdrop_path} = useParams()
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
    height: "390",
    width: "640",

    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="w-full h-full flex justify-center items-center  ">
       
      {officialTrailer && (
        <Youtube
          videoId={officialTrailer?.key || fallbackTrailer?.key}
          opts={opts}
          onStateChange={endTrailer}
        />
      )}
    </div>
  );
}

export default Trailer;
