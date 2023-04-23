import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./../assets/logo.png";

function Navbar() {
  return (
    <div
      className="sticky top-0 z-10 flex w-full items-center  justify-between bg-primary	 px-4 py-2 text-offWhite drop-shadow-lg

"
    >
      <img src={logo} alt="Logo" className="w-24" />
      <div className="flex justify-center gap-3">
        <a>JazzDap</a>
        <a>JazzDap</a>
        <a>JazzDap</a>
      </div>
      <a className="flex flex-row items-center gap-1">
        <AiOutlineSearch className=" mt-0.5" /> Search
      </a>
    </div>
  );
}

export default Navbar;
