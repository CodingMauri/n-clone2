import { React, useState } from "react";
import ExpandedMovie from "./ExpandedMovie";
import {motion} from "framer-motion"
function Movie({ item }) {
  const [expand, setExpand] = useState(null);
  return (
    
    <motion.div
    whileHover={{ transition: 1, scale: 0.9 }}
    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
    onMouseEnter={() => setExpand(item)}
    onMouseLeave={() => setExpand(null)}
    >
        {expand === item && (
          <ExpandedMovie item={item}  />
          )}
        <img
          className="w-[95%]  h-auto block pr-3"
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
          id={item.id}
        />

        <div className="absolute bottom-0 w-full opacity-0 hover:opacity-100 text-white"></div>
      </motion.div>
    
  );
}

export default Movie;
