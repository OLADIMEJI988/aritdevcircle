import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import flash from "../assets/flash.webp";
import Logo from "../assets/QueenAritCircleLogo.webp";
import glow from "../assets/inner glow.webp";
import mobileglow from "../assets/inner glow mobile.webp";
import arrow from "../assets/arrow-right.webp";
import leftimg from "../assets/Group left.webp";
import rightimg from "../assets/Group right.webp";
import xsmobiletopimg from "../assets/new group image 4.webp";
import xsmobilebottomimg from "../assets/new group image.webp";

import './LandingPage.css'
import Offer from "../components/Offer";
import About from "../components/About";
import Events from "../components/Events";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const heading = "FROM LEARNING".split(" ");
  const earn = "TO EARNING!".split(" ");

  // maps menu label -> id used on page
  const sectionIdFor = (label) => {
    switch (label) {
      case "About":
        return "about-section";
      case "Mentorship":
        return "offer-section";
      case "Programmes":
        return "events-section";
      case "Testimonials":
        return "testimonials"; // placeholder
      case "FAQ":
        return "faq"; // placeholder
      default:
        return "";
    }
  };

  return (
    <>
      <div className="antialiased relative w-full mobile:max-lg:pb-36 xl:pb-24 lg:max-xl:h-[700px] bg-[#0E0E0E] inter">
        {/* Glow Background*/}
        <div
          className="absolute mobile:max-lg:hidden inset-0 w-full xl:h-[965px] bg-no-repeat bg-center bg-cover pointer-events-none"
          style={{ backgroundImage: `url(${glow})` }}
        />
        <div
          className="absolute inset-0 w-full mt-32 lg:hidden bg-no-repeat bg-center bg-cover pointer-events-none"
          style={{ backgroundImage: `url(${mobileglow})` }}
        />

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[129px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

        {/* Header */}
        <header className="bg-[#0e0e0e] lg:bg-transparent text-[#BBBABA] pt-3 px-5 md:px-[15px] relative z-50">
          <div className="flex justify-between items-center mb-8">
            <Link to="/">
              <img className="h-16 " src={Logo} alt="logo" />
            </Link>

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
                    <ScrollLink
                      to={sectionIdFor(item)}
                      smooth={true}
                      duration={600}
                      className="inline-block"
                    >
                      {item}
                    </ScrollLink>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
                  </p>
                )
              )}
              <button className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white xl:text-[20px] flex justify-center py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90">
                Join it’s Free
              </button>
            </div>
          </div>

          {/* Mobile Dropdown (overlay) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden absolute left-0 w-full bg-[#0e0e0e] shadow-lg z-40"
              >
                <div className="flex flex-col gap-5 text-[20px] text-center py-6">
                  <ScrollLink to="about-section" smooth={true} duration={600} onClick={() => setIsOpen(false)}>
                    <p className="hover:cursor-pointer">About</p>
                  </ScrollLink>

                  <ScrollLink to="offer-section" smooth={true} duration={600} onClick={() => setIsOpen(false)}>
                    <p className="hover:cursor-pointer">Mentorship</p>
                  </ScrollLink>

                  <ScrollLink to="testimonials" smooth={true} duration={600} onClick={() => setIsOpen(false)}>
                    <p className="hover:cursor-pointer">Testimonials</p>
                  </ScrollLink>

                  <ScrollLink to="events-section" smooth={true} duration={600} onClick={() => setIsOpen(false)}>
                    <p className="hover:cursor-pointer">Programmes</p>
                  </ScrollLink>

                  <ScrollLink to="faq" smooth={true} duration={600} onClick={() => setIsOpen(false)}>
                    <p className="hover:cursor-pointer">FAQ</p>
                  </ScrollLink>

                  <button className="bg-[#fc4f7b] flex items-center text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition mx-auto">
                    Join it’s Free
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-9 lg:max-blg:gap-11 blg:max-xl:gap-20 mx-[15px] relative z-10">
          {/* Left Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
          >
            <img className="h-auto mobile:max-lg:hidden lg:max-xl:h-[510px] xl:h-full  rotate-90 lg:rotate-0" src={leftimg} alt="left hero" />
            <img className="h-auto mobile:max-lg:max-h-full lg:hidden lg:rotate-0" src={xsmobiletopimg} alt="left hero" />
          </motion.div>

          {/* Center Content */}
          <div className="text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mt-1 md:mt-10 hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition"
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
                    transition={{ duration: 0.4 }}
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
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
                }}
              >
                {earn.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
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
              className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-[#110D0D] mobile:max-xsm:py-[10px] xsm:max-lg:py-5 lg:py-2 xl:py-3 mobile:max-xsm:px-7 xsm:max-lg:px-9 lg:px-5 xl:px-6 rounded-full font-semibold hover:opacity-90 flex justify-center items-center mobile:max-xxm:gap-3 xxm:max-lg:gap-4 lg:gap-3 mx-auto mobile:max-lg:mt-[18px] lg:mt-6 xl:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
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
            <img className="h-auto mobile:max-lg:max-h-full lg:hidden md:w-full lg:rotate-0" src={xsmobilebottomimg} alt="left hero" />
          </motion.div>
        </div>

      </div>

      {/* Sections with IDs - added scroll-mt so react-scroll and anchors land exactly where i want */}
      <div id="offer-section" className="scroll-mt-[80px]">
        <Offer />
      </div>

      <div id="about-section" className="scroll-mt-[80px]">
        <About />
      </div>

      <div id="events-section" className="scroll-mt-[80px]">
        <Events />
      </div>

      {/* placeholders for ids referenced by menus - kept them for later */}
      <div id="testimonials" className="scroll-mt-[80px]" />
      <div id="faq" className="scroll-mt-[80px]" />
    </>
  );
}
