import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import nextarrow from "../assets/nextarrow.webp";
import previousarrow from "../assets/previousarrow.webp";

const testimonials = [
  {
    id: 1,
    name: "Software Developer",
    link: "LinkedIn link",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "As a mother of two trying to break into tech, I often felt overwhelmed, torn between raising my kids and pursuing my career. This community made me realize I wasn’t alone. The support, flexibility, and encouragement I received here helped me stay consistent even on tough days. Seeing other women juggle motherhood and tech gave me the hope and strength to keep going. Now I believe it’s possible to grow my career without sacrificing family.",
  },
  {
    id: 2,
    name: "UX Designer",
    link: "LinkedIn link",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Joining this group gave me the confidence to switch careers into UX. The feedback and mentorship helped me land my first role much faster than I expected.",
  },
  {
    id: 3,
    name: "Frontend Engineer",
    link: "LinkedIn link",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Balancing learning and family was difficult, but having a community of supportive peers made all the difference in staying motivated.",
  },
  {
    id: 4,
    name: "Data Analyst",
    link: "LinkedIn link",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "I felt stuck in my old career path, but the resources shared here helped me build a portfolio and transition into data analytics successfully.",
  },
  {
    id: 5,
    name: "Product Manager",
    link: "LinkedIn link",
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
            className="text-center font-semibold inter mb-10 text-3xl sm:text-4xl"
            >
            <p>
                Hear What Our{" "}
                <span className="text-[#FA3E67] mobile:max-xsm:hidden">
                Community Members
                </span>
            </p>
            <span className="text-[#FA3E67] xsm:hidden">Community Members</span>
            <p>Have To Say About Us</p>
      </motion.div>

      {/* Cards */}
      <div className="flex items-center space-x-6">
        {visibleCards.map((t, index) => {
          const position = index === 1 ? "center" : "side";

          return (
            <AnimatePresence key={t.id} mode="wait">
              <motion.div
                key={t.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.3 }}
                className={`${
                  position === "center"
                    ? "bg-[#FA3E67] text-white"
                    : "bg-[#110F0F] text-gray-400 border"
                } rounded-[45px] px-7 py-6 shadow-xl relative flex flex-col items-center text-center w-[345px] sm:w-[480px] h-[320px]`}
              >
                {/* Image first */}
                <motion.img
                  variants={itemVariants}
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-4 border-white"
                />

                {/* Then text */}
                <motion.p
                  variants={itemVariants}
                  className="text-sm leading-relaxed line-clamp-6"
                >
                  {t.text}
                </motion.p>

                {/* Then name */}
                <motion.h3
                  variants={itemVariants}
                  className="mt-4 font-semibold"
                >
                  {t.name}
                </motion.h3>

                {/* Then link */}
                <motion.a
                  variants={itemVariants}
                  href="#"
                  className={`text-xs ${
                    position === "center" ? "text-white" : "text-gray-400"
                  }`}
                >
                  {t.link}
                </motion.a>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex mt-10 space-x-64">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white"
        >
          <img src={previousarrow} alt="previous" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white"
        >
          <img src={nextarrow} alt="next" />
        </button>
      </div>
    </div>
  );
}
