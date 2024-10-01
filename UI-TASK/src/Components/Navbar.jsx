import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="z-50 bg-white sticky top-0 left-0 right-0 flex justify-between py-5 px-7 shadow-minimal items-center">
      <h1 className="font-bold lg:text-2xl text-base w-2/12">BookMyCollab</h1>
      <span className="flex justify-end items-center gap-12 w-8/12">
        <a href="#" className="hover:opacity-100 opacity-80 lg:block hidden text-center">
          What We Do
        </a>
        <a href="#" className="hover:opacity-100 opacity-80 lg:block hidden text-center">
          How It Works
        </a>
        <a href="#" className="hover:opacity-100 opacity-80 lg:block hidden text-center">
          Join Us As Brand
        </a>
        <a href="#" className="hover:opacity-100 opacity-80 lg:block hidden text-center">
          Join Us As Creator
        </a>
        <Button text="Login" />
      </span>
    </nav>
  );
}

export default Navbar;
