import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import flash from "../assets/flash.png";
import Logo from "../assets/QueenAritCircleLogo.svg";
import glow from "../assets/inner glow.png";
import arrow from "../assets/arrow-right.png";
import leftimg from "../assets/Hero circular image left.png";
import rightimg from "../assets/Hero circlar image right.png";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const heading = "Transform Your Tech Skills Into A Career That Pays.".split(
    " "
  );

  return (
    <div className="relative w-full min-h-screen bg-[#0E0E0E]">
      {/* Glow Background*/}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${glow})` }}
      />

      {/* Header */}
      <header className="sticky md:static top-0 bg-[#0e1319] py-1 md:py-0 md:bg-[#0E0E0E] text-[#BBBABA] px-5 md:px-9 z-20">
        <div className="flex justify-between items-center">
          <img className="h-12 md:h-16" src={Logo} alt="logo" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? (
              <i className="fa-solid fa-x fa-xs"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xs"></i>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 xl:gap-10 text-sm md:text-[15px] xl:text-[19px] items-center">
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
            <button className="bg-[#fc4f7b] text-white xl:text-[19px] flex justify-center py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90 transition">
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
              className="absolute top-full left-0 w-full bg-[#0e1319] md:hidden z-20 overflow-hidden"
            >
              <div className="flex flex-col gap-5 text-[16px] text-center py-8">
                <p className="hover:cursor-pointer">About</p>
                <p className="hover:cursor-pointer">Mentorship</p>
                <p className="hover:cursor-pointer">Testimonials</p>
                <p className="hover:cursor-pointer">Programmes</p>
                <p className="hover:cursor-pointer">FAQ</p>
                <button className="bg-[#fc4f7b] flex items-center text-white py-2 px-[29px] rounded-full font-semibold hover:opacity-90 transition max-w-48 mx-auto">
                  Join it’s Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="flex flex-col items-center md:flex-row mx-9 justify-between mt-8 relative z-10">
        {/* Left Image */}
        <motion.div
            className="mr-0 md:mr-4 -mt-[70px] md:mt-0 order-first md:order-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
        >
            <img className="h-[370px] md:h-[510px] xl:h-full rotate-90 md:rotate-0" src={leftimg} alt="left hero" />
        </motion.div>

        {/* Center Content */}
        <div className="-mt-20 md:mt-0 text-center order-2 md:order-none">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mt-1 md:mt-10"
                >
                <div className="rounded-full py-1 px-3 flex justify-center items-center gap-1">
                    <img src={flash} alt="lightening img" className="h-[16px] md:h-[18px]" />
                    <p className="text-[#D9D9D9] text-[13px] xl:text-[16px]">
                    From Learning to Earning
                    </p>
                </div>
            </motion.div>

            <div className="max-w-[95%] md:max-w-[680px] xl:max-w-[820px] mx-auto mt-5 md:mt-4 xl:mt-6">
            <motion.p
                className="text-[#E3E3E3] text-[35px] sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-snug md:leading-[60px] tracking-normal flex flex-wrap justify-center"
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
                className="text-[#BBBABA] text-[15px] md:text-[13px] xl:text-[16px] max-w-[550px] mx-auto mt-4 xl:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
            >
                An Authentic community empowering early career tech professionals to thrive through mentorship, real world challenges and opportunities.
            </motion.p>
            </div>

            {/* CTA Button */}
            <motion.button
            className="bg-[#fc4f7b] text-[#110D0D] py-2 px-5 rounded-full font-semibold hover:opacity-90 flex justify-center items-center gap-[14px] md:gap-3 mx-auto mt-6 md:mt-5 xl:mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3, ease: "easeOut" }}
            >
            <p className="text-[16px] xl:text-[18px] text-white">Join the Circle Now</p>
            <div className="mt-[2px] bg-white p-[5px] rounded-full">
                <img className="h-5" src={arrow} alt="arrow" />
            </div>
            </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
            className="ml-0 -mt-16 md:mt-0 md:ml-4 flex justify-center items-center order-last md:order-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.4, ease: "easeOut" }}
        >
            <img className="h-[370px] md:h-[510px] xl:h-full rotate-90 md:rotate-0" src={rightimg} alt="right hero" />
        </motion.div>
      </div>

    </div>
  );
}
