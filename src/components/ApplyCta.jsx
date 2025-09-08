import React from 'react'

export default function ApplyCta({ role, ctatext, link }) {
  return (
    <div
      className="rounded-lg"
    >
      <div className="bg-transparent border w-[750px] mobile:max-lg:w-[330px] border-[#fc4f7a90] rounded-lg px-7 mobile:max-lg:px-3 py-4 flex  justify-between items-center mobile:max-lg:gap-4 gap-7 mobile:max-lg:items-center">
        <p className='text-[18px] mobile:max-lg:w-40 font-semibold mobile:max-lg:text-[15px]'>{role}</p>
        <button
          onClick={() => window.location.href = link}
          className="bg-[#FA3E67] mobile:max-lg:w-52 px-7 relative z-50 mobile:max-lg:px-5 mobile:max-lg:py-3 cursor-pointer hover:shadow-[0_0_10px_#FF4F76] transition rounded-3xl py-[7px] flex items-center justify-center mb-1"
        >
          <p className="tracking-wide font-semibold text-[16px] mobile:max-lg:text-[14px]">{ctatext}</p>
        </button>

      </div>
    </div>
  )
}
