import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import footerbg from "../assets/footerbg.png";
import innerglow from "../assets/footerbg.svg";
import innermobileglow from "../assets/footerglow.webp";
import twitter from "../assets/twitter.svg";
import Logo from "../assets/QueenAritCircleLogo.webp";
import backtotop from "../assets/backtotopimg.svg";
import topfloatingimgs from "../assets/topfloatingimgs.svg";
import bottomfloatingimgs from "../assets/bottomfloatingimgs.svg";

import ApplyCta from "./ApplyCta";
import ApplyNow from "./ApplyNow";

const sentence = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05, 
        delayChildren: i * 0.3, 
      },
    }),
  };
  
  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.35 },
    },
  };
  
  const AnimatedText = ({ text, highlight, className = "", delayIndex = 0 }) => {
    return (
      <motion.p
        className={`overflow-hidden pb-1 lg:pb-2 ${className}`}
        variants={sentence}
        custom={delayIndex}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {text.split("").map((char, index) => {
          const isHighlight =
            highlight && highlight.start <= index && index < highlight.end;
  
          return (
            <motion.span
              key={index}
              variants={letter}
              className={isHighlight ? "text-[#FA3E67]" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.p>
    );
  };
  


const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
};
  
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

export default function HackathonFooterRework() {
    const handleScroll = (id, offset = -20) => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
  
    return (
      <div className="relative bg-[#0E0E0E] mobile:max-lg:h-[89pc] lg:h-[1000px] overflow-hidden flex flex-col justify-between">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-[80px] md:h-[100px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-30" />
  
        {/* Footer background */}
        <img
          src={footerbg}
          alt="footer background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/85 z-10" />
  
        {/* Glow background */}
        <img
          className="absolute mobile:max-lg:hidden inset-0 w-full h-full object-cover z-20"
          src={innerglow}
          alt="Glow"
        />

        <img className="lg:hidden absolute mt-14 z-40 ml-[5vw] xxm:ml-[10vw]" src={topfloatingimgs} alt="" />
 
        <div className="absolute inset-0 pt-6 md:pt-16 mobile:max-lg:mt-48 flex justify-center z-30">
         <div className="space-y-[6px] text-white text-2xl lg:text-5xl font-medium">
            <AnimatedText
              text="Want To Know What's Next? "
              highlight={{ start: 12, end: 30 }}
            />
          </div>
        </div>
 
  
        {/* Text + CTA */}
        <div className="relative z-40 mobile:max-lg:pt-48 text-white mobile:max-ssm:mt-[90px] mt-[160px] text-center px-4">
          {/* Desktop Text view */}
          <div className="space-y-[6px] mobile:max-lg:hidden tracking-wide text-xl font-medium">
            <AnimatedText
              text="Click the link that matches your tech career path and register to join "
              highlight={{ start: 20, end: 28 }}
            />
            <AnimatedText text="the challenge. All further updates will be shared directly with" />
            <AnimatedText text="registered participants." />
          </div>

          {/* Mobile Text view */}
          <div className="space-y-[6px] lg:hidden tracking-wide text-lg font-light">
            <AnimatedText
              text="Click the link that matches your"
              highlight={{ start: 20, end: 28 }}
            />
            <AnimatedText
              text="tech career path and register to join "
            />
            <AnimatedText text="the challenge. All further updates" />
            <AnimatedText text="will be shared directly with" />
            <AnimatedText text="registered participants." />
          </div>

          <motion.div
                className="flex flex-col justify-center items-center mt-10 gap-6 mobile:max-lg:gap-7"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
            >
                <motion.div variants={itemVariants}>
                    <ApplyCta
                        role="Developers"
                        ctatext="Apply as dev"
                        link="https://forms.gle/KQL8Jx6qf89Xtart9"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <ApplyCta
                        role="Designers"
                        ctatext="Apply as designer"
                        link="https://forms.gle/VC3ydM9DeYqp6tWd8"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <ApplyCta
                        role="Product / Product Managers"
                        ctatext="Apply as PM"
                        link="https://forms.gle/TczgYJCTJf4MF6Jh6"
                    />
                </motion.div>
          </motion.div>

        <img className="lg:hidden absolute mt-14 z-40 -ml-2 xxm:max-lg:ml-5" src={bottomfloatingimgs} alt="" />


        </div>
  
        {/* Bottom section */}
        <div className="relative z-50 ">   {/* changed from absolute */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 gap-4 sm:gap-0">
            {/* Logo */}
            <motion.div>
              <Link to="/">
                <img className="h-12 mobile:max-sm:h-14 mobile:max-lg:mb-3 " src={Logo} alt="Logo" />
              </Link>
            </motion.div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mobile:max-sm:mt-1 mobile:max-sm:text-[16px] text-[12px] sm:text-[13px] lg:text-[15px] tracking-wider inter text-[#CECECE]">
                <div onClick={() => handleScroll("timeline", -1)} className="relative cursor-pointer group"> 
                    <AnimatedText text="Timeline" className="inline-block text-[#BBBABA] group-hover:text-white transition" /> <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span> 
                </div> 

                <div onClick={() => handleScroll("purpose", -20)} className="relative cursor-pointer group"> 
                    <AnimatedText text="Purpose" className="inline-block text-[#BBBABA] group-hover:text-white transition" /> <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span> 
                </div> 

                <div onClick={() => handleScroll("testimonial", -20)} className="relative cursor-pointer group"> 
                    <AnimatedText text="Reviews" className="inline-block text-[#BBBABA] group-hover:text-white transition" /> <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span> 
                </div> 

                <div onClick={() => handleScroll("recognition", -10)} className="relative cursor-pointer group"> 
                    <AnimatedText text="Recognition" className="inline-block text-[#BBBABA] group-hover:text-white transition" /> <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span> 
                </div> 
            </div>

            {/* Social icons */}
            <div className="flex mobile:max-ssm:gap-4 ssm:gap-3 mobile:max-lg:mb-6 mobile:max-lg:mt-2">
            <motion.a href="https://x.com/TheQueenArit" target="_blank">
                <img className="cursor-pointer mobile:max-sm:h-8 sm:h-7" src={twitter} alt="Twitter" />
            </motion.a>
            </div>
        </div>

        <div className="h-[1px] w-full bg-[#313131] mt-5" />   {/* added more space */}

        <div className="px-4 sm:px-8 lg:px-12 mt-2 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            {/* copyright */}
            <div className="text-[#CECECE] opacity-65 flex flex-wrap text-[10px] sm:text-[12px] tracking-wide gap-2 justify-center inter">
                <AnimatedText text="© 2025 Queen Arit Circle." />
                <AnimatedText text="All Rights Reserved." />
                <AnimatedText text="Privacy Policy" />
            </div>

            {/* Back to top */}
            <div className="flex flex-col items-center">
            <img
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mobile:max-sm:h-9 h-7 cursor-pointer rounded-full hover:shadow-[0_0_7px_#FF4F76] hover:scale-95 hover:opacity-90 transition"
                src={backtotop}
                alt="Back to top"
            />
            <div className="mt-[2px]">
                <AnimatedText text="Back to top" className="text-[12px] mobile:max-sm:text-[14px] text-[#CECECE] inter tracking-wide" />
            </div>
            </div>
        </div>

         <img
            className="lg:hidden absolute -translate-y-[1020px] translate-x-24 inset-0 w-full h-full object-cover z-20"
            src={innermobileglow}
            alt="Glow"
          />
    
         <img
            className="lg:hidden absolute -translate-y-[230px] -translate-x-20 inset-0 w-full h-full object-cover z-20"
            src={innermobileglow}
            alt="Glow"
          />

        {/* <img className="w-full h-[115px]" src={QueenAritCircle} alt="" /> */}
        </div>

      </div>
    );
}
  
