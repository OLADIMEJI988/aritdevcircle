import React from 'react'

export default function EachOffer({ icon, title, subtext }) {
  return (
    <div className='antialiased lg:flex items-center gap-7 border border-[#FF4F76] rounded-2xl mobile:max-lg:pt-7 mobile:max-lg:pb-7 lg:pt-[18px] lg:pb-[22px] px-4 text-left hover:shadow-[0_0_8px_#FF4F76] hover:cursor-pointer hoverEffect transition'>
       <img className='mobile:max-lg:h-[50px] lg:h-[34px]' src={icon} alt="" />

       {/* <div className='lg:hidden w-full h-[1px] bg-[#FF4F76] mt-7 my-5'></div>  */}

       <div className='mobile:max-lg:mt-7'>
            <p className='font-bold mobile:max-md:text-2xl md:max-lg:text-[30px]'>{title}</p>
            <p className='mt-3 text-[15px] xsm:max-md:text-lg md:max-lg:text-[16px] md:max-lg:mt-5'>{subtext}</p>
       </div>

    </div>
  )
}
// mobile:max-xlm:h-72 xlm:max-xsm:h-64 xsm:max-lg:h-80