import React from "react";
import participation from "../assets/participation.svg";


export default function Rule({ img, title, subtext }) {
  return (
    <div className="flex flex-col justify-center items-center tracking-wide mobile:max-lg:w-[360px] w-[370px]">
        <img className="h-20" src={img} alt="" />
        <p className="mt-7 mb-5 text-lg text-white">{title}</p>
        <p className="text-[#9C9C9C]">{subtext}</p>
    </div>
  );
}
