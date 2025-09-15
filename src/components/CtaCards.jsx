import React from "react";

export default function CtaCards({ img, role, subtext, ctatext, link }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1A1A1A] rounded-xl pt-6 pb-10 text-white">
      <img className="h-24" src={img} alt="" />
      <p className="text-[27px] font-semibold tracking-wide mb-2 mt-4">
        {role}
      </p>
      <p className="text-[18px] tracking-wide my-2 mx-5">{subtext}</p>
      <button
        className="bg-[#fc4f7b] flex justify-center items-center mt-8 px-7 py-2 rounded-full font-semibold text-[19px]"
        onClick={() => (window.location.href = link)}
      >
        {ctatext}
      </button>
    </div>
  );
}
