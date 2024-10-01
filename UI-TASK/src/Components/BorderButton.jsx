import React from "react";

function BorderButton({ text }) {
  return <button className="lg:block hidden font-bold px-8 py-3 border-2 border-black rounded-full">{text}</button>;
}

export default BorderButton;
