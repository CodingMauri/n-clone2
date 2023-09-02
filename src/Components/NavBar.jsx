import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const navigate = useNavigate();

  //Handle Logout functionality

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //Search Logic && Search Icon functions

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      navigate(`/search/${searchQuery}`);
    }

    setSearchExpanded(false);
  };

  const handleIconClick = () => {
    setSearchExpanded(!isSearchExpanded);
  };

  //Handles transition effect

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  };
  //Styling and Animations
  const navbarStyle = {
    backgroundColor: `rgba(20,20,20, ${opacity})`,
  };


  useEffect(() => {
    handleScroll();
  });
  return (
    <div
      className="flex m-0 p-0 bg-zinc-900 fixed h-16 ease-in-out w-full duration-300 z-10 items-center justify-between"
      style={navbarStyle}
    >
      <Link to="/">
        <img
          className="w-32 pl-9 cursor-pointer z-90"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix-logo"
        ></img>
      </Link>

      <motion.div className="inline-flex justify-between items-center gap-6 cursor-pointer pr-4">
        <motion.div
          onClick={handleIconClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=""
        >
          <FiSearch className="text-white w-8 z-10" />
        </motion.div>
      {/* {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            className="bg-red-700 px-6 py-2 mr-1 rounded cursor-pointer text-white "
            >
            Log out
          </button>
        </div>
      ) : ( */}
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-700 px-6 py-2 mr-1 rounded cursor-pointer text-white ">
              Sign Up
            </button>
          </Link>
        </div>
      
      </motion.div>

      <AnimatePresence>
        {isSearchExpanded && (
          <motion.form
            type="submit"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute w-4/5 md:w-1/5 sm:transform-x-1/2 "
            style={{
              top: "50%",
              left: "80%",
              transform: "translate(-50%,-50%)",
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="relative text-white border border-gray-300 bg-[#141414] px-4  py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
