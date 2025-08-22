import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import flash from "../assets/flash.png";
import Logo from "../assets/QueenAritCircleLogo.svg";
import glow from "../assets/inner glow.png";
import mobileglow from "../assets/inner glow mobile.png";
import arrow from "../assets/arrow-right.png";
import leftimg from "../assets/Group left.png";
import rightimg from "../assets/Group right.png";
import topimg from "../assets/Hero circlar image horizontalTop.png";
import bottomimg from "../assets/Hero circlar image horizontalBottom.png";
import mobiletopimg from "../assets/Hero circlar image Topmobile.png";
import mobilebottomimg from "../assets/Hero circlar image Bottommobile.png";
import xsmobiletopimg from "../assets/Hero circlar image Topxsmobile.png";
import xsmobilebottomimg from "../assets/Hero circlar image Bottomxsmobile.png";

import './LandingPage.css'




export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const heading = "FROM LEARNING".split(
    " "
  );

  const earn = "TO EARNING!".split(
    " "
  );

  return (
    <div className="relative w-full min-h-screen bg-[#0E0E0E] inter">
      {/* Glow Background*/}
      <div
        className="absolute mobile:max-lg:hidden inset-0 w-full lg:max-xl:h-[800px] xl:h-[920px] bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${glow})` }}
      />
      <div
        className="absolute inset-0 w-full mt-32 lg:hidden bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${mobileglow})` }}
      />

      {/* Header */}
      <header className="sticky lg:static top-0 bg-[#0e0e0e] lg:bg-[#0E0E0E] text-[#BBBABA] px-5 md:px-[15px] z-20">
        <div className="flex justify-between items-center mb-8">
          <img className="h-16" src={Logo} alt="logo" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl focus:outline-none"
          >
            {isOpen ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-7 xl:gap-10 text-sm lg:text-[15px] xl:text-[19px] items-center">
            {["About", "Mentorship", "Testimonials", "Programmes", "FAQ"].map(
              (item, idx) => (
                <p
                  key={idx}
                  className="relative cursor-pointer text-[#BBBABA] group hover:text-white transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
                </p>
              )
            )}
            <button className="bg-[#fc4f7b] text-white xl:text-[20px] flex justify-center py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90 transition">
              Join it’s Free
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-[#0e0e0e] lg:hidden z-20 overflow-hidden"
            >
              <div className="flex flex-col gap-5 mobile:max-xxm:text-[21px] xxm:max-lg:text-[25px] text-center pb-8">
                <p className="hover:cursor-pointer">About</p>
                <p className="hover:cursor-pointer">Mentorship</p>
                <p className="hover:cursor-pointer">Testimonials</p>
                <p className="hover:cursor-pointer">Programmes</p>
                <p className="hover:cursor-pointer">FAQ</p>
                <button className="bg-[#fc4f7b] flex items-center text-white py-3 px-[32px] rounded-full font-semibold hover:opacity-90 transition max-w-60 mx-auto">
                  Join it’s Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-9 lg:max-blg:gap-0 mx-[15px] relative z-10">
        {/* Left Image */}
        <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
        >
            <img className="h-auto mobile:max-lg:hidden lg:max-xl:h-[510px] xl:h-full  rotate-90 lg:rotate-0" src={leftimg} alt="left hero" />
            <img className="h-auto mobile:max-md:hidden md:max-lg:max-h-full lg:hidden lg:rotate-0" src={topimg} alt="left hero" />
            <img className="h-auto mobile:max-sm:hidden sm:max-md:max-h-full md:hidden lg:rotate-0" src={mobiletopimg} alt="left hero" />
            <img className="h-auto moblie:max-sm:max-h-full sm:hidden lg:rotate-0" src={xsmobiletopimg} alt="left hero" />
        </motion.div>

        {/* Center Content */}
        <div className="text-center flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mt-1 md:mt-10"
                >
                <div className="rounded-full mobile:max-xsm:py-[13px] xsm:max-lg:py-4 lg:py-[8px] xl:py-[11px] px-4 flex justify-center items-center mobile:max-xxm:gap-2 xxm:gap-3 md:gap-2">
                    <img src={flash} alt="lightening img" className="mobile:max-xsm:h-[21px] xsm:max-lg:h-[23px] lg:h-[18px] xl:h-[22px]" />
                    <p className="text-[#D9D9D9] mobile:max-xsm:text-[15px] mobile:max-xsm:tracking-wide xsm:max-lg:text-[18px] lg:text-[14px] xl:text-[19px]">
                    Tech Career Empowerment
                    </p>
                </div>
            </motion.div>

            <div className="mobile:max-xxm:ml-[11px] xxm:ml-2 mobile:max-xxm:mt-5 xxm:max-lg:mt-6 lg:mt-3">
            <motion.p
                className="text-[#E3E3E3] mobile:max-xxm:text-[42px] xxm:max-sm:text-[50px] sm:max-lg:text-7xl lg:text-[55px] xl:max-lxl:text-[80px] lxl:text-[85px] font-semibold tracking-wide flex-wrap justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
                }}
            >
                {heading.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="mr-2"
                >
                    {word}
                </motion.span>
                ))}
            </motion.p>

            <motion.p
                className="text-[#E3E3E3] mobile:max-xxm:text-[42px] xxm:max-sm:text-[50px] sm:max-lg:text-7xl lg:text-[55px] xl:max-lxl:text-[80px] lxl:text-[85px] font-semibold tracking-wide mobile:max-sm:-mt-4 sm:max-lg:mt-2 lg:max-xl:-mt-5 xl:-mt-8 flex-wrap justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
                }}
            >
                {earn.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="mr-2"
                >
                    {word}
                </motion.span>
                ))}
            </motion.p>

            <motion.p
                className="text-[#CECECE] mobile:max-xxm:-ml-[1px] mobile:max-xsm:text-base mobile:max-xxm:mx-3 xsm:max-sm:text-[23px] sm:max-lg:text-[24px] lg:text-[15px] xl:text-[18px] lg:max-w-[550px] mx-auto mobile:max-sm:mt-1 leading-8 sm:max-lg:mt-4 lg:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
            >
                Strengthen the skills that actually propel your career.
            </motion.p>
            </div>

            {/* CTA Button */}
            <motion.button
            className="bg-[#fc4f7b] text-[#110D0D] mobile:max-xsm:py-[10px] xsm:max-lg:py-5 lg:py-2 xl:py-3 mobile:max-xsm:px-7 xsm:max-lg:px-9 lg:px-5 xl:px-6 rounded-full font-semibold hover:opacity-90 flex justify-center items-center mobile:max-xxm:gap-3 xxm:max-lg:gap-4 lg:gap-3 mx-auto mobile:max-lg:mt-6 lg:mt-6 xl:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
            >
            <p className="mobile:max-xsm:text-[18px] xsm:max-lg:text-[25px] lg:text-[16px] xl:text-[19px] text-white">Join the Circle Now</p>
            <div className="mt-[2px] bg-white p-[5px] xl:p-[6px] rounded-full">
                <img className="xxm:max-lg:h-7 xl:h-6" src={arrow} alt="arrow" />
            </div>
            </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
        >
            <img className="h-auto mobile:max-lg:hidden lg:h-[510px] xl:h-full md:w-full rotate-90 lg:rotate-0" src={rightimg} alt="right hero" />
            <img className="h-auto mobile:max-md:hidden md:max-lg:max-h-full lg:hidden md:w-full lg:rotate-0" src={bottomimg} alt="left hero" />
            <img className="h-auto mobile:max-sm:hidden sm:max-md:max-h-full md:hidden lg:rotate-0" src={mobilebottomimg} alt="left hero" />
            <img className="h-auto moblie:max-sm:max-h-full sm:hidden lg:rotate-0" src={xsmobilebottomimg} alt="left hero" />


        </motion.div>
      </div>
      <div className="mobile:max-xxm:h-20 h-48 ">

      </div>

    </div>
  );
}


