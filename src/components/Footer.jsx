import React from "react";
import { motion } from "framer-motion";
import footerbg from "../assets/footerbg.png";
import innerglow from "../assets/footerglow.webp";
import floatingimgs from "../assets/footerfloatimg.webp";
import mobilefloatingimgs from "../assets/mobilefooterfloatimg.webp";
import arrow from "../assets/arrow-right.webp";
import linkedin from "../assets/linkedin.webp";
import twitter from "../assets/twitter.webp";
import instagram from "../assets/instagram.webp";
import Logo from "../assets/QueenAritCircleLogo.webp";
import backtotop from "../assets/backtotopimg.webp";

const sentence = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // typing speed per letter
        delayChildren: i * 0.3, // delay based on line index
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
        className={`overflow-hidden ${className}`}
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
        staggerChildren: 0.3, // controls spacing between each line
      },
    },
};
  
const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
    // helper function to handle smooth scroll with offset
    const handleScroll = (id, offset = -20) => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
  
    return (
      <div className="relative bg-[#0E0E0E] min-h-[690px] md:min-h-[800px] overflow-hidden flex flex-col justify-between">
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
          className="absolute inset-0 w-full h-full object-cover z-20"
          src={innerglow}
          alt="Glow"
        />
  
        {/* Floating images */}
        <div className="absolute mobile:max-ssm:hidden inset-0 pt-6 md:pt-11 flex justify-center z-30">
          <motion.img
            src={floatingimgs}
            alt="Floating"
            className="w-auto h-[100px] sm:h-[120px] md:h-[140px] object-contain"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        <div className="absolute ssm:hidden inset-0 pt-8 flex justify-center z-30">
          <motion.img
            src={mobilefloatingimgs}
            alt="Floating"
            className="w-auto h-[100px] sm:h-[120px] md:h-[140px] object-contain"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
  
        {/* Text + CTA */}
        <div className="relative z-40 text-white mobile:max-ssm:mt-[150px] mt-[180px] md:mt-[242px] text-center px-4">
          <div className="space-y-2 mobile:max-ssm:hidden text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            <AnimatedText
              text="Join a community of over 5000+"
              highlight={{ start: 25, end: 30 }}
            />
            <AnimatedText text="people who are deliberately upskilling" />
            <AnimatedText text="from learning to earning." />
          </div>

          <div className="space-y-1 ssm:hidden inter tracking-wide text-[25px] mt-2 font-medium text-center">
                <AnimatedText text="Join a community of over" delayIndex={0} />

                <div className="flex items-center justify-center gap-2">
                    <AnimatedText text="5000+" className="text-[#fc4f7b]" delayIndex={1} />
                    <AnimatedText text="people who are" delayIndex={2} />
                </div>

                <AnimatedText text="deliberately upskilling" delayIndex={3} />
                <AnimatedText text="from learning to earning." delayIndex={4} />
          </div>



  
          {/* CTA Button */}
          <motion.button
            className="bg-[#fc4f7b] text-white py-2 sm:py-[11px] px-4 sm:px-6 rounded-full font-semibold flex items-center gap-2 sm:gap-3 mx-auto hover:shadow-[0_0_7px_#FF4F76] hover:opacity-90 mt-6 sm:mt-8 text-sm sm:text-base"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <p className="text-sm sm:text-lg">Join the Circle Now</p>
            <div className="bg-white p-[4px] sm:p-[6px] rounded-full">
              <img className="h-4 sm:h-5" src={arrow} alt="arrow" />
            </div>
          </motion.button>
        </div>
  
        {/* Bottom section */}
        <div className="absolute bottom-2 inset-x-0 z-50">
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-12 gap-4 sm:gap-0">
            {/* Social icons */}
            <div className="flex mobile:max-ssm:gap-4 ssm:gap-3">
              <motion.a href="https://x.com/TheQueenArit" target="_blank">
                <img className="cursor-pointer mobile:max-ssm:h-8 ssm:h-7" src={twitter} alt="Twitter" />
              </motion.a>
              <motion.a href="https://instagram.com/" target="_blank">
                <img className="cursor-pointer mobile:max-ssm:h-8 ssm:h-7" src={instagram} alt="Instagram" />
              </motion.a>
              <motion.a href="https://linkedIn.com/" target="_blank">
                <img className="cursor-pointer mobile:max-ssm:h-8 ssm:h-7" src={linkedin} alt="LinkedIn" />
              </motion.a>
            </div>
  
            {/* Nav links (with scroll functionality restored) */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mobile:max-ssm:text-[14px] text-[12px] sm:text-[13px] tracking-wider inter text-[#CECECE]">
              <div onClick={() => handleScroll("about-section", -20)} className="relative cursor-pointer group">
                <AnimatedText text="About" className="inline-block text-[#BBBABA] group-hover:text-white transition" />
                <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
              </div>
  
              <div onClick={() => handleScroll("testimonials", -20)} className="relative cursor-pointer group">
                <AnimatedText text="Testimonials" className="inline-block text-[#BBBABA] group-hover:text-white transition" />
                <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
              </div>
  
              <div onClick={() => handleScroll("events-section", -5)} className="relative cursor-pointer group">
                <AnimatedText text="Programmes" className="inline-block text-[#BBBABA] group-hover:text-white transition" />
                <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
              </div>
  
              <div onClick={() => handleScroll("faq", -10)} className="relative cursor-pointer group">
                <AnimatedText text="FAQs" className="inline-block text-[#BBBABA] group-hover:text-white transition" />
                <span className="absolute left-0 -bottom-[1px] w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
  
            {/* Logo */}
            <motion.div>
              <img className="h-12" src={Logo} alt="Logo" />
            </motion.div>
          </div>
  
          <div className="h-[1px] w-full bg-[#313131] mt-4 sm:mt-5" />
  
          <div className="px-4 sm:px-8 lg:px-12 mt-2 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            {/* copyright */}
            <div className="text-[#CECECE] flex flex-wrap text-[11px] sm:text-[12px] tracking-wide gap-2 justify-center">
              <AnimatedText text="© 2025 Queen Arit Circle." />
              <AnimatedText text="All Rights Reserved." />
              <AnimatedText text="Privacy Policy" />
            </div>
  
            {/* Back to top */}
            <div className="flex flex-col items-center">
              <img
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="h-7 cursor-pointer rounded-full hover:shadow-[0_0_7px_#FF4F76] hover:scale-95 hover:opacity-90 transition"
                src={backtotop}
                alt="Back to top"
              />
              <div className="mt-[2px]">
                <AnimatedText text="Back to top" className="text-[12px] text-[#CECECE]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
