import React from "react";
import CreatorCard from "./CreatorCard";

// creator image
import sharanHegde from "../Assets/imgs/23.png";
import dollySingh from "../Assets/imgs/1.png";
import kritika from "../Assets/imgs/9.png";
import bhuvanBam from "../Assets/imgs/8.png";
import BorderButton from "./BorderButton";

function UGC() {
  return (
    <div className="flex justify-center items-center mt-14 flex-col gap-16 w-full py-14 px-16">
      <div className="flex justify-between w-full items-center">
        <span>
          <h1 className="bg-gradient-to-r from-[#a572b6] via-purple-700 to-blue-800 bg-clip-text text-5xl font-medium tracking-tight text-transparent">UGC</h1>
          <p className="font-normal text-md opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </span>
        <BorderButton text="View All" />
      </div>
      <div className="flex justify-evenly w-full lg:flex-nowrap flex-wrap">
        <CreatorCard followerCount="2.6M" creatorUsername="financewithsharan" creatorImage={sharanHegde} creatorName="Sharan Hegde" />
        <CreatorCard followerCount="1.6M" creatorUsername="dollysingh" creatorImage={dollySingh} creatorName="Dolly Singh" />
        <CreatorCard followerCount="597K" creatorUsername="thatbohogirl" creatorImage={kritika} creatorName="kritika Khurana" />
        <CreatorCard followerCount="19.4M" creatorUsername="bhuvan.bam22" creatorImage={bhuvanBam} creatorName="Bhuvan Bam" />
      </div>
    </div>
  );
}

export default UGC;
