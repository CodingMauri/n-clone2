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
    backgroundColor: `rgba(20,20,20, ${opacity})`
  }

  useEffect(() => {
    handleScroll();
  });
  return (
    <div className="flex m-0 p-0 bg-zinc-900 fixed w-full h-16 ease-in-out duration-300 z-10" style ={navbarStyle}>
      <img className = "w-32 pl-9" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt = "Netflix-logo"></img>

      
    </div>
  );
}
