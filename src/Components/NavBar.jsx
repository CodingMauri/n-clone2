import React, { useState, useEffect } from "react";
export default function NavBar() {
  const [opacity, setOpacity] = useState(0);
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
      <img
        className="w-32 pl-9"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix-logo"
      ></img>

      <div >
        <button className = "text-white pr-4">Sign In</button>
        <button className = "bg-red-700 px-6 py-2 mr-1 rounded cursor-pointer text-white ">Sign Out</button>
      </div>
    </div>
  );
}
