import React from "react";
import halfblackcircle from "../assets/halfblackcircle.webp";
import upwardcurvedpinkarrow from "../assets/upwardcurvedpinkarrow.svg";
import subtleglow from "../assets/subtleglow.webp";
import boyincircle from "../assets/boyincircle.svg";
import boyincirclemobile from "../assets/boyincirclemobile.svg";
import girlincirclemobile from "../assets/girlincirclemobile.svg";
import manincirclemobile from "../assets/manincirclemobile.svg";
import girlincircle from "../assets/girlincircle.svg";
import threecircles from "../assets/threecircles.svg";
import manincircle from "../assets/manincircle.svg";
import curvedpinkarrow from "../assets/curvedpinkarrow.svg";
import CtaCards from "./CtaCards";

export default function Participate() {
  return (
    <>
      <div className="bg-[#0e0e0e] pb-10 mobile:max-lg:pt-3 pt-[480px] xl:pt-[540px]">
        <img
          className="absolute right-0 mt-28 xl:-mt-32 h-full object-contain z-0"
          src={subtleglow}
          alt=""
        />
        <div className="flex mobile:max-lg:flex-col h-[700px] mobile:max-lg:h-auto">
          {/* Left side */}
          <div className="relative w-1/2 flex mobile:max-lg:flex-col items-center justify-center">
            {/* Background image */}
            <img
              src={halfblackcircle}
              alt=""
              className="mobile:max-lg:h-[420px] h-full w-full object-cover"
            />

            {/* Bottom Gradient Overlay */}
            <div className="mobile:max-lg:hidden absolute bottom-0 left-0 w-[74pc] h-[10px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

            <img
              className="lg:hidden absolute translate-x-48 -translate-y-44"
              src={threecircles}
              alt=""
            />

            {/* Text on top */}
            <p className="relative z-10 text-start leading-tight mobile:max-lg:leading-snug text-white text-4xl mobile:max-lg:text-[26px] mobile:max-lg:ml-2 mobile:max-lg:-translate-y-56 lg:-translate-x-[340px] font-bold">
              Who Can <span className="text-[#FF4F76]">Participate</span>
            </p>
          </div>

          <div className="lg:hidden mx-[13px] mobile:max-lg:-mt-3 z-20">
            <CtaCards
              img={boyincirclemobile}
              role="Developer"
              subtext="Gain real engineering experience"
              ctatext="Apply as dev"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfDLPJFf4F9oM0HRzWsORg4zaxiHYpEASIlhNu_BxSh_OnfUw/viewform"
            />
            <div className="my-6">
              <CtaCards
                img={girlincirclemobile}
                role="Designer"
                subtext="Practice UI/UX in live collaboration"
                ctatext="Apply as designer"
                link="https://docs.google.com/forms/d/e/1FAIpQLSf0BuPB8Eyyl_c6BAR6WQsPbTPzqDvYxCB50vFloFQsrSpajQ/viewform"
              />
            </div>
            <CtaCards
              img={manincirclemobile}
              role="Product or Project Managers "
              subtext="Shapen vision, planning & leadership skills"
              ctatext="Apply as PM"
              link="https://docs.google.com/forms/d/e/1FAIpQLSd0DXHanLOmJeGEy2rso2Y4rCJo7aooKuVeAyxtA-1GKxHaig/viewform"
            />

            <div className="flex flex-col mt-6 mb-10 justify-center items-center bg-[#1A1A1A] rounded-xl pt-6 pb-10 text-white">
              <p className="text-[19px] mx-5 leading-9 font-light tracking-wide mb-2 mt-4">
                Irrespective of your role, all participant will walk away with
                new skills, new connections and a real sense of what it feels
                like to ship software as a product.
              </p>
              <img className="mt-8" src={upwardcurvedpinkarrow} alt="" />
            </div>
          </div>

          {/* Right side */}
          <div className="w-1/2 mobile:max-lg:hidden flex flex-col gap-11 justify-center items-center -translate-x-40">
            <div className="bg-[#282828] justify-between text-white text-start py-10 rounded-xl flex items-center h-10 -translate-x-16 w-[950px] pr-10">
              <div className="flex items-center">
                <div className="-mt-[34px] -ml-7 mr-14">
                  <img className="h-28" src={boyincircle} alt="" />
                </div>

                <div>
                  <p className="tracking-wide font-semibold text-[18px]">
                    Developers
                  </p>
                  <p className="mt-1 font-light text-[14px] tracking-wide">
                    Gain real engineering experience.
                  </p>
                </div>
              </div>

              <button
                className="px-7 font-semibold hover:shadow-[0_0_10px_#FF4F76] transition py-2 rounded-full bg-[#FF4F76]"
                onClick={() =>
                  (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfDLPJFf4F9oM0HRzWsORg4zaxiHYpEASIlhNu_BxSh_OnfUw/viewform")
                }
              >
                Apply as dev
              </button>
            </div>

            <div className="bg-[#282828] justify-between text-white text-start py-10 rounded-xl flex items-center h-10 -translate-x-12 w-[920px] pr-10">
              <div className="flex items-center">
                <div className="-mt-[18px] -ml-7 mr-14">
                  <img className="h-[107px]" src={girlincircle} alt="" />
                </div>

                <div>
                  <p className="tracking-wide font-semibold text-[18px]">
                    Designers
                  </p>
                  <p className="mt-1 font-light text-[14px] tracking-wide">
                    Practice UI/UX in live collaboration.
                  </p>
                </div>
              </div>

              <button
                className="px-7 font-semibold hover:shadow-[0_0_10px_#FF4F76] transition py-2 rounded-full bg-[#FF4F76]"
                onClick={() =>
                  (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf0BuPB8Eyyl_c6BAR6WQsPbTPzqDvYxCB50vFloFQsrSpajQ/viewform")
                }
              >
                Apply as designer
              </button>
            </div>

            <div className="bg-[#282828] justify-between text-white text-start py-10 rounded-xl flex items-center h-10 -translate-x-8 w-[890px] pr-10">
              <div className="flex items-center">
                <div className="-mt-[23px] -ml-8 mr-14">
                  <img className="h-[102px]" src={manincircle} alt="" />
                </div>

                <div>
                  <p className="tracking-wide font-semibold text-[18px]">
                    Product or Project Managers
                  </p>
                  <p className="mt-1 font-light text-[14px] tracking-wide">
                    Sharpen vision, planning & leadership skills.
                  </p>
                </div>
              </div>

              <button
                className="px-7 hover:shadow-[0_0_10px_#FF4F76] transition font-semibold py-2 rounded-full bg-[#FF4F76]"
                onClick={() =>
                  (window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd0DXHanLOmJeGEy2rso2Y4rCJo7aooKuVeAyxtA-1GKxHaig/viewform")
                }
              >
                Apply as PM
              </button>
            </div>

            <div className="bg-[#282828] justify-between text-white text-start py-10 rounded-xl flex items-center h-10 -translate-x-5 w-[870px] px-10">
              <div>
                <p className="tracking-wide font-light text-[14px]">
                  Irrespective of your role, all participant will walk away with
                  new skills, new{" "}
                </p>
                <p className="mt-1 font-light text-[14px] tracking-wide">
                  connections and a real sense of what it feels like to ship
                  software as a product.
                </p>
              </div>

              <div>
                <img src={curvedpinkarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
