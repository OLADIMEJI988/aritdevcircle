import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import flash from "../assets/flash.svg";
import arrow from "../assets/arrow-right.svg";
import HackathonRightImg from "./HackathonRightImg";
import HackathonLeftImg from "./HackathonLeftImg";


export default function HackathonHero() {
  const navigate = useNavigate();

  const heading = "2025 OCTOBER".split(" ");
  const earn = "HACKATHON".split(" ");
  
  return (
    <>

      <div className="flex flex-col lg:flex-row items-center h-full gap-9 justify-center mobile:max-lg:-mt-10 mobile:max-lg:-mb-5 lg:-mt-32 xl:mt-0 z-10">

        <HackathonLeftImg />

        {/* Center Content */}
        <div className="mobile:max-lg:order-2 text-center flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mobile:max-md:-mt-[5px] md:mt-10 hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition z-20" >
            <div className="rounded-full flex justify-center items-center gap-2 px-4 py-2">
              <img src={flash} alt="lightening img" className="h-[19px]" />
              <p className="text-white text-[16px] tracking-wide">Are you ready?</p>
            </div>
          </div>

          {/* Headings */}
          <motion.p
            className="text-[#E3E3E3] text-[38px] xsm:max-lg:text-5xl lg:text-[55px] xl:text-[80px] font-semibold tracking-wide flex-wrap justify-center mt-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.3 },
              },
            }}
          >
            {heading.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            className="text-[#E3E3E3] -mt-3 xsm:max-lg:mt-2 text-[38px] xsm:max-lg:text-5xl lg:text-[55px] xl:text-[80px] font-semibold tracking-wide flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.5 },
              },
            }}
          >
            {earn.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-[#CECECE] text-lg lg:text-[18px] max-w-[550px] mt-2 lg:-mt-[1px] leading-8 mx-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: [0.25, 1, 0.5, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            Do you have what it takes to turn bold ideas into real-world solutions?
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={() => navigate("/hackathon")}
            className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] transition text-white mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 
                          mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold hover:opacity-90 flex items-center gap-3 mx-auto mt-4 lg:mt-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lg tracking-wide">Register Now</p>
            <div className="bg-white p-[5px] rounded-full">
              <img className="h-6" src={arrow} alt="arrow" />
            </div>
          </motion.button>
        </div>

        <HackathonRightImg />

      </div>
      
    </>
   
  );
}
