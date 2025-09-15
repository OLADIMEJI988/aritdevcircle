import React from "react";
import { motion } from "framer-motion";
import innerbg from "../assets/eventcardinnerbg.webp";
import "./EventCards.css";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EventCards({
  img,
  title,
  hostimg,
  hostname,
  description,
}) {
  return (
    <div
      className="antialiased tracking-wide border border-[#FF4F76] mobile:max-ssm:w-80 pb-4 rounded-2xl 
                 mobile:max-lg:flex mobile:max-lg:flex-col
                 lg:block text-start hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition relative overflow-hidden"
      style={{
        backgroundImage: `url(${innerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-65 rounded-2xl pointer-events-none"></div>

      {/* event image */}
      <img
        src={img}
        alt="event"
        className="w-full rounded-t-2xl relative z-10"
      />

      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mobile:max-lg:px-[18px] lg:px-[10px] text-white text-2xl -mt-2 inter tracking-wide leading-6 relative z-10"
      >
        {title}
      </motion.p>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center mobile:max-lg:px-[18px] lg:px-[10px] gap-[4px] text-[13px] mt-[7px] relative z-10"
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
        className="flex items-center mobile:max-lg:px-[18px] lg:px-[10px] gap-[4px] text-[13px] relative z-10"
      >
        <p className="text-white leading-[22px] mt-1 text-[12px] tracking-wide">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
