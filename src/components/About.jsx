import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import glow from "../assets/inner glow.webp";
import mobileglow from "../assets/mobilesideglow.webp";
import queenarit from "../assets/queenarit.webp";
import arrow from "../assets/arrow-right.webp";

export default function Section() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="antialiased relative overflow-hidden w-full bg-[#0E0E0E] inter 
                 mobile:max-lg:h-full mobile:max-xxm:pt-[70px] xxm:max-lg:pt-20 lg:pt-16 
                 mobile:max-lg:pb-28 lg:pb-20"
    >
     {/* Top Gradient Overlay */}
    <div className="absolute top-0 left-0 w-full h-[229px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />

    {/* Bottom Gradient Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-[129px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />


      {/* Desktop Glow */}
      <div
        className="mobile:max-lg:hidden absolute top-0 left-0 translate-x-[650px] h-[700px] w-full 
                   bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${glow})` }}
      />

      {/* Mobile Glow */}
      <div
        className="lg:hidden absolute top-0 left-0 h-full w-full 
                   bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileglow})` }}
      />

      {/* Content */}

      {/* Mobile View */}
      <div className="lg:hidden absolute mobile:max-xxm:pt-20 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      z-20 flex flex-col items-center text-center w-full">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={0}
          className="text-white mobile:max-xxm:text-[42px] px-[15px] 
                     xxm:max-xsm:text-[39px] xsm:text-[46px] font-semibold inter"
        >
          About{" "}
          <span className="text-[#fc4f7b] mobile:max-xxm:hidden">
            Queen Arit Circle
          </span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={1}
          className="xxm:hidden text-[#fc4f7b] -my-2 mobile:max-xxm:text-[42px] 
                     px-[15px] xxm:max-xsm:text-4xl xsm:text-4xl font-semibold inter"
        >
          Queen Arit Circle
        </motion.p>
      </div>

      <div className="flex mobile:max-lg:flex-col mobile:max-lg:items-center justify-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={2}
          className="mobile:max-xxm:mt-20 mobile:max-lg:ml-[5px] mobile:max-lg:-mr-4"
        >
          <img
            className="xxm:h-[450px] mobile:max-xxm:h-[400px]"
            src={queenarit}
            alt=""
          />
        </motion.div>

        {/* Desktop View */}
        <div className="z-20 lg:text-left max-w-[600px] lg:max-blg:-ml-5 blg:ml-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={3}
            className="text-white text-5xl mobile:max-lg:hidden"
          >
            About <span className="text-[#fc4f7b]">Queen Arit Circle</span>
          </motion.p>

          <div className="text-white mobile:max-lg:mx-[20px] mobile:max-lg:-mt-9">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={4}
              className="my-5"
            >
              Breaking into tech is exciting, but the path from learning to
              earning can be filled with challenges. Our community exists to
              equip you with the skills that truly move your career forward from
              effective interviewing and collaboration to storytelling, personal
              branding, and more.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={5}
              className="mb-5"
            >
              We welcome early-career and mid-level professionals across fields
              like software development, design, product management, data,
              cybersecurity, virtual assistance, and more. Even beginners still
              learning the basics will find a place here.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={6}
            >
              Together, we’re building an empowering space where tech
              professionals sharpen skills, gain confidence and transition
              successfully into rewarding careers.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect 
                            transition text-[#110D0D] mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 
                            mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold 
                            hover:opacity-90 items-center mobile:max-xxm:gap-3 xxm:max-lg:gap-4 
                            lg:gap-4 inline-flex w-auto mobile:max-lg:mt-8 lg:mt-6 xl:mt-8"
                >
                <p className="mobile:max-xsm:text-[18px] xsm:max-lg:text-[25px] lg:text-[16px] xl:text-[19px] text-white">
                    Click here to Join
                </p>
                <div className="mt-[2px] bg-white p-[5px] xl:p-[6px] rounded-full">
                    <img className="xxm:max-lg:h-7 xl:h-6" src={arrow} alt="arrow" />
                </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
