import React from "react";
import halfblackcircle from "../assets/halfblackcircle.webp";
import whitearrow from "../assets/whitearrow.svg";
import bottomline from "../assets/bottomline.svg";
import bottomglow from "../assets/bottomglow.svg";
import reasonbg from "../assets/reasonbg.svg";
import boyontie from "../assets/boyontie.svg";
import boyontiemobile from "../assets/boyontiemobile.svg";
import threecircles from "../assets/threecircles.svg";

export default function Reason() {
  return (
    <div className="bg-[#0e0e0e] pb-44 mobile:max-lg:pb-16">
      <div className="flex mobile:max-lg:flex-col mobile:max-lg:h-[1100px] h-[700px]">
        <div className="relative w-1/2 flex mobile:max-lg:flex-col items-center justify-center">
          {/* Black circle */}
          <img
            src={halfblackcircle}
            alt=""
            className="absolut mobile:max-lg:h-[420px] h-full w-full object-cover"
          />

          <img
            className="lg:hidden absolute translate-x-48 -translate-y-44"
            src={threecircles}
            alt=""
          />

          {/* Text on top */}
          <p className="relative mobile:max-lg:w-36 z-10 text-start leading-10 text-white text-3xl mobile:max-lg:text-[27px] mobile:max-lg:-translate-x-4 mobile:max-lg:-translate-y-[270px] -translate-x-[350px] xl:-translate-x-[420px] font-bold">
            Reason Behind The <span className="text-[#FF4F76]">Hackathon</span>
          </p>
        </div>

        <div className="text-start -mt-20 text-white tracking-wide lg:hidden w-full">
          <p className="text-base mx-[10px] sm:text-lg md:text-xl leading-9 font-normal tracking-wide">
            The purpose of the hackathon is to bridge the gap between theory and
            practice. Many early career professionals know how to code, design,
            or manage but haven't yet worked in a fast-paced, cross-functional
            team environment where real products are built. By participating you
            will:
          </p>
          <div className="text-base mx-[10px] leading-9 sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide mt-5 space-y-3">
            <p className="flex">
              <span className="-mt-[5px] mr-2 font-bold">.</span>
              Collaborate with developers, designers and product managers in a
              balanced team.
            </p>
            <p className="flex">
              <span className="-mt-[5px] mr-2 font-bold">.</span>
              Experience the full life cycle of product development from concept
              to delivery.
            </p>
            <p className="flex">
              <span className="-mt-[5px] mr-2 font-bold">.</span>
              Learn to manage time, prioritize features and work with real world
              constraints.
            </p>
            <p className="flex">
              <span className="-mt-[5px] mr-2 font-bold">.</span>
              Build portfolio worthy experience to showcase to employers and
              clients.
            </p>
          </div>
        </div>

        <div className="w-1/2 mobile:max-lg:hidden flex flex-col text-white font-light gap-7 justify-center items-center -translate-x-[505px] xl:-translate-x-[575px]">
          <div className="text-start translate-x-64 leading-10">
            <p className="text-[18px]">
              The Purpose of the hackathon is to bridge the gap between theory
              and practice. Many early career professionals know how to code,
              design, or manage but haven't yet worked in a fast-paced,
              cross-functional team environment where real products are built.
              By participating you will:
            </p>
          </div>

          <div className="flex text-start translate-x-64 leading-7 gap-4">
            <img className="w-16" src={whitearrow} alt="" />
            <p>
              Collaborate with developers, designers and product managers in a
              balanced team.
            </p>
          </div>

          <div className="flex text-start translate-x-60 leading-7 xl:translate-x-60 gap-4">
            <img className="w-16" src={whitearrow} alt="" />
            <p>
              Experience the full life cycle of product development from concept
              to delivery.
            </p>
          </div>

          <div className="flex text-start translate-x-60 leading-7 gap-4">
            <img className="w-16" src={whitearrow} alt="" />
            <p>
              Learn to manage time, prioritize features and work with real world
              constraints.
            </p>
          </div>

          <div className="flex text-start translate-x-56 leading-7 gap-4">
            <img className="w-16" src={whitearrow} alt="" />
            <p>
              Build portfolio worthy experience to showcase to employers and
              clients.
            </p>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden">
        <img
          src={boyontiemobile}
          alt="boy in tie"
          className="h-[250px] absolute right-0 bottom-[78px] z-30"
        />

        <img className="mt-[170px] xxm:mt-[130px] w-[500px]" src={bottomline} alt="" />
      </div>

      <img
        src={bottomglow}
        alt=""
        className="h-[500px] lg:hidden absolute -translate-y-[260px] xl:-translate-y-[290px] object-contain z-20 pointer-events-none"
      />

      {/* Reason background with boy overlay */}
      <div className="relative w-full mobile:max-lg:hidden xl:mb-16">
        <img
          src={reasonbg}
          alt=""
          className="w-full absolute -translate-y-[455px] xl:-translate-y-[550px] object-contain z-20 pointer-events-none"
        />

        <img
          src={boyontie}
          alt="boy in tie"
          className="absolute h-[440px] xl:h-[500px] right-0 -translate-y-[380px] xl:-translate-y-[400px] z-30"
        />
      </div>
    </div>
  );
}
