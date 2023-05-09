import { React , useState} from "react";
import { FiPlayCircle, FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
function ExpandedMovie({ item }) {
  const navigate = useNavigate();

<<<<<<< HEAD
function ExpandedMovie({ item, handlePosterClick }) {


  

=======
  const [openModal,setOpenModal] = useState(false)
  const handleTrailerClick = () => {
    navigate(`/trailer/${item.id}`);
  };
  console.log(item)
  const clickModal = () => {
    setOpenModal(true)
  };
>>>>>>> 07f4fc1b563f180dce43fc9e2843d7419f4d80e7
  return (
    <>
      <div className="absolute w-[94.5%] bottom-0 h-[100px] bg-gradient-b from-[black] to-transparent text-white">
        <div className="w-full h-full absolute text-4xl flex justify-center items-center">
          <div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FiPlayCircle onClick={handleTrailerClick} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FiArrowDown onClick={clickModal} />
              <Modal open = {openModal} item = {item} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
