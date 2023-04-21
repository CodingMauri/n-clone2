import {React,useState} from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {motion} from "framer-motion"
import ExpandedMovie from "./ExpandedMovie"

function Movie({item}) {
    const [like, setLike] = useState(false);

    const [expand,setExpand] = useState(null)

    console.log(setLike)
  return (
    <motion.div whileHover={{transition:1 ,scale:0.9}}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
      onMouseEnter = {() => setExpand(item)}
      onMouseLeave = {() => setExpand(null)}>
      {expand === item && <ExpandedMovie item = {item} />}
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
      alt={item?.title}
      id = {item.id}
      />

    {/* <div className = "absolute w-[95%] h-[50px] shadow-md bg-[#141414] z-20 ">
      <motion.div whileHover = {{scale:1.2}}className = "absolute w-full flex justify-center items-center py-2 text-white hidden text-3xl">
        <FiPlayCircle />
      </motion.div>
    </div> */}
  </motion.div>
  )
}

export default Movie