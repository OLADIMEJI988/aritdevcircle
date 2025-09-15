import React from "react";
import subtleglow from "../assets/subtleglow.webp";
import pplgrp from "../assets/pplgrp.svg";
import arrow from "../assets/arrow-right.svg";

export default function RegularParticipate() {
  return (
    <div className="bg-[#0e0e0e] lg:pb-5 pb-10 lg:pr-12 mobile:max-lg:pt-3 pt-[480px] xl:pt-[580px]">
      <img
        className="absolute right-0 mt-28 xl:-mt-32 h-full object-contain z-0"
        src={subtleglow}
        alt=""
      />
      <div className="flex justify-center items-center mobile:max-lg:flex-col h-[700px] mobile:max-lg:h-auto">
        <p className="lg:hidden text-4xl font-semibold text-white">
          Who Can <span className="text-[#FF4F76]">Participate</span>
        </p>

        <div className="flex justify-center items-center">
          <img
            className="max-w-[700px] mobile:max-lg:w-[370px]"
            src={pplgrp}
            alt=""
          />
        </div>

        <div className="text-white text-start mobile:max-lg:flex mobile:max-lg:flex-col mobile:max-lg:justify-center mobile:max-lg:items-center lg:-ml-5">
          <p className="text-5xl mobile:max-lg:hidden font-semibold">
            Who Can <span className="text-[#FF4F76]">Participate</span>
          </p>

          <p className="tracking-wide mobile:max-lg:text-[18px] mobile:max-lg:text-center lg:w-[420px] mobile:max-lg:mx-[10px] mt-9 mobile:max-lg:-mt-4 leading-[2.3] font-light">
            Registration for this current hackthon has officially{" "}
            <span className="text-[#FF4F76]">ended</span> but if you desired to
            be part of the next hackathon which comes up in April 2026, join our
            community to get timely updates and early access.
          </p>

          <button
            onClick={() =>
              (window.location.href = "https://proxy.nas.io/queenaritcircle")
            }
            className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] transition text-white mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 
                            mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold hover:opacity-90 flex items-center gap-3 mt-10"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lg tracking-wide">Join the Circle Now</p>
            <div
              onClick={() =>
                (window.location.href = "https://proxy.nas.io/queenaritcircle")
              }
              className="bg-white p-[5px] rounded-full"
            >
              <img className="h-6" src={arrow} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
