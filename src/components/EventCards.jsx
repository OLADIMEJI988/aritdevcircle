import React from "react";
import { motion } from "framer-motion";
import video from "../assets/video.webp";
import "./EventCards.css";

// Children animation (each animates only when in viewport)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventCards({ img, title, subtitle, hostimg, hostname, calendermonth, calenderday, date, time, location, link }) {
  return (
    <div
      className="antialiased border border-[#FF4F76] mobile:max-ssm:w-80 pb-4 rounded-2xl 
                 mobile:max-lg:flex mobile:max-lg:flex-col
                 lg:block text-start hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition"
    >
      {/* Static image (no animation) */}
      <img src={img} alt="event" className="w-full rounded-t-2xl" />

      {/* Animated content (individually triggered in viewport) */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mobile:max-lg:px-[18px] lg:px-[10px] text-white text-2xl -mt-2 inter tracking-wide leading-6"
      >
        {title} <span className="text-[15px]">{subtitle}</span>
      </motion.p>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center mobile:max-lg:px-[18px] lg:px-[10px] gap-[4px] text-[13px]"
      >
        <p className="text-[#FF4F76]">Hosted by</p>
        <img src={hostimg} className="h-8" alt="host" />
        <p className="text-white">{hostname}</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mobile:max-lg:px-[18px] lg:px-[10px] mt-1 flex items-center gap-2"
      >
        <div className="border border-[#2D2D2D] w-11 h-11 rounded-lg">
          <div className="border border-[#2D2D2D] bg-[#FF4F76] w-full h-[25px] rounded-t-xl flex items-center justify-center">
            <p className="text-white text-[15px]">{calendermonth}</p>
          </div>
          <p className="text-white flex justify-center -mt-[3px] tracking-wider">
            {calenderday}
          </p>
        </div>

        <div className="text-[#B7B4B4] text-[11px]">
          <p>{date}</p>
          <p className="mt-1">{time}</p>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mobile:max-lg:px-[18px] lg:px-[10px] mt-[11px] flex items-center gap-2"
      >
        <div className="border border-[#2D2D2D] w-11 h-11 px-[2px] rounded-lg flex justify-center items-center">
          <img src={video} alt="video icon" />
        </div>

        <div className="text-[#B7B4B4] text-[11px]">
          <p>{location}</p>
          <p className="mt-1">{link}</p>
        </div>
      </motion.div>
    </div>
  );
}
