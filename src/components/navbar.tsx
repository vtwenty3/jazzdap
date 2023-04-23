import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./../assets/logo.png";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between   bg-primary text-offWhite	 py-2 px-4">
      <img src={logo} alt="Logo" className="w-24" />
      <div className="justify-center gap-3 flex">
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
