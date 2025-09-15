import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/QueenAritCircleLogo.webp";

import glowbg from "../assets/hackglowbg.webp";
import topbg from "../assets/topbg.svg";
import Participate from "../components/Participate";
import DateTimelineRework from "../components/DateTimelineRework";
import Reason from "../components/Reason";
import AwardsAndRegRework from "../components/AwardsAndRegRework";
import HackathonTestimonial from "../components/HackathonTestimonial";
import HackathonFooterRework from "../components/HackathonFooterRework";
import RegularParticipate from "../components/RegularParticipate";

export default function HackathonPageRework() {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIdFor = (label) => {
    switch (label) {
      case "Mentorship":
        return "offer-section";
      case "Purpose":
        return "purpose";
      case "Timeline":
        return "timeline";
      case "Recognition":
        return "recognition";
      case "Reviews":
        return "testimonial";
      default:
        return "";
    }
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const useReveal = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, inView];
  };
  return (
    <>
      <div className="bg-[#0e0e0e]">
        {/* Header */}
        <header className="bg-transparent text-[#BBBABA] mb-14 pt-4 lg:mb-10 px-5 md:px-10 relative z-50">
          <div className="flex justify-between items-center mobile:max-lg:mb-8 mb-[400px] xl:mb-[450px]">
            <Link to="/">
              <img className="h-16" src={Logo} alt="logo" />
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
            <div className="hidden lg:flex gap-7 xl:gap-10 text-sm lg:text-[15px] xl:text-[19px] items-center tracking-wide">
              {[
                "Timeline",
                "Purpose",
                "Recognition",
                "Reviews",
              ].map((item, idx) => (
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
              ))}
              <button
                onClick={() =>
                  (window.location.href =
                    "https://x.com/thequeenarit/status/1965465279506645381?s=46&t=U1cHbbVtEG7-OXvrKgX5-A")
                }
                className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white xl:text-[20px] flex justify-center tracking-wide py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90"
              >
                Info Session
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="lg:hidden bg-[#0e0e0e] mobile:max-lg:mb-8 absolute left-0 w-full shadow-lg z-40 mobile:max-lg:-mt-8"
              >
                <div className="flex flex-col gap-5 text-[20px] text-center py-8 tracking-wide">
                  {[
                    { name: "Timeline", target: "timeline" },
                    { name: "Purpose", target: "purpose" },
                    { name: "Recognition", target: "recognition" },
                    { name: "Reviews", target: "testimonial" },
                  ].map((link, idx) => (
                    <ScrollLink
                      key={idx}
                      to={link.target}
                      smooth={true}
                      duration={600}
                      onClick={() => setIsOpen(false)}
                    >
                      <p className="hover:cursor-pointer">{link.name}</p>
                    </ScrollLink>
                  ))}
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://x.com/thequeenarit/status/1965465279506645381?s=46&t=U1cHbbVtEG7-OXvrKgX5-A")
                    }
                    className="bg-[#fc4f7b] flex items-center text-white py-2 px-6 rounded-full font-semibold tracking-wide hover:opacity-90 transition mx-auto"
                  >
                    Info Session
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Title Section */}
        {/* {(() => {
              const [ref, inView] = useReveal();
              return (
                <div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={revealVariant}
                  className="mobile:max-lg:hidden text-white tracking-wide lg:mb-[400px]"
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    All You Need To Know About
                  </p>
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 lg:mb-12 text-[#fc4f7b] mt-[10px]">
                    October Hackathon 2025
                  </p>
                </div>
              );
            })()} */}

        {/* Mobile Title */}
        {/* {(() => {
              const [ref, inView] = useReveal();
              return (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={revealVariant}
                  className="lg:hidden tracking-wide"
                >
                  <p className="text-4xl text-white sm:text-4xl md:text-5xl">All You Need To</p>
                  <p className="text-4xl text-white sm:text-4xl md:text-5xl my-2">
                    Know About <span className="text-[#fc4f7b]">October</span>
                  </p>
                  <p className="text-4xl sm:text-4xl md:text-5xl text-[#fc4f7b]">
                    Hackathon 2025
                  </p>
                </motion.div>
                
              );
            })()} */}

        {/* Hero Section */}
        {(() => {
          const [ref, inView] = useReveal();
          return (
            <div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariant}
              className="flex flex-col bg-[#0e0e0e] mobile:max-lg:pb-20 lg:h-[1px] mobile:max-lg:gap-2 px-4 lg:px-[15px] justify-center items-center"
            >
              <img
                className="absolute w-full mobile:max-lg:mt-28 h-[1100px]"
                src={topbg}
                alt=""
              />
              <div className="text-start text-white flex flex-col justify-center font-light max-w-[1200px] items-center mt-6 lg:mt-10 mobile:max-lg:mt-0 lg:mb-[20px]">
                <div className="border-2 rounded-lg flex mobile:max-lg:flex-col justify-between items-center mobile:max-lg:h-[540px] h-[470px] mobile:max-xxm:w-[355px] xxm:max-lg:w-[400px] w-[1100px] xl:mt-10 bg-[#0e0e0e] border-[#0e0e0e] z-30 px-20 mb-8 xl:mb-10  mobile:max-lg:px-5 mobile:max-lg:py-5 shadow-[0_8px_20px_(#0E1F32)]">
                  <div className="text-[#fc4f7b] mobile:max-lg:tracking-wider tracking-wide font-bold mobile:max-lg:text-5xl mobile:max-lg:mb-10 text-7xl mobile:max-lg:flex mobile:max-lg:flex-col mobile:max-lg:justify-center">
                    <p className="text-white text-[17px] font-light mb-10 mobile:max-lg:text-center">
                      About
                    </p>
                    <p className="mobile:max-lg:text-center">OCTOBER</p>
                    <p className="mt-3 mobile:max-lg:text-center">HACKATHON</p>

                    <button
                    onClick={() =>
                      (window.location.href =
                        "https://x.com/thequeenarit/status/1965465279506645381?s=46&t=U1cHbbVtEG7-OXvrKgX5-A")
                    }
                    className="bg-[#fc4f7b] mt-5 lg:mt-8 hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white text-lg xl:text-[20px] flex justify-center tracking-wide py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90"
                  >
                    Listen To Info Session
                  </button>
                  </div>

            

                  <div className="gap-60">
                    {/* Small circle 1 */}
                    <motion.div
                      className="mobile:max-lg:h-10  mobile:max-lg:w-10 h-16 w-16 rounded-full translate-x-60 translate-y-16"
                      style={{
                        background:
                          "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
                      }}
                      animate={{ y: [0, -20, 0] }}
                      transition={{
                        duration: 1.8, // different bounce time
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Big circle */}
                    <motion.div
                      className=" mobile:max-lg:h-28 mobile:max-lg:w-28 h-44 w-44 ml-20 rounded-full translate-x-80 translate-y-20"
                      style={{
                        background:
                          "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
                      }}
                      animate={{ y: [0, -30, 0] }} // bounce up & down
                      transition={{
                        duration: 2.5, // bounce speed
                        repeat: Infinity, // loop forever
                        ease: "easeInOut",
                      }}
                    />

                    {/* Small circle 2 */}
                    <motion.div
                      className="mobile:max-lg:h-10  mobile:max-lg:w-10 h-16 w-16 rounded-full translate-x-60 -translate-y-52"
                      style={{
                        background:
                          "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
                      }}
                      animate={{ y: [0, -25, 0] }}
                      transition={{
                        duration: 2.2, // another timing
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-[19px] lxl:text-[24px] max-w-[700px] tracking-wide leading-relaxed lg:leading-[2.4rem]">
                  Welcome to the central hub for our upcoming community
                  hackathon! This is where you’ll find all the key dates,
                  details, and updates to guide you from registration all the
                  way to the awards ceremony.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] max-w-[700px] tracking-wide mt-5 leading-relaxed lg:leading-[2.4rem]">
                  Our hackathon is designed to give early-career developers,
                  designers, and product managers the closest possible
                  simulation of real-world software ideation, development, and
                  deployment. If you’ve been looking for a way to sharpen your
                  skills, collaborate in teams, and bring an app concept to
                  life,{" "}
                  <span className="text-[#ff668d] font-semibold">
                    this is it!
                  </span>
                </p>
              </div>
            </div>
          );
        })()}
      </div>

      <div>
        <RegularParticipate />
      </div>

      {/* <div className="">
        <Participate />
      </div> */}

      <div id="timeline">
        <DateTimelineRework />
      </div>

      <div id="purpose">
        <Reason />
      </div>

      <div id="recognition">
        <AwardsAndRegRework />
      </div>

      <div id="testimonial">
        <HackathonTestimonial />
      </div>

      <div>
        <HackathonFooterRework />
      </div>
    </>
  );
}
