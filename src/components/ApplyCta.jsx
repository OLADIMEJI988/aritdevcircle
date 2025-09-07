import React from 'react'

export default function ApplyCta({ title, subtext, ctatext, link }) {
  return (
    <div
      className="p-[1px] rounded-lg"
    >
      <div className="bg-transparent border border-[#fc4f7b] rounded-lg px-8 py-6 flex flex-col justify-center mobile:max-lg:items-center">
        <p className="text-white tracking-wide text-[21px] mobile:max-lg:text-[22px]">{title}</p>
        <p className="text-[13px] tracking-wide w-[200px] mt-4">{subtext}</p>

        <button
          onClick={() => window.location.href = link}
          className="bg-[#FA3E67] relative z-50 mobile:max-lg:px-7 mobile:max-lg:py-3 cursor-pointer hover:shadow-[0_0_10px_#FF4F76] transition rounded-3xl py-[7px] flex items-center justify-center mt-7 mb-1"
        >
          <p className="tracking-wide">{ctatext}</p>
        </button>
      </div>
    </div>
  )
}
