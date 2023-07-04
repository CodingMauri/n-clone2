import React, { useState, useEffect,useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import { searchMovies } from "../Requests";
import SearchedMovies from "./SearchedMovies";
export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setSearchExpanded] = useState(false);
  const [searchedMovie, setSearchedMovies] = useState([]);
  const [opacity, setOpacity] = useState(0);

  const searchContainerRef  = useRef(null);
  const searchIconRef = useRef(null)

  //Search Logic && Search Icon functions

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      const results = await searchMovies(searchQuery);
      setSearchedMovies(results);
      setSearchExpanded(false); // Close the search input after searching
    }
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

  const scaleUp = {
    scale: 1.2,
    transition: { duration: 1.2 },
  };

  useEffect(() => {
    handleScroll();
  });
  return (
    <div
      className="flex m-0 p-0 bg-zinc-900 fixed h-16 ease-in-out w-full duration-300 z-10 items-center justify-between"
      style={navbarStyle}
    >
      <img
        className="w-32 pl-9"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-logo"
      ></img>

      <motion.div className="inline-flex justify-between items-center gap-6 cursor-pointer">
        <motion.div
          onClick={handleIconClick}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=""
        >
          <FiSearch className="text-white w-8 z-10" />
        </motion.div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-700 px-6 py-2 mr-1 rounded cursor-pointer text-white ">
          Sign Out
        </button>
      </motion.div>

      <AnimatePresence>
        {isSearchExpanded && (
          <motion.div
            key="searchContainer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute z-0"
            style = {{
              top:"50%",
              left: "80%",
              transform: "translate(-50%,-50%)"
            }}

            ref = {searchContainerRef}
            
          >
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onSubmit = {handleSearch}
              className="relative text-white border border-gray-300 bg-[#141414] px-4  py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {searchedMovie.length > 0 && <SearchedMovies searchedMovie = {searchedMovie} />}
    </div>
  );
}
