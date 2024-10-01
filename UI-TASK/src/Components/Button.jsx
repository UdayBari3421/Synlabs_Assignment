import React from "react";

function Button({ text, onClick }) {
  return (
    <button className="bg-[--purple] text-white px-5 py-2 rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
