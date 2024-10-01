import React from "react";
import spotify from "../Assets/partners/25.png";
import google from "../Assets/partners/26.png";
import stripe from "../Assets/partners/27.png";
import yt from "../Assets/partners/28.png";
import zoom from "../Assets/partners/29.png";
import ms from "../Assets/partners/30.png";
import grab from "../Assets/partners/31.png";

function AssosiatedBrands() {
  return (
    <div className="flex justify-between gap-16 items-center p-20 flex-col bg-[#fafafa]">
      <span className="flex flex-col justify-center items-center gap-4">
        <h1 className="bg-gradient-to-r from-[#a572b6] via-purple-700 to-blue-800 bg-clip-text text-5xl font-medium tracking-tight text-transparent">Associated Brands</h1>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </span>

      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-16">
        <img src={spotify} className="w-40" />
        <img src={google} className="w-40" />
        <img src={stripe} className="w-40" />
        <img src={yt} className="w-40" />
        <img src={zoom} className="w-40" />
        <img src={ms} className="w-40" />
        <img src={grab} className="w-40" />
      </div>
    </div>
  );
}

export default AssosiatedBrands;
