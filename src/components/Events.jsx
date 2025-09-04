import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import eventsglow from "../assets/eventsbg.webp";
import mobileglow from "../assets/mobilesideglow.webp";
import desktopline from "../assets/desktopline.webp";
import mobileline from "../assets/mobileline.webp";
import mentor from "../assets/mentor.webp";
import queenarit from "../assets/queenarit.webp";
import portfolioreview from "../assets/portfolioreview.webp";
import hackathon from "../assets/hackathon.webp";
import mumsintech from "../assets/mumsintech.webp";

import EventCards from "./EventCards";

export default function Events() {
  const events = [
    {
        img: hackathon,
        title: "QAC Hackathon",
        hostimg: queenarit,
        hostname: "Queen Arit",
        description: "Our flagship program, the QAC Hackathon brings designers, developers and product/project managers together to build a fullstack app under real-world constraints & conditions."
    },
    {
      img: mentor,
      title: "Mentor's Corner",
      hostimg: queenarit,
      hostname: "Queen Arit",
      description: "Enjoy high quality tech mentoring without the high price! Once monthly, we answer your career questions with knowledge, wisdom and humour!"
    },
    {
      img: mumsintech,
      title: "Mums In Tech",
    //   subtitle: "Encouragement & Learning",
      hostimg: queenarit,
      hostname: "Queen Arit",
      description: "Queen Arit became an engineer as a mum-of-two. So mums in Tech hold a special place in her spirit. These events are uniquely designed to empower mums with their multi-faceted lives!"
    },
    {
      img: portfolioreview,
      title: "Tech Profile Reviews",
      hostimg: queenarit,
      hostname: "Queen Arit",
      description: "Before they meet you, your professional profiles speak for you. Learn how to make the BEST impression with your resume, LinkedIn and portfolio."
    },
  ];

  // Variants for header animation
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.25, duration: 0.6, ease: "easeOut" }, // delay starts after header
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      className="antialiased relative overflow-hidden w-full bg-[#0E0E0E] inter 
                 mobile:max-lg:h-full h-[780px] lg:h-[820px] mobile:max-xxm:pt-[70px] xxm:max-lg:pt-20 lg:pt-16 
                 mobile:max-ssm:pb-60 ssm:max-lg:pb-64 lg:-mb-10"
      ref={ref}
    >
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[229px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="mobile:max-ssm:hidden absolute bottom-0 left-0 w-full h-[129px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

      {/* Desktop Glow */}
      <div
        className="mobile:max-lg:hidden absolute top-0 left-0 h-full w-full 
                        bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${eventsglow})` }}
      />


      <div
            className="lg:hidden absolute top-0 left-0 h-full w-full 
                        bg-no-repeat bg-center bg-cover pointer-events-none z-0"
            style={{ backgroundImage: `url(${mobileglow})` }}
       />


        <div
            className="mobile:max-ssm:hidden lg:hidden absolute bottom-0 left-0 h-[300px] w-full 
                        bg-no-repeat translate-y-28 mb-14 bg-center bg-cover pointer-events-none z-0"
            style={{ backgroundImage: `url(${desktopline})` }}
        />


       <div
            className="ssm:hidden absolute bottom-0 left-0 h-[250px] w-full 
                        bg-no-repeat translate-y-11 mb-10 bg-center bg-cover pointer-events-none z-0"
            style={{ backgroundImage: `url(${mobileline})` }}
       />


      {/* Animated Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-white tracking-wide relative px-[4vw] z-20 inter"
      >
        <p className="mobile:max-xxm:text-[35px] xxm:text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
          Examples Of{" "}
          <span className="text-[#fc4f7b]">Circle</span> Events
        </p>
      </motion.div>

      {/* Animated Cards */}
      <div className="mx-[2vw] grid justify-center 
            mobile:max-ssm:grid-cols-1
            ssm:max-mdxl:grid-cols-2 
            mdxl:max-lg:grid-cols-3 
            lg:grid-cols-4 
            mt-8 lg:mt-9
            mobile:max-ssm:gap-6 
            ssm:max-blg:gap-[14px] blg:max-xl:gap-4 xl:gap-5 
            relative z-20">
            {events.map((event, i) => (
                <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i}
                className="flex justify-center"
                >
                <EventCards {...event} />
                </motion.div>
            ))}
        </div>

    </div>
  );
}
