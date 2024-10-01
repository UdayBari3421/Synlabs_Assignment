import React from "react";

import { TiArrowRight } from "react-icons/ti";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";
import { FaFacebook, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

import Brand from "../Assets/imgs/112.jpg";
import phone from "../Assets/imgs/16.png";
import screen from "../Assets/imgs/17.png";

import sideImage from "../Assets/imgs/24.png";

function ImageBoxes() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <div className="flex justify-evenly items-center flex-wrap lg:flex-nowrap">
        <div className="relative bg-gradient-to-b overflow-hidden mb-2 from-[#5525b5] to-[#3a2a51] min-w-[45%] gap-6 min-h-full h-[580px] lg:w-4/12 w-full flex mt-14 text-center items-center flex-col rounded-2xl px-10 pt-10">
          <p className="text-[#89f561]">Join As a Brand</p>
          <h1 className="text-5xl font-medium text-white">
            Interdum et <br />
            malesuada fames ac
          </h1>
          <h2 className="text-white flex justify-center items-center gap-3">
            Join as a Brand <TiArrowRight />
          </h2>
          <img src={Brand} className="w-[50%] h-[55%] rounded-t-3xl absolute top-[330px]" />
        </div>
        <div className="relative bg-gradient-to-b overflow-hidden mb-2 from-[#5525b5] to-[#3a2a51] min-w-[45%] gap-6 min-h-full h-[580px] lg:w-4/12 w-full flex mt-14 text-center items-center flex-col rounded-2xl px-10 pt-10">
          <p className="text-[#89f561]">Join As a Creator</p>
          <h1 className="text-5xl font-medium text-white">
            Interdum et <br />
            malesuada fames ac
          </h1>
          <h2 className="text-white flex justify-center items-center gap-3">
            Join as a Creator <TiArrowRight />
          </h2>
          <img src={phone} className="w-[51%] h-[100%] rounded-t-3xl absolute top-[327px]" />
          <img src={screen} className="w-[54%] h-[100%] rounded-t-3xl absolute top-80" />
        </div>
      </div>
      <div className="flex w-[93%] mx-auto justify-between items-center rounded-2xl border border-purple-900 px-5 py-4">
        <div className="flex w-6/12 flex-col justify-between gap-4">
          <div className="flex justify-start gap-3 items-center">
            <span className="p-1 block bg-purple-600 bg-opacity-10 rounded-lg text-2xl text-purple-700">
              <BiLogoYoutube />
            </span>
            <span className="p-1 block bg-purple-600 bg-opacity-10 rounded-lg text-2xl text-purple-700">
              <BiLogoInstagramAlt />
            </span>
            <span className="p-1 block bg-purple-600 bg-opacity-10 rounded-lg text-2xl text-purple-700">
              <FaFacebook />
            </span>
            <span className="p-1 block bg-purple-600 bg-opacity-10 rounded-lg text-2xl text-purple-700">
              <FaTiktok />
            </span>
            <span className="p-1 block bg-purple-600 bg-opacity-10 rounded-lg text-2xl text-purple-700">
              <FaSnapchatGhost />
            </span>
          </div>

          <h1 className="text-4xl font-semibold">Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu</h1>
          <h2 className="text-2xl">Integer id augue iaculis, iaculis orci ut, blandit quam. Donec in elit auctor, finibus quam in, phar</h2>
        </div>
        <img src={sideImage} className="rounded-3xl w-5/12 h-[18rem]" />
      </div>
    </div>
  );
}

export default ImageBoxes;
