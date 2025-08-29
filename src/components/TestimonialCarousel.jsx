import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import nextarrow from "../assets/nextarrow.webp";
import previousarrow from "../assets/previousarrow.webp";
import Ego from "../assets/Ego.webp";
import oladimeji from "../assets/oladimeji.webp";
import precious from "../assets/precious.webp";
import damilola from "../assets/damilola.webp";
import jacinta from "../assets/jacinta.webp";
import aishat from "../assets/aishat.webp";
import vera from "../assets/vera.webp";
import eseosa from "../assets/eseosa.webp";
import miracle from "../assets/miracle.webp";
import chukwudi from "../assets/chukwudi.webp";
import motunrayo from "../assets/motunrayo.webp";
import marvelous from "../assets/marvelous.webp";
import linkedin from "../assets/linkedin.webp";



const testimonials = [
  {
    id: 1,
    name: "Nwakaego O",
    link: {
        label: "Product Designer ",
        url: "https://www.linkedin.com/in/onyah-nwakaego"
    },
    img: Ego,
    text: "Joining The Queen Arit Circle has been nothing short of life changing. I have expanded my tech knowledge and engaged in powerful conversations that have shaped my confidence and voice. I have grown as a designer, unlocked new opportunities, and am thriving in both career and motherhood!",
  },

  {
    id: 2,
    name: "Oladimeji S",
    link: {
        label: "Frontend Developer ",
        url: "https://www.linkedin.com/in/sholanke-oladimeji"
    },
    img: oladimeji,
    text: "Being part of the Circle has boosted my skills as a frontend developer and opened me up to knowledge I didn’t even know I needed. Beyond the tech, the community vibe and connections have been a huge blessing.",
  },

  {
    id: 3,
    name: "Precious E.B",
    link: {
        label: "Virtual Assistant",
        url: " https://www.linkedin.com/in/precious-eniola-balogun "
    },
    img: precious,
    text: "The VA Challenge was a game changer for my career. I learned how to confidently pitch myself, design a client onboarding process, and create a professional discovery call template, all things I hadn’t done before. After the challenge I landed a VA role! I thank God for ordering my steps, and the queen herself Arit for creating this amazing space to grow, learn, and connect.",
  },

  {
    id: 4,
    name: "Damilola A",
    link: {
        label: "Creative Designer ",
        url: "(Link to profile)"
    },
    img: damilola,
    text: "Joining the Queen Arit Circle has been a blessing to me. It had opened my eyes to know how to do things differently, not just in TECH but in LIFE generally. Thank you for sharing the LIGHT.",
  },

  {
    id: 5,
    name: "Jacinta U",
    link: {
        label: "Technical Writer ",
        url: " https://www.linkedin.com/in/jacinta-ugochukwu-730044255"
    },
    img: jacinta,
    text: "In just three months with this community, I’ve grown more than I imagined possible. Under Queen Arit’s mentorship, I found the confidence to speak with clarity. I’m deeply grateful for this transformative journey.",
  },

  {
    id: 6,
    name: "Aishat O",
    link: {
        label: "Virtual Assistant ",
        url: "https://www.linkedin.com/in/aishat-olayiwola"
    },
    img: aishat,
    text: "Being part of TQA Circle not up to 3 months has been truly transformative. The VA Challenge gained me clarity, confidence, and direction I haven't found anywhere else. I have achieved milestones I didn’t think were possible in such a short time.",
  },

  {
    id: 7,
    name: "Vera N",
    link: {
        label: "Frontend Developer ",
        url: "https://www.linkedin.com/in/chioma-vera-nkanmuo/"
    },
    img: vera,
    text: "Being part of this community helped me break out of my shell - staying visible and consistently building my online presence. Through the QAC hackathon, I found my voice again as a frontend developer and reignited my passion to grow.",
  },

  {
    id: 8,
    name: "Eseosa O",
    link: {
        label: "Product Designer ",
        url: "http://linkedin.com/in/eseosa-okosun-177869280"
    },
    img: eseosa,
    text: "Being in Queen Arits' community for a while allowed me to immerse myself in growth. Communication, consistency, and visibility used to be what I struggled with, but barely 2 weeks in, I've moved from a struggling designer to a lady who knows what success is like.",
  },

  {
    id: 9,
    name: "Miracle A",
    link: {
        label: "Virtual Assistant ",
        url: "https://www.linkedin.com/in/miracleagitan/"
    },
    img: miracle,
    text: "Just 3 days into the VA Challenge, I landed a gig! This community truly bridges the gap from learning to earning, by providing real opportunities and support that have boosted my confidence and opened doors I never imagined!",
  },

  {
    id: 10,
    name: "Chukwudi D.O.",
    link: {
        label: "Software Developer ",
        url: "https://www.linkedin.com/in/chukwudi-david-okoro-66b25620b"
    },
    img: chukwudi,
    text: "The Queen Arit circle gave me an opportunity that connected me with great mentors and peers. These people had a major impact on my growth and helped me gain confidence in my career as software developer.",
  },

  {
    id: 11,
    name: "Motunrayo A",
    link: {
        label: "Frontend Engineer ",
        url: "https://www.linkedin.com/in/motunrayoadeneye"
    },
    img: motunrayo,
    text: "Only this year, I have hopped on different challenges which I have never had any experience on, some I got gifts while some I lost. The essence of all these for me is that I get better. As a result of this I have gathered a lot of experiences which I haven't been able to get for 2 years.",
  },

  {
    id: 12,
    name: "Marvelous B",
    link: {
        label: "Automation Engineer ",
        url: "https://www.linkedin.com/in/marvelous-benjaminin-00a444262"
    },
    img: marvelous,
    text: "Joining this community pushed me beyond my comfort zone — from the VA Challenge that gave me so much clarity, to landing a job after Challenge! Shout-out to Queen Arit for carving destinies.",
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
    <>

    <div className="flex flex-col items-center pt-10 pb-24 bg-[#0E0E0E] text-white overflow-hidden relative mobile:max-xxm:min-h-[630px] xxm:max-lg:min-h-[555px] lg:min-h-[550px]">
      {/* Heading */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariants}
        className="text-center tracking-wide font-semibold inter mb-8 mobile:max-xxm:text-[35px] xxm:text-3xl sm:text-4xl"
      >
        <p>Circle Members Are</p>
        <p className="text-[#FA3E67]">Winning!</p>
      </motion.div>

      {/* Cards */}
      <div className="flex items-center space-x-4">
        {visibleCards.map((t, index) => {
          const position = index === 1 ? "center" : "side";

          return (
            <AnimatePresence key={t.id} mode="wait">
              <div className="relative bg-[#161616] p-3 rounded-2xl border border-[#707070]">
                {/* Top subtle glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] pointer-events-none z-0" />
                {/* Bottom-only blur */}
                <div className="absolute inset-x-3 -bottom-1 h-[3px] bg-[#222222] blur-[3px] pointer-events-none z-0" />

                {position === "center" ? (
                  <motion.div
                    key={`${t.id}-${current}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={`${
                      position === "center" ? "text-white" : "text-gray-400"
                    } relative z-10 rounded-2xl bg-[#1D1D1D] text-start mobile:max-xxm:px-5 px-7 py-6 shadow-xl flex flex-col justify-between mobile:max-mmm:w-[330px] mmm:max-xxm:w-[350px] xxm:max-blm:w-[385px] blm:max-xsm:w-[420px] xsm:max-lg:w-[460px] lg:w-[480px] h-auto`}
                  >
                    {/* Text */}
                    <motion.p variants={itemVariants} className="text-sm leading-relaxed">
                      {t.text}
                    </motion.p>

                    {/* Profile */}
                    <div className="flex items-center mt-7 gap-3">
                      <div className="w-12 h-12 aspect-square rounded-full overflow-hidden border-[3px] border-[#4D4D4D] flex-shrink-0">
                        <motion.img
                          variants={itemVariants}
                          src={t.img}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="leading-snug -mt-[5px]">
                        <motion.h3 variants={itemVariants} className="font-semibold tracking-wide">
                          {t.name}
                        </motion.h3>
                        <motion.div
                          variants={itemVariants}
                          className="flex items-center gap-3 text-[#FA3E67]"
                        >
                          <p className="text-xs tracking-wide">{t.link.label}</p>
                          <a href={t.link.url} target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : (

                  // 🔹 Side cards stay static
                  <div
                    key={t.id}
                    className={`text-gray-400 relative z-10 rounded-2xl bg-[#1D1D1D] text-start mobile:max-xxm:px-5 px-7 py-6 shadow-xl flex flex-col justify-between mobile:max-mmm:w-[330px] mmm:max-xxm:w-[350px] xxm:max-blm:w-[385px] blm:max-xsm:w-[420px] xsm:max-lg:w-[460px] lg:w-[480px] h-auto`}
                  >
                    {/* Text */}
                    <p className="text-sm leading-relaxed">{t.text}</p>

                    {/* Profile */}
                    <div className="flex items-center mt-7 gap-3">
                      <div className="w-12 h-12 aspect-square rounded-full overflow-hidden border-[3px] border-[#4D4D4D] flex-shrink-0">
                        <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="leading-snug -mt-[5px]">
                        <h3 className="font-semibold tracking-wide">{t.name}</h3>
                        <div className="flex items-center gap-3 text-gray-400">
                          <p className="text-xs tracking-wide">{t.link.label}</p>
                          <a href={t.link.url} target="_blank" rel="noopener noreferrer">
                            <img
                              src={linkedin}
                              alt="LinkedIn"
                              className="w-6 h-6 cursor-pointer filter brightness-75"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </AnimatePresence>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-36">
        <button
          onClick={prevSlide}
          className="w-11 h-11 flex items-center justify-center rounded-2xl hover:shadow-[0_0_8px_#292929] transition border border-[#292929] shadow-[0_3px_8px_#101010] bg-[#161616]"
        >
          <img src={previousarrow} alt="previous" />
        </button>

        <button
          onClick={nextSlide}
          className="w-11 h-11 flex items-center justify-center rounded-2xl hover:shadow-[0_0_8px_#292929] transition border border-[#292929] shadow-[0_3px_8px_#101010] bg-[#161616]"
        >
          <img src={nextarrow} alt="next" />
        </button>
      </div>
    </div>

    <div className="bg-[#0E0E0E] mobile:max-lg:py-7 lg:py-9"></div>
    </>
  );
}
