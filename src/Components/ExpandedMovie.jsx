import { React, useState } from "react";
import { FiPlayCircle, FiArrowDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ExpandedMovie({ item }) {
  const navigate = useNavigate();
  //Working on a Modal pop up that when clicked the user will get to see more information about the movie
  // const [openModal,setOpenModal] = useState(false)
  const handleTrailerClick = () => {
    navigate(`/trailer/${item.id}`);
  };

  // const handleIconClick = () => {
  //   setMoreInfo(!toggleMoreInfo);
  // };
  return (
    <>
      <div className="absolute w-[95%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          <motion.div className="" whileHover={{ scale: 1.2 }}>
            <FiPlayCircle onClick={handleTrailerClick} />
          </motion.div>
          {/* <motion.div whileHover={{ scale: 1.2 }}>
            <FiArrowDown onClick={handleIconClick} />
          </motion.div> */}
        </div>
      </div>

     
    </>
  );
}

export default ExpandedMovie;
