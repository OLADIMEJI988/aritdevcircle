import React from 'react'
import leftsemicircle from "../assets/leftsemicircle.webp";
import rightsemicircle from "../assets/rightsemicircle.webp";

export default function AwardsAndReg() {
  return (
   <>
        <div className='mt-20 lg:mt-28 pb-20 mobile:max-lg:pb-44 flex justify-center items-center'>
            <img className='absolute left-0 lg:mt-40 mobile:max-lg:h-80 mobile:max-lg:-mt-[450px]' src={leftsemicircle} alt="" />

            <div className='mobile:max-xxm:mt-32 xxm:max-lg:mt-0 tracking-wide flex flex-col items-center'>
                <p className='text-4xl lg:text-5xl mt-28 xxm:max-lg:mt-56'>Awards & <span className='text-[#fc4f7b]'>Recognition</span></p>
                <div className='font-normal max-w-[640px] px-[15px] mt-8 leading-[30px] text-[18px]'>
                    <p className='tracking-wide'>At the end of the hackthon,  winners will be announced at the award ceremony on November 1st with prizes and recognition across categories.</p>
                    <div className='mt-6 text-start tracking-wide max-w-96 mx-auto'>
                        <p className='mt-5 mb-4'>Note: projects will be evaluated based on</p>

                        <p className="flex my-[10px]">
                            <span className="-mt-[5px] mr-2 font-extrabold">.</span>
                            Functionality and Feature Completion.
                        </p>

                        <p className="flex">
                            <span className="-mt-[5px] mr-2 font-extrabold">.</span>
                            User Experience and Design Quality.
                        </p>

                        <p className="flex my-[10px]">
                            <span className="-mt-[5px] mr-2 font-extrabold">.</span>
                            Code Quality and Documentation.
                        </p>

                        <p className="flex">
                            <span className="-mt-[5px] mr-2 font-extrabold">.</span>
                            Team Collaboration and process.
                        </p>
                    </div>
                </div>
            </div>

            <img className='absolute right-0 mt-[200px] mobile:max-lg:h-80 mobile:max-xxm:mt-[850px] xxm:max-lg:mt-[820px]' src={rightsemicircle} alt="" />
        </div>
        
    </>
    
  )
}
