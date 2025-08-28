import React from "react";
import { motion } from "framer-motion";
import footerbg from "../assets/footerbg.png";
import innerglow from "../assets/footerglow.webp";
import floatingimgs from "../assets/footerfloatimg.webp";
import arrow from "../assets/arrow-right.webp";
import linkedin from "../assets/linkedin.webp";
import twitter from "../assets/twitter.webp";
import instagram from "../assets/instagram.webp";
import Logo from "../assets/QueenAritCircleLogo.webp";
import backtotop from "../assets/backtotopimg.webp";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

const AnimatedText = ({ text, highlight, className = "" }) => {
  return (
    <motion.p
      className={`overflow-hidden ${className}`}
      variants={sentence}
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
            {char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default function Footer() {
  return (
    <div className="relative bg-[#0E0E0E] h-[800px] overflow-hidden">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-30" />

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
      <div className="absolute inset-0 pt-11 flex justify-center z-30">
        <motion.img
          src={floatingimgs}
          alt="Floating"
          className="w-auto h-[140px] object-contain"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      {/* Text + CTA */}
      <div className="relative z-40 text-white mt-[242px] text-4xl inter text-center">
        <div className="space-y-2">
          <AnimatedText
            text="Join a community of over 5000+"
            highlight={{ start: 25, end: 30 }}
          />
          <AnimatedText text="people who are deliberately upskilling" />
          <AnimatedText text="from learning to earning." />
        </div>

        {/* CTA Button */}
        <motion.button
          className="bg-[#fc4f7b] text-white py-[11px] px-4 rounded-full font-semibold flex items-center gap-3 mx-auto hover:shadow-[0_0_7px_#FF4F76] hover:opacity-90 mt-8"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.8,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <p className="text-lg">Join the Circle Now</p>
          <div className="bg-white p-[6px] rounded-full">
            <img className="h-5" src={arrow} alt="arrow" />
          </div>
        </motion.button>
      </div>

      {/* Bottom section */}
      <div className="absolute bottom-2 inset-x-0 z-50">
        <div className="flex items-center justify-between px-12">
          {/* Social icons */}
          <div className="flex gap-[9px]">
            <motion.a
              href="https://x.com/TheQueenArit"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img className="cursor-pointer h-7" src={twitter} alt="Twitter" />
            </motion.a>

            <motion.a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.04 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img className="cursor-pointer h-7" src={instagram} alt="Instagram" />
            </motion.a>

            <motion.a
              href="https://linkedIn.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img className="cursor-pointer h-7" src={linkedin} alt="LinkedIn" />
            </motion.a>
          </div>

          {/* Nav links */}
          <div className="tracking-wider inter text-[#CECECE] flex gap-5 text-[13px]">
            <div
              onClick={() => {
                const el = document.getElementById("about-section");
                const yOffset = -20;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="relative cursor-pointer group"
            >
              <AnimatedText
                text="About"
                className="inline-block text-[#BBBABA] group-hover:text-white transition"
              />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => {
                const el = document.getElementById("testimonials");
                const yOffset = -20;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="relative cursor-pointer group"
            >
              <AnimatedText
                text="Testimonials"
                className="inline-block text-[#BBBABA] group-hover:text-white transition"
              />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => {
                const el = document.getElementById("events-section");
                const yOffset = -5;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="relative cursor-pointer group"
            >
              <AnimatedText
                text="Programmes"
                className="inline-block text-[#BBBABA] group-hover:text-white transition"
              />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => {
                const el = document.getElementById("faq");
                const yOffset = -10;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="relative cursor-pointer group"
            >
              <AnimatedText
                text="FAQs"
                className="inline-block text-[#BBBABA] group-hover:text-white transition"
              />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img className="h-12" src={Logo} alt="" />
          </motion.div>
        </div>

        <div className="h-[1px] w-full bg-[#313131] mt-5" />

        <div className="px-12 mt-2 flex justify-between inter items-center">
          {/* copyright */}
          <div className="text-[#CECECE] flex text-[12px] tracking-wide gap-2 items-center">
            <AnimatedText text="© 2025 Queen Arit Circle." className="text-[12px]" />
            <AnimatedText text="All Rights Reserved." className="text-[12px]" />
            <AnimatedText text="Privacy Policy" className="text-[12px] ml-3" />
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
