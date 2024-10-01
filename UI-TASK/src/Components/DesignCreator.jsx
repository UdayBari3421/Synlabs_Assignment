import React from "react";
import Arrow from "../Assets/imgs/Arrow.svg";
import hifiBoy from "../Assets/imgs/7.png";
import char1 from "../Assets/imgs/6.png";
import char2 from "../Assets/imgs/4.png";
import char3 from "../Assets/imgs/13.png";
import char4 from "../Assets/imgs/14.png";
import char5 from "../Assets/imgs/15.png";

function DesignCreator() {
  return (
    <div className="flex justify-around items-center flex-wrap lg:flex-nowrap">
      <div className="min-w-[45%] gap-6 min-h-full h-[580px] lg:w-4/12 w-full flex mt-14 justify-between items-center flex-col lg:items-start rounded-lg p-10 bg-[#f7efec]">
        <span>
          <h2 className="text-5xl">Meet</h2>
          <h1 className="text-7xl font-semibold">The Design Creator</h1>
        </span>
        <img src={Arrow} className="self-end" />
        <p className="text-4xl underline underline-offset-8 text-purple-600">Read More</p>
      </div>
      <div className="w-5/12 flex flex-col justify-center gap-5">
        <h1 className="lg:text-7xl text-4xl font-semibold lg:text-start text-center">Aman k.</h1>
        <span className="flex items-center gap-5 lg:justify-start justify-center lg:flex-nowrap flex-wrap">
          <img src={hifiBoy} className="h-14 w-14 rounded-full" />
          <h1 className="lg:text-5xl text-2xl font-semibold text-gray-400">Design Creator</h1>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</p>
        <span className="flex lg:justify-start justify-center items-center lg:flex-nowrap flex-wrap">
          <img src={char1} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
          <img src={hifiBoy} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
          <img src={char2} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
          <img src={char3} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
          <img src={char4} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
          <img src={char5} className="w-[55px] object-cover rounded-full p-2 h-w-[55px]" />
        </span>
      </div>
    </div>
  );
}

export default DesignCreator;
