import React from "react";
import verified from "../Assets/imgs/verified.svg";
import Button from "./Button";
import { BiLogoInstagramAlt, BiLogoYoutube } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

function CreatorCard({ creatorName, creatorUsername, creatorImage, followerCount }) {
  return (
    <div className="mx-2 cursor-pointer group relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-2xl w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative min-h-fit rounded-2xl m-2.5 overflow-hidden text-white">
        <img
          className="relative top-[-20px] h-[350px] rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full object-cover"
          src={creatorImage}
        />
        <p className="relative top-[-341px] left-4 w-fit px-2 py-1 rounded-full z-20 bg-[#fdeded] text-[#f36a6a]">Entertainment</p>
      </div>
      <div className="px-4 pt-4 flex justify-between flex-col">
        <span className="mb-2 justify-between flex gap-1 border-b border-slate-200 pb-3 items-center text-slate-800 text-xl font-semibold">
          <span>
            <p className="flex gap-2">
              {creatorName} <img width={22} src={verified} />
            </p>
            <p className="opacity-50">{creatorUsername}</p>
          </span>
          <span>
            <p className="text-end">{followerCount}</p>
            <p className="opacity-50">Followers</p>
          </span>
        </span>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex justify-between items-center">
        <span className="flex justify-between items-center w-2/6">
          <p className="border-2 rounded-lg p-1 text-2xl text-purple-800">
            <BiLogoInstagramAlt />
          </p>
          <p className="border-2 rounded-lg p-1 text-2xl text-red-500">
            <BiLogoYoutube />
          </p>
          <p className="border-2 rounded-lg p-1 text-2xl text-blue-500">
            <FaFacebook />
          </p>
        </span>
        <Button text="Compare" />
      </div>
    </div>
  );
}

export default CreatorCard;
