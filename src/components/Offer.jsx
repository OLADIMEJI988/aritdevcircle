import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import glow from "../assets/inner glow.webp";
import mobileglow from "../assets/mobilesideglow.webp";
import rocket from "../assets/rocket.webp";
import guide from "../assets/guide.webp";
import chain from "../assets/chain.webp";
import globe from "../assets/globe.webp";
import EachOffer from './EachOffer';

import './Offer.css'

export default function Offer() {
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
        ease: "easeOut"
      }
    })
  };

  return (
    <div 
      ref={ref}
      className="antialiased relative overflow-hidden mobile:max-lg:pt-20 lg:pt-16 w-full mobile:max-lg:pb-10 mobile:max-lg:h-full lg:pb-14 bg-[#0E0E0E] inter"
    >
      {/* Gradient at the top */}
      <div className="absolute top-0 left-0 w-full h-[229px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />
      
      {/* Background Glow */}
      <div
        className="mobile:max-lg:hidden absolute top-0 left-0 translate-x-[650px] h-[700px] w-full bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${glow})` }}
      />

      <div
        className="lg:hidden absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileglow})` }}
      />

      {/* Headings */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center text-center w-full">
            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                custom={0}
                className="text-white mobile:max-xxm:text-[35px] px-[15px] xxm:max-xsm:text-3xl xsm:text-4xl font-semibold inter"
            >
                What Makes <span className="text-[#fc4f7b] mobile:max-xxm:hidden">Queen Arit Circle</span>
            </motion.p>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                custom={1}
                className="xxm:hidden text-[#fc4f7b] -my-2 mobile:max-xxm:text-[35px] px-[15px] xxm:max-xsm:text-3xl xsm:text-4xl font-semibold inter"
            >
                Queen Arit Circle
            </motion.p>

            <motion.p
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                custom={1}
                className="text-white mobile:max-xxm:text-[35px] px-[15px] xxm:max-xsm:text-3xl xsm:text-4xl font-semibold inter"
            >
                Community Different
            </motion.p>
      </div>


      {/* Offers */}
      <div className='flex justify-center mobile:max-lg:mt-[95px] lg:mt-[100px] gap-4 text-white mobile:max-lg:px-[20px] lg:px-[4vw] xl:px-[9vw]'>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          custom={2}
          className="mobile:max-lg:hidden lg:block border border-[#FF4F76] rounded-2xl max-w-56 pt-5 px-4 text-left 
                    hover:shadow-[0_0_8px_#FF4F76] cursor-pointer hoverEffect transition"
        >
          <img src={rocket} className="h-[34px]" alt="" />
          <p className="font-semibold mt-9 text-2xl">Career</p>
          <p className="font-semibold mt-[5px] mb-[18px] text-2xl">Readiness</p>
          <p className="tracking-wide text-sm leading-7">
            Helping members sharpen skills that actually move their careers forward
          </p>
        </motion.div>

        <div className='w-full xsm:max-lg:gap-4 xsm:max-lg:grid mobile:max-md:grid-cols-1 md:max-lg:grid-cols-2'>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={3}
            className='mobile:max-lg:block lg:hidden'
          >
            <EachOffer icon={rocket} title="Career Readiness" subtext=" Helping members sharpen skills that actually move their careers forward" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={4}
            className='mobile:max-xsm:mt-6'
          >
            <EachOffer icon={guide} title="Mentorship & Guidance" subtext="Access to free & paid guidance from seasoned tech professionals." />
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={5}
            className='mobile:max-xsm:mt-6 xsm:max-lg:my-0 mb-6 lg:mt-6'
          >
            <EachOffer icon={chain} title="Hands On Challenges & Hackathons" subtext="Real projects that sharpen problem solving, teamwork, and portfolio building." />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            custom={6}
          >
            <EachOffer icon={globe} title="A hub for diverse tech fields" subtext="Bringing together developers, designers, PMs, data pros, writers, VAs, and more." />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
