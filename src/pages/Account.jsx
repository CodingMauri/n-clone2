import React from "react";
import SavedShows from "../Components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/0b3dc3ab-67fa-49bd-9d78-c6557c01e5b4/US-en-20230703-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="."
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[410px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      <SavedShows />
      </div>
    </>
  );
};

export default Account;
