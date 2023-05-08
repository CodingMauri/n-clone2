import { React, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom'
function ExpandedMovie({ item }) {
  
  
const navigate = useNavigate()

  const handleTrailerClick = () => {
    console.log("Clicked")
    navigate(`/trailer/${item.id}`);
  }
  return (
    <>
      <div className="absolute w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          <motion.div whileHover={{ scale: 1.2 }}>
              <FiPlayCircle onClick = {handleTrailerClick}/>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
