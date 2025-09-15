import React from "react";
import bendingarrows from "../assets/bendingarrows.webp";
import timelineglow from "../assets/timelineglow.webp";
import num1 from "../assets/01.svg";
import num2 from "../assets/02.svg";
import num3 from "../assets/03.svg";
import num4 from "../assets/04.svg";
import num5 from "../assets/05.svg";
import num6 from "../assets/06.svg";
import num7 from "../assets/07.svg";
import num8 from "../assets/08.svg";
import num1mobile from "../assets/01mobile.svg";
import num2mobile from "../assets/02mobile.svg";
import num3mobile from "../assets/03mobile.svg";
import num4mobile from "../assets/04mobile.svg";
import num5mobile from "../assets/05mobile.svg";
import num6mobile from "../assets/06mobile.svg";
import num7mobile from "../assets/07mobile.svg";
import num8mobile from "../assets/08mobile.svg";
import pinkarrow from "../assets/pinkarrow.svg";
import mobiletimeline from "../assets/mobiletimeline.svg";

export default function DateTimelineRework() {
  return (
    <div className="bg-[#0e0e0e] relative mobile:max-lg:pb-14 pt-10">
      {/* Heading */}
      <div>
        <p className="text-4xl mobile:max-lg:text-[33px] mobile:max-lg:leading-normal tracking-wide font-semibold md:text-5xl text-center pb-20 text-white">
          Hackathon <span className="text-[#fc4f7b]">Timeline</span>
        </p>
      </div>

      <div className="lg:hidden mobile:max-lg:pb-20 flex justify-center">
        <div>
          <img src={mobiletimeline} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-3 -translate-y-4 -translate-x-1">
            <img src={num1mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">September 8th</p>
              <p className="text-white mt-1">Registration Opens</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-20 -translate-x-1">
            <img src={num2mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">September 14th</p>
              <p className="text-white mt-1">Registration Closes</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[170px] -translate-x-1">
            <img src={num3mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">September 15th - 19th</p>
              <p className="text-white mt-1">Team Creation</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[260px] -translate-x-1">
            <img src={num4mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">September 20th</p>
              <p className="text-white mt-1">Orientation Session</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[350px] -translate-x-[2px]">
            <img src={num5mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">September 29th</p>
              <p className="text-white mt-1">Hackathon Kickoff</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[440px]">
            <img src={num6mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">October 19th</p>
              <p className="text-white mt-1">Hackathon Ends</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[530px]">
            <img src={num7mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">October 20th - 31st</p>
              <p className="text-white mt-1">Project Grading</p>
            </div>
          </div>

          <div className="flex gap-3 translate-y-[630px]">
            <img src={num8mobile} alt="" />
            <div className="text-start tracking-wide">
              <p className="text-[#fc4f7b]">November 1st</p>
              <p className="text-white mt-1">Awards Ceremony</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline wrapper */}
      <div className="mobile:max-lg:hidden relative flex justify-center pb-28">
        {/* Glow background */}
        <img
          className="absolute right-0 top-0 h-full object-contain"
          src={timelineglow}
          alt="glow background"
        />

        {/* Timeline content */}
        <div className="relative z-10 flex justify-center">
          {/* Line */}
          <img
            className="h-[580px]"
            src={bendingarrows}
            alt="timeline arrows"
          />

          {/* Step 1 */}
          <img
            src={num1}
            alt="step 1"
            className="absolute top-[90px] -translate-x-[430px]"
          />
          <img
            className="absolute top-[164px] -translate-x-[430px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[220px] -translate-x-[866px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              September 8th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Registration Opens
            </p>
          </div>

          {/* Step 2 */}
          <img
            src={num2}
            alt="step 2"
            className="absolute -top-[32px] -translate-x-[170px]"
          />
          <img
            className="absolute top-[41px] -translate-x-[170px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[95px] -translate-x-[605px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              September 14th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Registration Closes
            </p>
          </div>

          {/* Step 3 */}
          <img
            src={num3}
            alt="step 3"
            className="absolute -top-[32px] translate-x-[190px]"
          />
          <img
            className="absolute top-[41px] translate-x-[190px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[95px] -translate-x-[245px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-40">
              September 15th - 19th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Team Creation
            </p>
          </div>

          {/* Step 4 */}
          <img
            src={num4}
            alt="step 4"
            className="absolute top-[270px] translate-x-[300px]"
          />
          <img
            className="absolute top-[344px] translate-x-[300px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[400px] -translate-x-[135px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              September 20th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Orientation Session
            </p>
          </div>

          {/* Step 5 */}
          <img
            src={num5}
            alt="step 5"
            className="absolute top-[270px] translate-x-[40px]"
          />
          <img
            className="absolute top-[344px] translate-x-[40px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[400px] -translate-x-[395px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              September 29th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Hackathon Kickoff
            </p>
          </div>

          {/* Step 6 */}
          <img
            src={num6}
            alt="step 6"
            className="absolute top-[270px] -translate-x-[220px]"
          />
          <img
            className="absolute top-[344px] -translate-x-[220px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[400px] -translate-x-[655px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              October 19th
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Hackathon Ends
            </p>
          </div>

          {/* Step 7 */}
          <img
            src={num7}
            alt="step 7"
            className="absolute top-[540px] -translate-x-[100px]"
          />
          <img
            className="absolute top-[614px] -translate-x-[100px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[670px] -translate-x-[535px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-36">
              October 20th - 31st
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Project Grading
            </p>
          </div>

          {/* Step 8 */}
          <img
            src={num8}
            alt="step 8"
            className="absolute top-[540px] translate-x-[220px]"
          />
          <img
            className="absolute top-[614px] translate-x-[220px]"
            src={pinkarrow}
            alt=""
          />
          <div className="mt-[670px] -translate-x-[215px] text-start">
            <p className="text-[#fc4f7b] absolute text-[14px] w-28">
              November 1st
            </p>
            <p className="text-white absolute text-[18px] w-40 mt-5">
              Awards Ceremony
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
