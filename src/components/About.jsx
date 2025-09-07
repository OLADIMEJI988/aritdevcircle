import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import queenarit from "../assets/queenarit.webp";
import arrow from "../assets/arrow-right.svg";

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
                 mobile:max-lg:h-full mobile:max-xxm:pt-[45px] xxm:max-lg:pt-16 lg:pt-10 
                 mobile:max-lg:pb-16 lg:pb-12"
    >
     {/* Top Gradient Overlay */}
    <div className="absolute top-0 left-0 w-full h-[29px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />

    {/* Bottom Gradient Overlay */}
    <div className="absolute bottom-0 left-0 w-full h-[129px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

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
                     xxm:max-xsm:text-[39px] tracking-wide xsm:text-[46px] font-semibold inter"
        >
          A{" "}
          <span className="text-[#fc4f7b]">
            Queen's
          </span>
          {" "}Welcome
        </motion.p>

      </div>

      <div className="flex mobile:max-lg:flex-col items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={2}
          className="mobile:max-xxm:mt-24 xxm:max-lg:mt-5 mobile:max-lg:mb-4"
        >
          <img
            className="xxm:h-[450px] mobile:max-xxm:h-[380px]"
            src={queenarit}
            alt=""
          />
        </motion.div>

        {/* Desktop View */}
        <div className="z-20 lg:text-left tracking-wide max-w-[600px] lg:max-blg:-ml-5 blg:ml-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={3}
            className="text-white text-5xl mobile:max-lg:hidden"
          >
            A <span className="text-[#fc4f7b]">Queen's</span> Welcome
          </motion.p>

          <div className="text-white text-[18px] leading-7 mobile:max-lg:mx-[5vw] mobile:max-lg:-mt-9">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={4}
              className="my-5"
            >
              Learning tech is one thing; earning with it is another. That leap from skills to income can feel tough, but you don’t have to figure it out alone.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={5}
              className="mb-5"
            >
              In the Circle, you’ll find guidance, real-world practice, and a supportive community all focused on helping you turn what you’ve learned into opportunities, confidence, and paid work. You belong here, and we’re excited to walk this journey with you!
            </motion.p>

          </div>

          {/* Button */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                onClick={() => window.location.href = "https://proxy.nas.io/queenaritcircle"}
                className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect 
                            transition text-[#110D0D] mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 
                            mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold 
                            hover:opacity-90 items-center gap-3 inline-flex w-auto mobile:max-lg:mt-4 lg:mt-4 xl:mt-5"
                >
                <p className="mobile:max-xsm:text-[18px] xsm:max-lg:text-[25px] lg:text-[19px] tracking-wide xl:text-[19px] text-white">
                    Click here to Join
                </p>
                <div className="mt-[2px] bg-white p-[5px] xl:p-[6px] rounded-full">
                    <img className="h-6" src={arrow} alt="arrow" />
                </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
