import { React , useState} from "react";
import { FiPlayCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function ExpandedMovie({ item }) {
  const navigate = useNavigate();
  
  //Working on a Modal pop up that when clicked the user will get to see more information about the movie
  // const [openModal,setOpenModal] = useState(false)
  const handleTrailerClick = () => {
    navigate(`/trailer/${item.id}`);
  };
  console.log(item)
  // const clickModal = () => {
  //   setOpenModal(true)
  // };
  return (
    <>
      <div className="absolute w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          <div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FiPlayCircle onClick={handleTrailerClick} />
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.2 }}>
              <FiArrowDown onClick={clickModal} />
              <Modal open = {openModal} item = {item} />
            </motion.div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
