import React from "react";
import { motion } from "framer-motion";
import flash from "../assets/flash.svg";
import arrow from "../assets/arrow-right.svg";
import leftimg from "../assets/Group left.webp";
import rightimg from "../assets/Group right.webp";
import xsmobiletopimg from "../assets/new group image 4.webp";
import xsmobilebottomimg from "../assets/new group image.webp";

export default function RegularHero() {
  const heading = "FROM LEARNING".split(" ");
  const earn = "TO EARNING!".split(" ");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-9 lg:max-blg:gap-11 blg:max-xl:gap-20 mx-[15px] relative z-10">
      <motion.div
        className="flex justify-center items-center min-h-[170px] lg:min-h-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Desktop left image */}
        <img
          className="h-auto mobile:max-lg:hidden lg:max-xl:h-[510px] xl:h-full rotate-90 lg:rotate-0"
          src={leftimg}
          alt="left hero"
        />

        {/* Mobile top image */}
        <img
          className="h-auto mobile:max-lg:max-h-full lg:hidden md:w-full lg:rotate-0"
          src={xsmobiletopimg}
          alt="left hero"
        />
      </motion.div>

      {/* Center Content */}
      <div className="text-center flex flex-col items-center">
        {/* Badge */}
        <div className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mt-1 md:mt-10 hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition">
          <div className="rounded-full flex justify-center items-center gap-2 px-4 py-2">
            <img src={flash} alt="lightening img" className="h-[22px]" />
            <p className="text-white text-[16px]">Tech Career Empowerment</p>
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
          className="text-[#CECECE] text-lg lg:text-[18px] max-w-[550px] mx-auto mt-2 lg:-mt-[1px] leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: [0.25, 1, 0.5, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          Strengthen the skills that actually propel your career.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() =>
            (window.location.href = "https://proxy.nas.io/queenaritcircle")
          }
          className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] transition text-white mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 
                            mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold hover:opacity-90 flex items-center gap-3 mx-auto mt-4 lg:mt-7"
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
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        <img
          className="h-auto mobile:max-lg:hidden lg:h-[510px] xl:h-full md:w-full rotate-90 lg:rotate-0"
          src={rightimg}
          alt="right hero"
        />
        <img
          className="h-auto mobile:max-lg:max-h-full lg:hidden md:w-full lg:rotate-0"
          src={xsmobilebottomimg}
          alt="right hero"
        />
      </motion.div>
    </div>
  );
}
