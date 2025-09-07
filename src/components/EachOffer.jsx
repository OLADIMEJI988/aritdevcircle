import React from 'react'

export default function EachOffer({ icon, title, subtext }) {
  return (
    <div className='antialiased mobile:max-lg:flex mobile:max-lg:flex-col mobile:max-lg:items-center lg:flex lg:flex-row items-center gap-7 border border-[#FF4F76] rounded-2xl mobile:max-lg:pt-7 mobile:max-lg:pb-7 lg:pt-[18px] lg:pb-[22px] px-4 text-left hover:shadow-[0_0_8px_#FF4F76] hover:cursor-pointer hoverEffect transition'>
        <img className='mobile:max-lg:h-[50px] lg:h-[34px]' src={icon} alt="" />

        {/* <div className='lg:hidden w-full h-[1px] bg-[#FF4F76] mt-7 my-5'></div>  */}

        <div className='mobile:max-lg:text-center'> {/*  */}
            <p className='font-bold mobile:max-md:text-2xl md:max-lg:text-[30px]'>{title}</p>
            <p className='mt-3 text-[15px] xsm:max-md:text-lg md:max-lg:text-[16px] md:max-lg:mt-5'>{subtext}</p>
        </div>
    </div>

  )
}


<svg width="454" height="594" viewBox="0 0 454 594" fill="none" xmlns="http://www.w3.org/2000/svg">

  <path d="M114.687 304.945V304.894L114.636 304.945H114.687Z" fill="#FBBC05"/>
  <path d="M108.875 310.674H108.888V310.661L108.875 310.674Z" fill="#34A853"/>
  <path d="M218.393 290C319.446 267.345 311.23 123.345 435.313 98" stroke="url(#paint0_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M218.393 290C312.762 229.359 267.902 21.3584 452 2" stroke="url(#paint1_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M234.036 83.7588C125.889 90.0449 170.747 298.047 103.675 289.759" stroke="url(#paint2_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M218.393 290C326.153 290 344.239 194 452 194" stroke="url(#paint3_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M-10 290H452" stroke="#676666" stroke-opacity="0.39" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M218.393 288C319.446 310.655 311.23 454.655 435.313 480" stroke="url(#paint4_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M218.393 288C312.762 348.641 267.902 556.642 452 576" stroke="url(#paint5_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M256 499.241C147.853 492.955 192.711 284.953 125.639 293.241" stroke="url(#paint6_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
  <path d="M218 288C325.76 288 343.847 384 451.607 384" stroke="url(#paint7_linear_639_595)" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>

  <defs>
    <linearGradient id="paint0_linear_639_595" x1="326.853" y1="98" x2="326.853" y2="290" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint1_linear_639_595" x1="335.196" y1="2" x2="335.196" y2="290" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint2_linear_639_595" x1="168.856" y1="83.7588" x2="168.856" y2="290" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint3_linear_639_595" x1="335.196" y1="194" x2="335.196" y2="290" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint4_linear_639_595" x1="326.853" y1="480" x2="326.853" y2="288" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint5_linear_639_595" x1="335.196" y1="576" x2="335.196" y2="288" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint6_linear_639_595" x1="190.819" y1="499.241" x2="190.819" y2="293" gradientUnits="userSpaceOnUse">
    <stop stop-color="#2D2C2C"/>
    <stop offset="0.254808" stop-color="#646262"/>
    <stop offset="0.6249" stop-color="#4A4848"/>
    <stop offset="0.625" stop-color="#CDCBCB"/>
    </linearGradient>
    <linearGradient id="paint7_linear_639_595" x1="225.105" y1="295.042" x2="400.004" y2="385.027" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EFE3E6"/>
    <stop offset="0.615385" stop-color="#BF435E"/>
    <stop offset="0.71875" stop-color="#CF4664"/>
    <stop offset="0.822115" stop-color="#FC2656"/>
    </linearGradient>
    <clipPath id="clip0_639_595">
      <rect width="454" height="594" fill="white"/>
    </clipPath>
  </defs>
</svg>

