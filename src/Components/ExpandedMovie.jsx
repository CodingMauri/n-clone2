import { React } from "react";
import { FiPlayCircle, FiArrowDownCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ExpandedMovie({ item }) {
  // const [like, setLike] = useState(false);

  // const [saved, setSaved] = useState(false);
  // const { user } = UserAuth();

  // const movieID = doc(db, "users", `${user?.email}`);
  const navigate = useNavigate();

  // const saveShow = async () => {
  //   if (user?.email) {
  //     setLike(!like);
  //     setSaved(true);
  //     await updateDoc(movieID, {
  //       savedMovies: arrayUnion({
  //         id: item.id,
  //         title: item.title,
  //         img: item.backdrop_path,
  //       }),
  //     });
  //   } else {
  //     alert("Please log in to save a movie");
  //   }
  // };

  // const removeShow = async () => {
  //   if (user?.email) {
  //     await updateDoc(movieID, {
  //       savedMovies: arrayRemove(item.id),
  //     });
  //   }
  // };
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
      <div className="w-[92%] h-20 bottom-0 absolute mx-auto text-2xl flex gap-9 justify-center items-center bg-[#141414]  shadow-md shadow-stone-950">
        <div className="inline-flex absolute w-full top-4 text-gray-300 md:gap-10 justify-center ">
          <motion.div className = "w-[10px]">
            <FaHeart className="text-white" />
          </motion.div>

          <>
            <motion.p className="text-white "></motion.p>
            <motion.div className="" whileHover={{ scale: 1.2 }}>
              <FiPlayCircle
                className="text-white "
                onClick={handleTrailerClick}
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <FiArrowDownCircle className="text-white" />
            </motion.div>
          </>
        </div>
      </div>
    </>
  );
}

export default ExpandedMovie;
