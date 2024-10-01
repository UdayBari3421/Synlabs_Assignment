import React from "react";
import CategoryCard from "./CategoryCard";
import BorderButton from "./BorderButton";
import sanjeevKapoor from "../Assets/imgs/SanjeevKapoor.png";
import techGuru from "../Assets/imgs/TechGuru.png";
import fashionistas from "../Assets/imgs/Fashionistas.png";
import podcaster from "../Assets/imgs/Podcaster.png";
import traveller from "../Assets/imgs/Traveller.png";

function Categories() {
  return (
    <div className="bg-[#f7efec] flex flex-col py-10 px-16 gap-28">
      <span className="flex justify-between lg:flex-nowrap flex-wrap">
        <h1 className="text-[#855c38] font-semibold text-4xl">Categories</h1>
        <BorderButton text="View All" />
      </span>
      <div className="flex justify-center items-center gap-2 lg:flex-nowrap flex-wrap">
        <CategoryCard className={"bg-[#d0a435]"} right="right-[191px]" title="Foodie" personImage={sanjeevKapoor} />
        <CategoryCard className={"bg-[#1db934]"} right="right-[182px]" title="Techies" personImage={techGuru} />
        <CategoryCard className={"bg-[#2667df]"} right="right-[186px]" title="Fashionistas" personImage={fashionistas} />
        <CategoryCard className={"bg-[#e93248]"} right="right-[170px]" title="Podcasters" personImage={podcaster} />
        <CategoryCard className={"bg-[#7735e1]"} right="right-[191px]" title="Travellers" personImage={traveller} />
      </div>
    </div>
  );
}

export default Categories;
