import React from "react";
import Youtube from "react-youtube";

function Trailer({officialTrailer,youtubePlayer,endTrailer,fallbackTrailer}) {


  useEffect(() => {
    getYoutubeData(movieId, setSelected);
  }, [movieId]);
    const opts = {
        height: `80%`,
        width: `80%`,
        playerVars: {
          autoplay: 1,
        },
      };
  return <>
     {officialTrailer && youtubePlayer && (
            <Youtube
              className = "absolute z-70"
              videoId={officialTrailer?.key || fallbackTrailer?.key}
              opts={opts}
              onStateChange={endTrailer}
            />
          )}
  </>;
}

export default Trailer;
