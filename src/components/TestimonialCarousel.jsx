import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import nextarrow from "../assets/nextarrow.webp";
import previousarrow from "../assets/previousarrow.webp";

const testimonials = [
  {
    id: 1,
    name: "Motunrayo .O.",
    link: {
        label: "Software Developer ",
        url: "(Link to profile)"
    },
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "As a mother of two trying to break into tech, I often felt overwhelmed, torn between raising my kids and pursuing my career. This community made me realize I wasn’t alone. The support, flexibility, and encouragement I received here helped me stay consistent even on tough days. Seeing other women juggle motherhood and tech gave me the hope and strength to keep going. Now I believe it’s possible to grow my career without sacrificing family.",
  },

  {
    id: 2,
    name: "Motunrayo .O.",
    link: {
        label: "Software Developer ",
        url: "(Link to profile)"
    },
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Joining this group gave me the confidence to switch careers into UX. The feedback and mentorship helped me land my first role much faster than I expected.",
  },

  {
    id: 3,
    name: "Motunrayo .O.",
    link: {
        label: "Software Developer ",
        url: "(Link to profile)"
    },
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Balancing learning and family was difficult, but having a community of supportive peers made all the difference in staying motivated.",
  },

  {
    id: 4,
    name: "Motunrayo .O.",
    link: {
        label: "Software Developer ",
        url: "(Link to profile)"
    },
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "I felt stuck in my old career path, but the resources shared here helped me build a portfolio and transition into data analytics successfully.",
  },

  {
    id: 5,
    name: "Motunrayo .O.",
    link: {
        label: "Software Developer ",
        url: "(Link to profile)"
    },
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "This network not only helped me sharpen my skills but also connected me with amazing opportunities in the product space.",
  },

];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.25, // children animate one after another
      duration: 0.5 
    } 
  },
  exit: { opacity: 0, y: -30 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function TestimonialCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get left, center, right cards
  const leftIndex = (current - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (current + 1) % testimonials.length;

  const visibleCards = [
    testimonials[leftIndex],
    testimonials[current],
    testimonials[rightIndex],
  ];

  return (
    <div className="flex flex-col items-center pt-10 mobile:max-lg:pb-80 lg:pb-20 bg-[#0E0E0E] text-white overflow-hidden relative">
      {/* Heading */}
      <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-center tracking-wide font-semibold inter mb-8 text-3xl sm:text-4xl"
            >
            <p>
                See Reviews From {" "}
                {/* <span className="text-[#FA3E67] mobile:max-xsm:hidden">
                Community Members
                </span> */}
            </p>
            {/* <span className="text-[#FA3E67] xsm:hidden">Community Members</span> */}
            <p className="text-[#FA3E67]">Circle Members</p>
      </motion.div>

      {/* Cards */}
      <div className="flex items-center space-x-6">
        {visibleCards.map((t, index) => {
          const position = index === 1 ? "center" : "side";

          return (
            <AnimatePresence key={t.id} mode="wait">
                <div className="relative bg-[#161616] p-3 rounded-2xl border border-[#707070]">
                    {/* Outer subtle glow around all sides */}
                    <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] pointer-events-none z-0" />

                    {/* Bottom-only smaller gray blur */}
                    <div className="absolute inset-x-3 -bottom-1 h-[3px] bg-[#222222] blur-[3px] pointer-events-none z-0" />

                    {/* Actual Card */}
                    <motion.div
                        key={t.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        exit="exit"
                        viewport={{ once: true, amount: 0.3 }}
                        className={`${
                        position === "center" ? "text-white" : "text-gray-400"
                        } relative z-10 rounded-2xl bg-[#1D1D1D] text-start mobile:max-xxm:px-5 px-7 py-6 shadow-xl flex flex-col justify-between mobile:max-mmm:w-[330px] mmm:max-xxm:w-[350px] xxm:max-blm:w-[385px] blm:max-xsm:w-[420px] xsm:max-lg:w-[460px] lg:w-[480px] mobile:max-xxm:h-[360px] h-[310px]`}
                    >
                        {/* Text at the top */}
                        <motion.p variants={itemVariants} className="text-sm leading-relaxed">
                            {t.text}
                        </motion.p>

                        {/* Profile always pinned to bottom */}
                        <div className="flex items-center mt-5 gap-3">
                            <motion.img
                                variants={itemVariants}
                                src={t.img}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover border-[3px] border-[#4D4D4D]"
                            />

                            <div className="leading-snug -mt-[5px]">
                                <motion.h3 variants={itemVariants} className="font-semibold tracking-wide">
                                {t.name}
                                </motion.h3>
                                <motion.a
                                    variants={itemVariants}
                                    href="#"
                                    className={`text-xs tracking-wide ${
                                        position === "center" ? "text-white" : "text-gray-400"
                                    }`}
                                    >
                                    {t.link.label}
                                </motion.a>

                                <motion.a
                                    variants={itemVariants}
                                    href={t.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs tracking-wide ${
                                        position === "center" ? "text-[#DF496A]" : "text-gray-400"
                                    }`}
                                    >
                                    {t.link.url}
                                </motion.a>

                            </div>
                        </div>
                    </motion.div>
                </div>

              
            </AnimatePresence>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex mt-10 space-x-48">
            <button
                onClick={prevSlide}
                className="w-11 h-11 flex items-center justify-center rounded-2xl border border-[#292929] 
                            shadow-[0_3px_8px_#101010]"
            >
                <img src={previousarrow} alt="previous" />
            </button>

            <button
                onClick={nextSlide}
                className="w-11 h-11 flex items-center justify-center rounded-2xl border border-[#292929] 
                            shadow-[0_3px_8px_#101010]"
            >
                <img src={nextarrow} alt="previous" />
            </button>

      </div>

    </div>
  );
}
