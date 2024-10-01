import React from "react";
import CreatorCard from "./CreatorCard";

// creator image
import tanmayBhatt from "../Assets/imgs/12.png";
import kushaKapila from "../Assets/imgs/11.png";
import rohanJoshi from "../Assets/imgs/10.png";
import bhuvanBam from "../Assets/imgs/8.png";
import BorderButton from "./BorderButton";

function OnRise() {
  return (
    <div className="flex justify-center items-center mt-14 flex-col gap-16 w-full py-14 px-16 bg-[#fafafa]">
      <div className="flex justify-between w-full items-center">
        <span>
          <h1 className="bg-gradient-to-r from-[#a572b6] via-purple-700 to-blue-800 bg-clip-text text-5xl font-medium tracking-tight text-transparent">On The Rise</h1>
          <p className="font-normal text-md opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </span>
        <BorderButton text="View All" />
      </div>
      <div className="flex justify-evenly w-full">
        <CreatorCard followerCount="1.9M" creatorUsername="tanmaynhat" creatorImage={tanmayBhatt} creatorName="Tanmay Bhatt" />
        <CreatorCard followerCount="3.7M" creatorUsername="kushakapila" creatorImage={kushaKapila} creatorName="Kusha Kapila" />
        <CreatorCard followerCount="597K" creatorUsername="mojorojo" creatorImage={rohanJoshi} creatorName="Rohan Joshi" />
        <CreatorCard followerCount="19.4M" creatorUsername="bhuvan.bam22" creatorImage={bhuvanBam} creatorName="Bhuvan Bam" />
      </div>
    </div>
  );
}

export default OnRise;
