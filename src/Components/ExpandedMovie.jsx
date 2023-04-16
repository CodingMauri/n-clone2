import React from "react";
import { FiPlayCircle } from "react-icons/fi";
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
