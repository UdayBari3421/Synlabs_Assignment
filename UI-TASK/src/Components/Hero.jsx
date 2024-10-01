import React from "react";
import heroImg from "../Assets/imgs/heroimg.png";
import waveImg from "../Assets/imgs/wave.png";
import Dropdown from "./Dropdown";
import Button from "./Button";

import CHANEL from "../Assets/company/CHANEL.png";
import CLAVIN from "../Assets/company/CLAVIN.png";
import DENIM from "../Assets/company/DENIM.png";
import LOUIS from "../Assets/company/LOUIS.png";
import PRADA from "../Assets/company/PRADA.png";

function Hero() {
  return (
    <section className="flex justify-around items-center flex-wrap lg:flex-nowrap">
      <div className="min-w-[45%] gap-6 min-h-full h-[650px] lg:w-4/12 w-full flex mt-14 justify-between items-center flex-col lg:items-start rounded-lg bg-[#fafafa] p-10">
        <div className="w-full h-full flex flex-col gap-8">
          <img src={waveImg} className="w-10" />
          <h1 className="font-semibold py-4 bg-gradient-to-r from-[#a572b6] via-purple-700 to-blue-800 bg-clip-text text-5xl tracking-tight text-transparent">
            Simplifying Influencer <br /> Marketing For You!
          </h1>
          <p className="font-normal text-lg">
            Explore creators across YouTube, Instagram & <br /> Facebook to curate unique content for your brand
          </p>
          <span className="flex lg:justify-between w-9/12 lg:flex-nowrap flex-wrap justify-start">
            <Dropdown options={["Instagram", "Facebook", "Youtube", "Snapchat"]} text="Account" />
            <Dropdown options={["Influencer", "Manager", "Marketing Executive", "Civilian"]} text="Category" />
            <Button text="Search" />
          </span>
        </div>
        <p className="opacity-30">Trusted By</p>
        <span className="flex justify-between w-full overflow-hidden">
          <img src={CHANEL} className="object-contain w-28 opacity-60 hover:opacity-100" />
          <img src={LOUIS} className="object-contain w-28 opacity-35 hover:opacity-100" />
          <img src={PRADA} className="object-contain w-28 opacity-25 hover:opacity-100" />
          <img src={CLAVIN} className="object-contain w-28 opacity-40 hover:opacity-100" />
          <img src={DENIM} className="object-contain w-28 opacity-20 hover:opacity-100" />
        </span>
      </div>
      <div className="w-5/12 flex justify-center items-center">
        <img src={heroImg} className="p-8 w-full h-full" />
      </div>
    </section>
  );
}

export default Hero;
