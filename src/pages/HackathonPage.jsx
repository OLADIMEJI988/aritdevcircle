import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../assets/QueenAritCircleLogo.webp";
import hackathonimg from "../assets/hackathonimg.webp";
import purposeimg from "../assets/purposeimg.webp";
import sideglow from "../assets/Glow.png";

import DateTimeline from "../components/DateTimeline";
import AwardsAndReg from "../components/AwardsAndReg";
import WhoCanJoin from "../components/WhoCanJoin";
import HackathonTestimonial from "../components/HackathonTestimonial";
import ApplyNow from "../components/ApplyNow";
import HackathonFooter from "../components/HackathonFooter";

export default function HackathonPage() {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIdFor = (label) => {
    switch (label) {
      case "Mentorship":
        return "offer-section";
      case "Purpose":
        return "purpose";
      case "Dates":
        return "dates";
      case "Recognition":
        return "recognition";
      case "Who's Eligible":
        return "who's_eligible";
      case "Reviews":
        return "testimonial";
      case "Register":
        return "register";
      default:
        return "";
    }
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const useReveal = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, inView];
  };

  return (
    <>
      <div
        className="relative bg-[#0E0E0E] text-white h-auto pt-3 font-semibold"
        style={{
          backgroundImage: `url(${sideglow})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "50% auto",
        }}
      >
        {/* Header */}
        <header className="bg-transparent text-[#BBBABA] mb-14 lg:mb-10 px-5 md:px-10 relative z-50">
          <div className="flex justify-between items-center mb-8">
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
                "Dates",
                "Purpose",
                "Recognition",
                "Who's Eligible",
                "Testimonial",
                "Register",
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
                  (window.location.href = "https://proxy.nas.io/queenaritcircle")
                }
                className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white xl:text-[20px] flex justify-center tracking-wide py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90"
              >
                Join it’s Free
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
                className="lg:hidden absolute left-0 w-full bg-[#0e0e0e] shadow-lg z-40 mobile:max-lg:-mt-8"
              >
                <div className="flex flex-col gap-5 text-[20px] text-center py-8 tracking-wide">
                  {[
                    { name: "Dates", target: "dates" },
                    { name: "Purpose", target: "purpose" },
                    { name: "Recognition", target: "recognition" },
                    { name: "Who's Eligible", target: "who's_eligible" },
                    { name: "Reviews", target: "testimonial" },
                    { name: "Register", target: "register" },
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
                        "https://proxy.nas.io/queenaritcircle")
                    }
                    className="bg-[#fc4f7b] flex items-center text-white py-2 px-6 rounded-full font-semibold tracking-wide hover:opacity-90 transition mx-auto"
                  >
                    Join it’s Free
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Title Section */}
        {(() => {
          const [ref, inView] = useReveal();
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariant}
              className="mobile:max-lg:hidden tracking-wide lxl:mb-28"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                All You Need To Know About
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 lg:mb-12 text-[#fc4f7b] mt-[10px]">
                October Hackathon 2025
              </p>
            </motion.div>
          );
        })()}

        {/* Mobile Title */}
        {(() => {
          const [ref, inView] = useReveal();
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariant}
              className="lg:hidden tracking-wide"
            >
              <p className="text-4xl sm:text-4xl md:text-5xl">All You Need To</p>
              <p className="text-4xl sm:text-4xl md:text-5xl my-2">
                Know About <span className="text-[#fc4f7b]">October</span>
              </p>
              <p className="text-4xl sm:text-4xl md:text-5xl mb-10 text-[#fc4f7b]">
                Hackathon 2025
              </p>
            </motion.div>
          );
        })()}

        {/* Hero Section */}
        {(() => {
          const [ref, inView] = useReveal();
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariant}
              className="flex flex-col lg:flex-row lg:h-[430px] mobile:max-lg:gap-2 gap-9 px-4 lg:px-[15px] justify-center items-center"
            >
              <div className="w-full lg:w-[1050px]">
                <img
                  className="w-full rounded-2xl object-cover"
                  src={hackathonimg}
                  alt=""
                />
              </div>

              <div className="text-start flex flex-col justify-center h-full lg:w-[800px] mt-6 lg:mt-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-thin tracking-wide leading-relaxed lg:leading-8">
                  Welcome to the central hub for our upcoming community hackathon!
                  This is where you’ll find all the key dates, details, and updates
                  to guide you from registration all the way to the awards ceremony.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-thin tracking-wide mt-5 leading-relaxed lg:leading-8">
                  Our hackathon is designed to give early-career developers,
                  designers, and product managers the closest possible simulation of
                  real-world software ideation, development, and deployment.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-thin tracking-wide mt-5 leading-relaxed lg:leading-8">
                  If you’ve been looking for a way to sharpen your skills, collaborate
                  in teams, and bring an app concept to life,{" "}
                  <span className="text-[#ff668d] font-bold">this is it!</span>
                </p>
              </div>
            </motion.div>
          );
        })()}

        <div id="who's_eligible" className="scroll-mt-[80px]">
          <WhoCanJoin />
        </div>

        <div id="dates" className="scroll-mt-[80px] mb-[80px] lg:mb-[105px]">
          <DateTimeline />
        </div>

        <div id="register" className="scroll-mt-[80px]">
          <ApplyNow />
        </div>

        {/* Purpose Section */}
        {(() => {
          const [ref, inView] = useReveal();
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariant}
            >
              <p
                id="purpose"
                className="text-4xl pt-2 lg:text-5xl mt-20 lg:mt-[80px] mobile:max-xxm:mt-32 xxm:max-lg:mt-0 leading-normal mb-8 md:mb-10 px-4 tracking-wide"
              >
                Purpose Of The{" "}
                <span className="text-[#fc4f7b]">Hackathon</span>
              </p>

              <div className="flex flex-col lg:flex-row lg:h-[430px] px-4 lg:px-[15px] mobile:max-lg:gap-2 gap-8 justify-center items-center">
                <div className="w-full lg:w-[800px] flex justify-center">
                  <img
                    className="w-full max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] object-cover rounded-2xl"
                    src={purposeimg}
                    alt=""
                  />
                </div>

                <div className="text-start w-full lg:w-[800px] mt-6 lg:mt-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide">
                    The purpose of the hackathon is to bridge the gap between theory
                    and practice. Many early career professionals know how to code,
                    design, or manage but haven't yet worked in a fast-paced,
                    cross-functional team environment where real products are built.
                    By participating you will:
                  </p>
                  <div className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide mt-5 space-y-3">
                    <p className="flex">
                      <span className="-mt-[5px] mr-2 font-bold">.</span>
                      Collaborate with developers, designers and product managers in
                      a balanced team.
                    </p>
                    <p className="flex">
                      <span className="-mt-[5px] mr-2 font-bold">.</span>
                      Experience the full life cycle of product development from
                      concept to delivery.
                    </p>
                    <p className="flex">
                      <span className="-mt-[5px] mr-2 font-bold">.</span>
                      Learn to manage time, prioritize features and work with real
                      world constraints.
                    </p>
                    <p className="flex">
                      <span className="-mt-[5px] mr-2 font-bold">.</span>
                      Build portfolio worthy experience to showcase to employers and
                      clients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}

        <div id="recognition" className="scroll-mt-[80px]">
          <AwardsAndReg />
        </div>

        <div id="testimonial" className="scroll-mt-[80px]">
          <HackathonTestimonial />
        </div>

        <div>
          <HackathonFooter />
        </div>
      </div>
    </>
  );
}
