import React from "react";
import { BiRightTopArrowCircle } from "react-icons/bi";

function CategoryCard({ className, personImage, title, right }) {
  return (
    <div className="max-w-fit flex h-full items-center">
      <div className={`${className} m-auto min-w-full w-full flex-col flex justify-between h-full min-h-full rounded-lg px-4 py-6 text-white font-bold`}>
        <h1 className="text-2xl mb-6 z-50">
          The
          <br />
          {title}
        </h1>
        <BiRightTopArrowCircle className="text-4xl hover:cursor-pointer hover:opacity-50" />
      </div>
      <img className={`${right} -z-0 w-full rounded-br-lg grayscale relative top-[-32px]`} src={personImage} />
    </div>
  );
}

export default CategoryCard;
