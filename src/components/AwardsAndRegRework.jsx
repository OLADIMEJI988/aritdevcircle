import React from 'react'
import innerbg from "../assets/eventcardinnerbg.webp";
import pinkarrow from "../assets/straightpinkarrow.svg";
import pinkcurvedline from "../assets/pinkcurvedline.svg";
import awardglow from "../assets/awardglow.webp";
import bottomline from "../assets/bottomline.svg";


export default function AwardsAndRegRework() {
  return (
    <div className='bg-[#0e0e0e] pt-5 gap-3 pb-14 flex flex-col justify-center items-center'>

        <div className='mobile:max-lg:hidden flex gap-3'>
            <div
                className="relative border rounded-2xl border-[#FF4F76] h-64 w-[550px] overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-90 rounded-2xl"></div>

                {/* Content */}
                <div className="relative tracking-wide justify-center text-3xl px-10 py-10 leading-tight text-start z-10 flex flex-col h-full">
                    <p className="text-white font-semibold">Awards & </p>
                    <p className="text-[#FF4F76] font-semibold">Recognition</p>
                    <img className='mt-5 w-52' src={pinkarrow} alt="" />
                </div>
            </div>

            <div
                className="relative border rounded-2xl border-[#FF4F76] h-64 w-[380px] overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-90 rounded-2xl"></div>

                {/* Content */}
                <div className="relative text-[#E3E3E3] tracking-wide font-light justify-center text-lg items-center py-10 leading-loose text-start z-10 flex flex-col h-full">
                    <p>At the end of the hackthon,  winners will</p>
                    <p>be announced at the award ceremony on</p>
                    <p>November 1st with prizes and recognition</p>
                    <p>across categories.</p>

                </div>
            </div>

        </div>

        <div className='mobile:max-lg:hidden flex gap-3'>

            <div
                className="relative border rounded-2xl border-[#FF4F76] h-64 w-[380px] overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-90 rounded-2xl"></div>

                {/* Content */}
                <div className="text-white relative tracking-wide justify-center text-3xl px-10 py-10 leading-tight text-start z-10 flex flex-col h-full">
                    <p className="font-semibold">Project </p>
                    <p className="font-semibold">Evaluation Basis</p>
                    <img className='mt-5 w-52' src={pinkarrow} alt="" />
                </div>
            </div>

            <div
                className="relative border rounded-2xl border-[#FF4F76] h-64 w-[550px] overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-90 rounded-2xl"></div>

                {/* Content */}
                <div className="relative text-[#E3E3E3] tracking-wide font-light justify-center items-center text-lg pl-10 py-10 leading-loose text-start z-10 flex flex-col h-full">
                    <p>Note: projects will be evaluated base on</p>
                    <div>
                        <div className='flex gap-2'>
                            <p className='-mt-[6px] font-bold'>.</p>
                            <p className='flex justify-center'>Functionality and feature completion</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='-mt-[6px] font-bold'>.</p>
                            <p className='flex justify-center'>User experience and design quality</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='-mt-[6px] font-bold'>.</p>
                            <p className='flex justify-center'>Code quality and documentation</p>
                        </div>

                        <div className='flex gap-2'>
                            <p className='-mt-[6px] font-bold'>.</p>
                            <p className='flex justify-center'>Team Collaboration and process</p>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>

        <div className='lg:hidden'>
           <div
                className="relative flex justify-center border rounded-2xl border-[#FF4F76] h-64 mobile:max-lg:h-80 w-[335px] overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-95 rounded-2xl"></div>

                {/* Content */}
                <div className="relative tracking-wide justify-center text-2xl py-20 leading-tight z-10 flex flex-col h-full">
                    <p className="text-white text-[25px] font-semibold">Awards & <span className='text-[#FF4F76]'>Recognition</span></p>
                    <p className='text-white text-[16px] leading-8 mt-7 px-10'>At the end of the hackthon,  winners will be announced at the award ceremony on November 1st with prizes and recognition across categories.</p>
                </div>
                
           </div>

           <div
                className="relative flex justify-center border rounded-2xl border-[#FF4F76] h-64 mobile:max-lg:h-80 w-[335px] mt-6 overflow-hidden"
                style={{
                    backgroundImage: `url(${innerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                {/* Overlay to darken background */}
                <div className="absolute inset-0 bg-[#0e0e0e] bg-opacity-95 rounded-2xl"></div>

                {/* Content */}
                <div className="relative tracking-wide justify-center text-2xl py-20 leading-tight z-10 flex flex-col h-full">
                    <p className="text-white text-[26px] font-semibold">Project Evaluation <span className='text-[#FF4F76]'>Basis</span></p>
                    <p className='text-white text-[16px] leading-8 mt-7 mb-2 px-2'>Note: Projects will be evaluated base on</p>
                    <p className='text-white text-[16px] flex leading-8 px-5'><span className='font-bold -mt-[5px] mr-[5px]'>.</span> Functionality and feature completion</p>
                    <p className='text-white text-[16px] flex leading-8 px-5'><span className='font-bold -mt-[5px] mr-[5px]'>.</span> User experience and design quality</p>
                    <p className='text-white text-[16px] flex leading-8 px-5'><span className='font-bold -mt-[5px] mr-[5px]'>.</span> Code quality and documentation</p>
                    <p className='text-white text-[16px] flex leading-8 px-5'><span className='font-bold -mt-[5px] mr-[5px]'>.</span> Team collaboration and process</p>
                </div>
                
           </div>
        </div>

        <div className='-mt-10 mobile:max-lg:hidden'>
            <img src={pinkcurvedline} alt="" />
        </div>

        <img className="absolute right-0 mt-14 mobile:max-lg:mt-[370px] h-full object-contain pointer-events-none" src={awardglow} alt=""/>
        <img className='lg:hidden' src={bottomline} alt="" />

    </div>
  )
}
