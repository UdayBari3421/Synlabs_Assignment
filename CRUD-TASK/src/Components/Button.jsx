import React from "react";

const Button = ({ bgColor, text, onClickAction, type }) => {
  return (
    <button type={type} onClick={onClickAction} className={`${bgColor} font-bold px-3 py-1 rounded-md flex-1 hover:opacity-80`}>
      {text}
    </button>
  );
};

export default Button;
