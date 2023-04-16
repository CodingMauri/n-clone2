import React from "react";
import { motion } from "framer-motion";
import { FiPlayCircle } from "react-icons/fi";
import Youtube from "react-icons"
function ExpandedMovie({ item }) {

    console.log(item)
  return (
    <>
      <div className="absolute  w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">

            <FiPlayCircle  />
          
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
