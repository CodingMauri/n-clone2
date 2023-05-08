import { React, useState } from "react";
import ExpandedMovie from "./ExpandedMovie";
function Movie({ item }) {
  const [expand, setExpand] = useState(null);
  return (
    
    <div
    whileHover={{ transition: 1, scale: 0.9 }}
    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
    onMouseEnter={() => setExpand(item)}
    onMouseLeave={() => setExpand(null)}
    >
        {expand === item && (
          <ExpandedMovie item={item}  />
          )}
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
          id={item.id}
        />

        <div className="absolute bottom-0 w-full opacity-0 hover:opacity-100 text-white"></div>
      </div>
    
  );
}

export default Movie;
